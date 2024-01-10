import { ThemeProvider } from '@emotion/react'

import { BrowserRouter } from 'react-router-dom'
import theme from './MovieTheme'
import Header from './components/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
