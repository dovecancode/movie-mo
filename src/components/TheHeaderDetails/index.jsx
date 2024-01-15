import { Box, Container, Typography } from '@mui/material'
import { useFilmContext } from '../../contexts/useFilmContext'
import useFilmDetails from '../../hook/useFilmDetails'
import {
  FeaturedImageDesktop,
  Header,
  TitleContainer,
} from './TheHeaderDetails.element'

function TheHeaderDetails() {
  const { mediaType } = useFilmContext()

  const { details } = useFilmDetails(mediaType)

  const { backdrop_path, title, name } = details

  // const isDesktop = useMediaQuery('(width >= 60rem)')

  return (
    <Header>
      <Container sx={{ maxWidth: '70%' }} maxWidth={false}>
        <Box sx={{ position: 'relative' }}>
          <FeaturedImageDesktop imgpath={backdrop_path} />

          <TitleContainer>
            <Typography variant="h1" component="h1">
              {title || name}
            </Typography>
          </TitleContainer>
        </Box>
      </Container>
    </Header>
  )
}

export default TheHeaderDetails
