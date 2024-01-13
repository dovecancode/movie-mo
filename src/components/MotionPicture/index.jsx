import { Box, Container } from '@mui/material'
import useMovies from '../../hook/useMovies'
import LoaderSpinner from '../LoaderSpinner'
import MovieCards from '../MovieCards'
import PageTitle from '../PageTitle'
import SearchBox from '../SearchBox'
import { MovieSection } from './MotionPicture.element'

function MotionPicture() {
  const [status, movies] = useMovies()

  const isLoading = status === 'loading'

  return (
    <MovieSection>
      <Container>
        <PageTitle title="Movies" />
        <SearchBox />
        {isLoading ? (
          <Box sx={{ height: '70vh', display: 'grid', placeItems: 'center' }}>
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
