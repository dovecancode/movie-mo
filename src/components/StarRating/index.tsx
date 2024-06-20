import { Typography } from '@mui/material'
import { FaRegStar } from 'react-icons/fa6'
import { StarUI } from './StarRating.elements'

type StarRatingProps = {
  rating: number
  position: string
}

function StarRating({ rating, position }: StarRatingProps) {
  return (
    <StarUI position={position}>
      <FaRegStar size={20} color="#FFAD49" />
      <Typography sx={{ color: '#FFAD49' }}>{rating.toFixed(1)}</Typography>
    </StarUI>
  )
}

export default StarRating
