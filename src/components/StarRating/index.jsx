import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { FaRegStar } from 'react-icons/fa6'
import { StarUI } from './StarRating.elements'

function StarRating({ rating, position }) {
  return (
    <StarUI position={position}>
      <FaRegStar size={20} color="#FFAD49" />
      <Typography sx={{ color: '#FFAD49' }}>{rating.toFixed(1)}</Typography>
    </StarUI>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number,
  position: PropTypes.string,
}

export default StarRating
