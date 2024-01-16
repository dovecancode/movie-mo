import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import { shorterTitle } from '../../utils/helper'
import StarRating from '../StarRating'
import { BackgroundBlur, MovieCardElement } from './MovieCard.element'

import placeholder from '../../assets/placeholder.jpg'
import { useFilmContext } from '../../contexts/useFilmContext'

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
  const { handleMediaType } = useFilmContext()
  // const location = useLocation()

  // const category = location.pathname === '/movies' ? 'movie' : 'tv'

  return (
    <MovieCardElement onClick={() => handleMediaType(media_type)}>
      <BackgroundBlur className="bg-blur"></BackgroundBlur>
      <Link to={`/film-details/${id}`} component={RouterLink}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            className="card-media"
            component="img"
            image={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : placeholder
            }
            sx={{ borderRadius: '0.5rem' }}
          />
          <StarRating position="absolute" rating={vote_average} />
        </Box>
        <CardContent className="card-content">
          <Typography gutterBottom variant="h3" component="div">
            {name?.length >= 20 ? shorterTitle(name) + '...' : name}
            {title?.length >= 20 ? shorterTitle(title) + '...' : title}
          </Typography>
          {media_type && (
            <Typography component="p">
              {media_type === 'tv' ? 'TV Series' : 'Movie'}
            </Typography>
          )}

          <Typography component="p">
            {/* {`Release: ${formatDate(first_air_date)}`}
            {`Release: ${formatDate(release_date)}`} */}
            Release: {first_air_date || release_date}s
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
