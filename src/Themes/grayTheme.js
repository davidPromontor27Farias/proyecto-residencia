import { createTheme } from "@mui/material"
import { red } from "@mui/material/colors"



export const grayTheme = createTheme({


    palette: {

        primary: {
            main: "#283747 ",
        },
        error: {
            main: red.A400
        },
        buttonLogin: {
            main: "#397D38"
        },
        buttonGoogle: {
            main: "#BA4A00"
        },
        colorText: {
            main: "#D0D3D4 "
        }
    }
})