import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import CustomButton from './CustomButton'

interface dialogI {
    openFlag?: boolean,
    handleClose?: () => void,
    title?: string,
    dialogContent?: any,
}

const CustomDialog = ({ openFlag, handleClose, title, dialogContent }: dialogI) => {
    return (
        <Dialog
            open={openFlag || false}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <b>{title}</b>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {dialogContent}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <CustomButton {...{ onClick: handleClose, autoFocus: true }} >Close</CustomButton>
            </DialogActions>
        </Dialog >
    )
}

export default CustomDialog