import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Header = styled('header')(({ theme }) => ({
  paddingBlock: theme.spacing(4),
}))

export const FeaturedImageDesktop = styled(Box)(({ imgpath }) => ({
  width: '100%',
  height: '30rem',
  borderRadius: '2.5rem',
  background: `linear-gradient(180deg, rgba(54, 44, 146, 0.40) 0%, rgba(18, 98, 151, 0.40) 100%), url(https://image.tmdb.org/t/p/original/${imgpath}), lightgray 50% / cover no-repeat`,
  backgroundSize: 'cover',
}))

export const FeaturedImageMobile = styled(Box)(() => ({
  width: '100%',
  borderRadius: '2.5rem',
}))

export const TitleContainer = styled(Box)({
  position: 'absolute',
  width: '30%',
  padding: '2.5rem',
  borderRadius: '1.5rem',
  bottom: '-4rem',
  left: '5rem',

  background: ' rgba(32, 40, 62, 0.80)',
  backdropFilter: 'blur(12px)',
  '& > h1': {
    color: 'rgba(235, 238, 245, 1)',
    fontSize: 'clamp(1.6rem, 6vw, 2rem)',
  },
})
