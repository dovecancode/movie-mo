import styled from '@emotion/styled'
import { Stack } from '@mui/material'

export const PopularMoviesSection = styled('section')(() => ({
  paddingBlock: '3rem',
}))

export const MovieCards = styled(Stack)(() => ({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  // alignItems: 'center',
  // justifyContent: 'center',

  alignContent: 'center',
}))
