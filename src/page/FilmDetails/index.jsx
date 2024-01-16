import { Box } from '@mui/material'
import LoaderSpinner from '../../components/LoaderSpinner'
import TheDetails from '../../components/TheDetails'
import TheHeaderDetails from '../../components/TheHeaderDetails'
import useFilmDetails from '../../hook/useFilmDetails'

function FilmDetails() {
  const { status } = useFilmDetails()

  const isLoading = status === 'loading'
  console.log(isLoading)

  return (
    <>
      {isLoading ? (
        <Box sx={{ height: '70vh', display: 'grid', placeItems: 'center' }}>
          <LoaderSpinner />
        </Box>
      ) : (
        <>
          <TheHeaderDetails />
          <TheDetails />
        </>
      )}
    </>
  )
}

export default FilmDetails
