import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import StarRating from '../StarRating'

import blackWidow from '../../assets/black-widow.jpg'
import { BackgroundBlur, MovieCardElement } from './MovieCard.element'
function MovieCard() {
  return (
    <MovieCardElement>
      <BackgroundBlur></BackgroundBlur>
      <Link to="/" component={RouterLink}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            className="card-media"
            component="img"
            image={blackWidow}
            sx={{ borderRadius: '0.5rem' }}
          />
          <StarRating rating="6.8" />
        </Box>
        <CardContent className="card-content">
          <Typography gutterBottom variant="h3" component="div">
            Black Widow
          </Typography>
          <Typography component="span">Release: 2023-12-14</Typography>
        </CardContent>
      </Link>
    </MovieCardElement>
  )
}

export default MovieCard
