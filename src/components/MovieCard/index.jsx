import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import StarRating from '../StarRating'
import { BackgroundBlur, MovieCardElement } from './MovieCard.element'

function shorterTitle(title) {
  return title?.substring(0, 15)
}

function MovieCard({
  poster_path,
  name,
  title,
  vote_average,
  first_air_date,
  release_date,
  media_type,
  id,
}) {
  return (
    <MovieCardElement>
      <BackgroundBlur className="bg-blur"></BackgroundBlur>
      <Link to={`/${id}`} component={RouterLink}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            className="card-media"
            component="img"
            image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            sx={{ borderRadius: '0.5rem' }}
          />
          <StarRating rating={+vote_average.toFixed(1)} />
        </Box>
        <CardContent className="card-content">
          <Typography gutterBottom variant="h3" component="div">
            {name?.length >= 20 ? shorterTitle(name) + '...' : name}
            {title?.length >= 20 ? shorterTitle(title) + '...' : title}
          </Typography>
          <Typography component="p">
            {media_type === 'tv' ? 'TV Series' : 'Movie'}
          </Typography>
          <Typography component="p">
            Release: {first_air_date || release_date}
          </Typography>
        </CardContent>
      </Link>
    </MovieCardElement>
  )
}

MovieCard.propTypes = {
  vote_average: PropTypes.number,
  poster_path: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  first_air_date: PropTypes.string,
  release_date: PropTypes.string,
  id: PropTypes.number,
  media_type: PropTypes.string,
}

export default MovieCard
