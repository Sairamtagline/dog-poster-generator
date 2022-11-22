import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import useCustomSelector from '../hooks/useCustomSelector';
import CustomDialog from '../shared/CustomDialog';
import { length } from '../utils/javascript'

interface propsI {
    imageModal?: any, setImageModal?: any
}

const useStyles = makeStyles((theme?: any) => ({
    imageFuild: {
        "& img": {
            width: "100%",
            height: 140,
            objectFit: 'cover'
        }
    }
}));

const GeneratedImageModal = ({ imageModal, setImageModal }: propsI) => {
    const classes = useStyles();
    const imageList: any = useCustomSelector((state: any) => state.dogBreeds.breedsImageList);

    const dialogContentUI = () => {
        return (
            length(imageList) ? imageList?.map((value: any, index: number) => {
                return (
                    <div key={index}>
                        <Typography variant="body1" component="p"><b>{`${value?.breed}/${value?.subBreed}/`}</b></Typography>
                        <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
                            {length(value?.imageList) ? value?.imageList.map((v: string, i: number) => {
                                return (
                                    <Grid item xs={2} sm={4} md={3} key={i}>
                                        <div className={classes.imageFuild}>
                                            <img src={v} alt={value?.subBreed} />
                                        </div>
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