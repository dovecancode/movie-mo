import { Box, Container } from '@mui/material'
import { useFilmContext } from '../../contexts/useFilmContext'
import useFilm from '../../hook/useFilm'
import LoaderSpinner from '../LoaderSpinner'
import MovieCards from '../MovieCards'
import PageTitle from '../PageTitle'
import SearchBox from '../SearchBox'
import { MovieSeriesSection } from './MovieSeries.elements'

function MovieSeries() {
  const { query = '' } = useFilmContext() || {}
  const { status, movies } = useFilm(query)
  const isLoading = status === 'loading'

  return (
    <MovieSeriesSection>
      <Container>
        <PageTitle title="TV Shows" />
        <SearchBox placeholder="Search TV Shows" />
        {isLoading ? (
          <Box sx={{ height: '70vh', display: 'grid', placeItems: 'center' }}>
            <LoaderSpinner />
          </Box>
        ) : (
          <MovieCards films={movies} />
        )}
      </Container>
    </MovieSeriesSection>
  )
}

export default MovieSeries
