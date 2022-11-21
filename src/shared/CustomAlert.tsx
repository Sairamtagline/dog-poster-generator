import { Alert, Snackbar } from '@mui/material'

interface alertI {
    type?: any,
    message?: string,
    openFlag?: boolean,
    handleClose?: () => void
}

const CustomAlert = ({ type, message, openFlag, handleClose }: alertI) => {
    return (
        <Snackbar open={openFlag} autoHideDuration={4000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <Alert onClose={handleClose} severity={type || 'warning'}>{message}</Alert>
        </Snackbar>
    )
}

export default CustomAlert