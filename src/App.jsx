import { ThemeProvider } from '@emotion/react'
import theme from './MovieTheme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { Home, Movies, TvShows } from './page'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index="*" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv-shows" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
