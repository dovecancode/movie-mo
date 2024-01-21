import styled from '@emotion/styled'
import { TextField } from '@mui/material'

export const SearchBoxInput = styled(TextField)(() => ({
  borderColor: 'rgba(50, 59, 84, 1)',

  maxWidth: '18rem',
  // width: '100%',
  '& input': {
    color: 'rgba(71, 80, 105, 1)',
  },
}))
