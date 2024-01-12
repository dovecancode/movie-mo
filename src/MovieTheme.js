import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(90, 74, 244, 1)',
    },
    secondary: {
      main: 'rgba(182, 109, 255, 1)',
    },
  },
  typography: {
    h3: {
      fontSize: '1.2rem',
    },
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})
export default theme
