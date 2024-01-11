import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#121829',
    },
  },
  typography: {
    h3: {
      fontSize: '1.6rem',
    },
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})
export default theme
