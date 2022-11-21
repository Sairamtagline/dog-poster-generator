import { TextField } from '@mui/material'
import React from 'react'

interface restI {
    value?: string,
    label?: string,
    onChange?: () => void,
}

interface textFieldI {
    rest?: restI
}

const CustomTextField = ({ ...rest }: textFieldI) => {
    return (
        <TextField id="outlined-basic" variant="outlined" {...rest} />
    )
}

export default CustomTextField