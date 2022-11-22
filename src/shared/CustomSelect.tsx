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
    id?: string,
    rest?: restI
}

const CustomSelect = ({ options, label, id, ...rest }: selectI) => {
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                label={label}
                sx={{ minWidth: '200px' }}
                {...rest}
                data-testid={id}
            >
                <MenuItem data-testid="select-Breed"></MenuItem>
                {length(options) ? options.map((value: string, index: number) => {
                    return (
                        <MenuItem data-testid={`select Breed`} value={value} key={index}>{toFirstCapital(value)}</MenuItem>
                    )
                }) : null}
            </Select>
        </FormControl>
    )
}

export default CustomSelect