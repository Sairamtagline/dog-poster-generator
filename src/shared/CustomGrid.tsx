import { Grid } from '@mui/material'

interface restI {
    container?: boolean,
    item?: boolean,
    spacing?: any,
    columns?: any,
    xs?: any,
    sm?: any,
    md?: any,
}

interface gridI {
    child: any,
    rest: restI
}

const CustomGrid = ({ child, rest }: gridI) => {
    return (
        <Grid {...rest}>{child}</Grid>
    )
}

export default CustomGrid