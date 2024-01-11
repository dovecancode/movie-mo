import { Typography } from '@mui/material'
import { FaRegStar } from 'react-icons/fa6'
import { StarUI } from './StarRating.Elements'

function StarRating({ rating }) {
  return (
    <StarUI sx={{ position: 'absolute', top: 0 }}>
      <FaRegStar size={20} color="#FFAD49" />
      <Typography sx={{ color: '#FFAD49' }}>{rating}</Typography>
    </StarUI>
  )
}

export default StarRating
