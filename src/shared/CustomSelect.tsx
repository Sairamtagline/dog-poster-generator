import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { toFirstCapital } from '../utils/customFunctions'
import { length } from '../utils/javascript'

interface restI {
    value?: string,
    onChange?: () => void,
}

interface selectI {
    options?: any,
    label?: string,
    rest?: restI
}

const CustomSelect = ({ options, label, ...rest }: selectI) => {
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={label}
                sx={{ minWidth: '200px' }}
                {...rest}
            >
                {length(options) ? options.map((value: string, index: number) => {
                    return (
                        <MenuItem value={value} key={index}>{toFirstCapital(value)}</MenuItem>
                    )
                }) : null}
            </Select>
        </FormControl>
    )
}

export default CustomSelect