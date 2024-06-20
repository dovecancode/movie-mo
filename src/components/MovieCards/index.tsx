import PropTypes from 'prop-types'

import MovieCard from '../MovieCard'
import { MovieCardsContainer } from './MovieCards.elements'

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
