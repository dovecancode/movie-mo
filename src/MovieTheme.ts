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
    h1: {
      fontWeight: 600,
      fontSize: '4rem',
      letterSpacing: '-0.08rem',
      color: '#EBEEF5',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.4rem',
      color: '#EBEEF5',
      letterSpacing: '0.02rem',
    },
    subtitle1: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: '#BEB7FB',
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#EBEEF5',
      letterSpacing: '-0.0225rem',
    },
    body1: {
      color: '#8E95A9',
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: '2rem',
    },
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            color: 'rgba(71, 80, 105, 1)',
          },
          '& label.Mui-focused': {
            color: 'rgba(182, 109, 255, 1)',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(50, 59, 84, 1)',
              borderRadius: '0.75rem',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(50, 59, 84, 1)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(182, 109, 255, 1)',
            },
          },
        },
      },
    },
  },
})
export default theme
