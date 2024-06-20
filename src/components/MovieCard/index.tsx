import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { shorterTitle } from '../../utils/helper'
import StarRating from '../StarRating'
import { BackgroundBlur, MovieCardElement } from './MovieCard.elements'

import placeholder from '../../assets/placeholder.jpg'
import { ContextType, useFilmContext } from '../../contexts/useFilmContext'
import theme from '../../MovieTheme'

type MovieCardProps = {
  poster_path: string
  name: string
  title: string
  vote_average: number
  first_air_date: string
  release_date: string
  media_type: string
  id: number
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
}: MovieCardProps) {
  const { handleMediaType } = useFilmContext() as ContextType

  return (
    <MovieCardElement theme={theme} onClick={() => handleMediaType(media_type)}>
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
            Release: {first_air_date || release_date}
          </Typography>
        </CardContent>
      </Link>
    </MovieCardElement>
  )
}

export default MovieCard
