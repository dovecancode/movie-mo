import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#121829',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})
export default theme
