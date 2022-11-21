import { Button } from '@mui/material'

interface restI {
    value?: string,
    onClick?: () => void,
    autoFocus?: boolean,
    className?: string
}

interface buttonI {
    children?: string,
    rest?: restI
}

const CustomButton = ({ children, ...rest }: buttonI) => {
    return (
        <Button variant="contained" size="large" {...rest}>
            {children}
        </Button>
    )
}

export default CustomButton