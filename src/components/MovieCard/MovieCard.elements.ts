import styled from '@emotion/styled'
import { Card } from '@mui/material'

import { Theme } from '@mui/material/styles'

export const MovieCardElement = styled(Card)(({ theme }: { theme: Theme }) => ({
  position: 'relative',
  height: '100%',
  width: '100%',

  padding: theme.spacing(1),
  background: 'transparent',
  borderRadius: ' 0.75rem',
  flex: 1,

  marginBottom: '1rem',
  transition: 'all .2s ease-in',
  transform: 'scale(.9)',

  '& > a': {
    textDecoration: 'none',
    color: 'rgba(235, 238, 245, 1)',
  },

  '@media (width >= 35em )': {
    // flexBasis: 'calc(100% / 2 - 2rem)',
    flex: '0 1 calc(100% / 2 - 1rem)',
  },

  '@media(width >= 60rem)': {
    // flexBasis: 'calc( 100%/ 4 - 2rem)',
    flex: '0 1 calc( 100%/ 4 - 1rem)',
  },
}))

export const BackgroundBlur = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  // background: 'rgba(32, 40, 62, 0.50);',
  borderRadius: ' 0.75rem',
  backdropFilter: 'blur(40px)',
}))
