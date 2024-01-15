import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import theme from './MovieTheme'
import Header from './components/Header'
import { Home, Movies, TvShows } from './page'
import FilmDetails from './page/FilmDetails'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index="*" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv-shows" element={<TvShows />} />
          <Route path="film-details/:id" element={<FilmDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
