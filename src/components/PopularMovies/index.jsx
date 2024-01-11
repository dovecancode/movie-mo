import { Container } from '@mui/material'
import { MovieCards, PopularMoviesSection } from './PopularMovies.elements.js'

import CategoryButtons from '../CategoryButtons/index.jsx'
import MovieCard from '../MoviCard'

function PopularMovies() {
  return (
    <PopularMoviesSection>
      <Container>
        <CategoryButtons />
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
