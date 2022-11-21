/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { getAllBreedsListAPI, getBreedImageAPI } from '../api/breedApi';
import { makeStyles } from '@material-ui/core/styles';
import CustomSelect from '../shared/CustomSelect';
import { entries, equal, keys, length } from '../utils/javascript';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CustomButton from '../shared/CustomButton';
import { TextField } from '@mui/material';
import CustomAlert from '../shared/CustomAlert';
import useCustomDispatch from '../hooks/useCustomDispatch';
import { setAlertData, setAllBreedsList, setBreedsFormData, setBreedsImageList } from '../store/actions/breedsAction';
import GeneratedImageModal from './GeneratedImageModal';
import CustomBox from '../shared/CustomBox';
import useCustomSelector from '../hooks/useCustomSelector';

const useStyles = makeStyles({
    button: {
        backgroundColor: 'yellow',
        color: 'black',
    },
    Box: {
        position: 'relative',
        "& .MuiFormControl-root": {
            margin: '7px 5px'
        },
        "& .MuiSvgIcon-root": {
            position: '',
            top: 0,
            verticalAlign: 'center',
        },
    },
    pointer: {
        cursor: 'pointer'
    },
    generateButton: {
        top: 15
    }
});

const BreedGeneration = () => {
    const classes: any = useStyles();
    const [allBreedList, setAllBreedList] = useState<Object>({})
    const [formData, setFormData] = useState<any>([{ breedList: [], selectedBreed: '', subBreedList: [], selectedSubBreed: '', imageCount: undefined, imageError: { flag: false, error: '' } }])
    const [imageModal, setImageModal] = useState<any>({ flag: false, data: [] })
    const { cusDispatch } = useCustomDispatch();
    const alertData: any = useCustomSelector((state: any) => state.dogBreeds.alert);

    const getBreeds = async () => {
        const response = await getAllBreedsListAPI();
        const { data, status } = response;
        const breedArray: any = [];
        length(entries(data)) && entries(data).forEach(([key, value]) => breedArray.push({ name: key, subBreed: value }))
        if (equal(status, 'success')) {
            setAllBreedList(data)
            cusDispatch(setAllBreedsList(data))
            const temp = [...formData];
            temp[0].breedList = data;
            setFormData(temp)
            cusDispatch(setBreedsFormData(temp))
        }
    }

    useEffect(() => {
        getBreeds()
    }, [])

    const handleBreedChange = (event: any, index: number) => {
        const { value } = event.target;
        const subBreedList = entries(formData?.[index]?.breedList).filter(([key, values]) => value === key && values)
        const temp = [...formData];
        temp[index].selectedBreed = value;
        temp[index].subBreedList = subBreedList?.[0]?.[1];
        cusDispatch(setBreedsFormData(temp))
        setFormData(temp)
    }

    const handleSubBreedChange = (event: any, index: number) => {
        const { value } = event.target;
        const temp = [...formData];
        temp[index].selectedSubBreed = value;
        cusDispatch(setBreedsFormData(temp))
        setFormData(temp)
    }

    const handleImageCountChange = (event: any, index: number) => {
        const { value } = event.target;
        const temp = [...formData];
        if (value > 50) {
            temp[index].imageError = { flag: true, error: 'Please enter the value below 50' };
            temp[index].imageCount = value;
        } else {
            temp[index].imageCount = value;
            temp[index].imageError = { flag: false, error: '' };
        }
        cusDispatch(setBreedsFormData(temp))
        setFormData(temp)
    }

    const validation = () => {
        const temp = [...formData];
        const errorList: any = [];
        temp.forEach((value) => (!value?.selectedBreed || !value?.selectedSubBreed || !value?.imageCount || value?.imageError?.flag) && errorList.push(value))
        return length(errorList) ? true : false;
    }

    const handleAddRow = () => {
        const temp = [...formData];
        const validationResp = validation()
        if (validationResp) {
            cusDispatch(setAlertData({ flag: true, type: 'warning', message: 'Please fill-up all the fields.' }))
        } else {
            temp.push({ breedList: allBreedList, selectedBreed: '', subBreedList: [], selectedSubBreed: '', imageCount: undefined, imageError: { flag: false, error: '' } })
            cusDispatch(setBreedsFormData(temp))
            setFormData(temp)
        }
    }

    const handleClose = () => {
        cusDispatch(setAlertData({ flag: false, message: '', type: '' }))
    }

    const handleGenerateBreed = async () => {
        const validationResp = validation()
        if (validationResp) {
            cusDispatch(setAlertData({ flag: true, type: 'warning', message: 'Please fill-up all the fields.' }))
        } else {
            const imageListData: any = [];
            for (let index = 0; index < formData?.length; index++) {
                const value = formData?.[index]
                const response = await getBreedImageAPI(value?.selectedBreed, value?.selectedSubBreed, value?.imageCount)
                if (equal(response?.status, 'success')) {
                    const imageData = { breed: value?.selectedBreed, subBreed: value?.selectedSubBreed, imageList: response?.data }
                    imageListData.push(imageData)
                }
            }
            cusDispatch(setBreedsImageList(imageListData))
            setImageModal({ flag: true, data: imageListData })
            cusDispatch(setAlertData({ flag: true, type: 'success', message: 'Images Generated successfully.' }))
        }
    }

    return (
        <div>
            <h1>Dog Poster Generator</h1>
            <CustomAlert {...{ type: alertData?.type, message: alertData?.message, handleClose, openFlag: alertData?.flag }} />
            <div className={classes?.Box}>
                {length(formData) ? formData.map((data: any, index: number) => {
                    return (
                        <div key={index}>
                            <CustomSelect {...{ value: data?.selectedBreed, onChange: (e: any) => handleBreedChange(e, index), options: length(keys(data?.breedList)) ? keys(data?.breedList) : {}, label: 'Breed' }} />
                            <CustomSelect {...{ value: data?.selectedSubBreed, onChange: (e: any) => handleSubBreedChange(e, index), options: data?.subBreedList || [], label: 'Sub-breed' }} />
                            <TextField type='number' value={data?.imageCount} label='Image Count' onChange={(e: any) => handleImageCountChange(e, index)} error={data?.imageError?.flag} helperText={data?.imageError?.error} />
                            {formData?.length === index + 1 ? <AddCircleOutlineIcon onClick={handleAddRow} className={classes.pointer} /> : null}
                        </div>)
                }) : null}
                <CustomButton {...{ onClick: handleGenerateBreed, className: classes.generateButton }}>Generate</CustomButton>
                {/* <CustomTextField {...{ type: 'number', value: count, label: 'Image Count', onChange: (e: any) =>handleImageCountChange(e,index) }} /> */}
            </div>
            {imageModal?.flag && <GeneratedImageModal {...{ imageModal, setImageModal }} />}
        </div >
    )
}

export default CustomBox(BreedGeneration)