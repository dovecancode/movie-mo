import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { Box } from '@mui/system'

import { Theme } from '@mui/material/styles'

export const ButtonContainer = styled(Box)(() => ({
  padding: '0.5rem',
  borderRadius: '0.75rem',
  background: 'rgba(0,0,0, 0.2)',
  backdropFlter: 'blur(40px)',
  maxWidth: '16rem',
}))

export const ButtonCategory = styled(Button)(({ theme }: { theme: Theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  '&:hover': {
    background: theme.palette.secondary.main,
  },

  '&.active': {
    background: theme.palette.secondary.main,
  },
}))
