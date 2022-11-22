import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    hoc_box: {
        border: '1px solid black',
        borderRadius: 10,
        padding: '25px 50px',
        margin: '50px auto',
        width: 'max-content'
    }
})

const CustomBox = (Component: any) => {
    const CustomHoc = (props: any) => {
        const classes: any = useStyles();
        return (
            <Box className={classes.hoc_box}>
                <Component {...props} />
            </Box>)
    }
    return CustomHoc
}

export default CustomBox