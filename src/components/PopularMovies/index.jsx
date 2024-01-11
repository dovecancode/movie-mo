import { Container } from '@mui/material'
import { MovieCards, PopularMoviesSection } from './PopularMovies.elements.js'

import MovieCard from '../MoviCard'

function PopularMovies() {
  return (
    <PopularMoviesSection>
      <Container>
        <MovieCards direction={{ sm: 'row' }}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </MovieCards>
      </Container>
    </PopularMoviesSection>
  )
}

export default PopularMovies
