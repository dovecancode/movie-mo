import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { FaRegStar } from 'react-icons/fa6'
import { StarUI } from './StarRating.elements'

function StarRating({ rating }) {
  return (
    <StarUI sx={{ position: 'absolute', top: 0 }}>
      <FaRegStar size={20} color="#FFAD49" />
      <Typography sx={{ color: '#FFAD49' }}>{rating}</Typography>
    </StarUI>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number,
}

export default StarRating
