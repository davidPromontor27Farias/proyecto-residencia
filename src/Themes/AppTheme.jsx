import { ThemeProvider } from '@emotion/react'
import { grayTheme } from './grayTheme'
import { CssBaseline } from '@mui/material'


export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={grayTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}

