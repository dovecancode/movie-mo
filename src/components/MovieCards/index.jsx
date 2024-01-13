import PropTypes from 'prop-types'
import { MovieCardsContainer } from './MovieCards.element'

import MovieCard from '../MovieCard'

function MovieCards({ films }) {
  return (
    <MovieCardsContainer direction={{ sm: 'row' }}>
      {films.map((film) => (
        <MovieCard key={`trend-${film.id}`} {...film} />
      ))}
    </MovieCardsContainer>
  )
}

MovieCards.propTypes = {
  films: PropTypes.array,
}

export default MovieCards
