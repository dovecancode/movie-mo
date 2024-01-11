import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const StarUI = styled(Box)(() => ({
  background: 'rgba(0, 0, 0, 0.65)',
  backdropFilter: 'blur(4px)',
  borderRadius: '0.5rem',
  padding: '0.5rem 0.5rem',
  margin: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  gap: 5,
}))
