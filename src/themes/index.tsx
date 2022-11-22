import { createTheme } from "@mui/material/styles";

import defaultTheme from './default'

const overrides = {
    typography: {
        fontFamily: ['Barlow', 'Arial', 'sans-serif'].join(','),
        h1: {
            fontSize: '3rem',
        },
        h2: {
            fontSize: '2rem',
        },
        h3: {
            fontSize: '1.64rem',
        },
        h4: {
            fontSize: '1.5rem',
        },
        h5: {
            fontSize: '1.285rem',
        },
        h6: {
            fontSize: '1.142rem',
        },
    },
}

export default {
    default: createTheme({ ...defaultTheme }),
}
