import { Box, Container } from '@mui/material'
import { PopularMoviesSection } from './PopularMovies.elements.js'

import CategoryButtons from '../CategoryButtons'

import { useFilmContext } from '../../contexts/useFilmContext.jsx'
import LoaderSpinner from '../LoaderSpinner'
import MovieCards from '../MovieCards'

function HomeFilm() {
  const { status, trendingFilm } = useFilmContext()
  const isLoading = status === 'loading'
  const isError = status === 'error'

  if (isError) {
    return <h1>There is an error fething the data</h1>
  }

  return (
    <PopularMoviesSection>
      <Container className="container" disableGutters>
        <CategoryButtons />

        {isLoading ? (
          <Box sx={{ height: '70vh', display: 'grid', placeItems: 'center' }}>
            <LoaderSpinner />
          </Box>
        ) : (
          <MovieCards films={trendingFilm} />
        )}
      </Container>
    </PopularMoviesSection>
  )
}

export default HomeFilm
