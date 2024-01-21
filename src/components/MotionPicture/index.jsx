import { Box, Container } from '@mui/material'
import { useFilmContext } from '../../contexts/useFilmContext'
import useFilm from '../../hook/useFilm'
import LoaderSpinner from '../LoaderSpinner'
import MovieCards from '../MovieCards'
import PageTitle from '../PageTitle'
import SearchBox from '../SearchBox'
import { MovieSection } from './MotionPicture.elements'

function MotionPicture() {
  const { query } = useFilmContext()

  const { status, movies } = useFilm(query)

  const isLoading = status === 'loading'

  return (
    <MovieSection>
      <Container>
        <PageTitle title="Movies" />
        <SearchBox placeholder="Search Movies" />
        {isLoading ? (
          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <LoaderSpinner />
          </Box>
        ) : (
          <MovieCards films={movies} />
        )}
      </Container>
    </MovieSection>
  )
}

export default MotionPicture
