import { Stack } from '@mui/material'
import TheDetails from '../../components/TheDetails'
import TheHeaderDetails from '../../components/TheHeaderDetails'

function FilmDetails() {
  return (
    <>
      <TheHeaderDetails />
      <Stack>
        <TheDetails />
      </Stack>
    </>
  )
}

export default FilmDetails
