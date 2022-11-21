import { Grid } from '@mui/material'
import useCustomSelector from '../hooks/useCustomSelector';
import CustomDialog from '../shared/CustomDialog';
import { length } from '../utils/javascript'

interface propsI {
    imageModal?: any, setImageModal?: any
}

const GeneratedImageModal = ({ imageModal, setImageModal }: propsI) => {
    const imageList: any = useCustomSelector((state: any) => state.dogBreeds.breedsImageList);

    const dialogContentUI = () => {
        return (
            length(imageList) ? imageList?.map((value: any, index: number) => {
                return (
                    <div key={index}>
                        <p><b>{`${value?.breed}/${value?.subBreed}/`}</b></p>
                        <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                            {length(value?.imageList) ? value?.imageList.map((v: string, i: number) => {
                                return (
                                    <Grid item xs={2} sm={4} md={3} key={i}>
                                        <img src={v} alt={value?.subBreed} width="130" height="130" />
                                    </Grid>
                                )
                            }) : null}
                        </Grid>
                    </div >
                )
            }) : null
        )
    }


    const handleClose = () => {
        setImageModal({ flag: false, data: [] })
    }


    return (
        <CustomDialog  {...{ openFlag: imageModal?.flag, handleClose: handleClose, title: 'Images', dialogContent: dialogContentUI() }} />
    )
}

export default GeneratedImageModal