import { Box, Container, Typography } from '@mui/material'
import useFilmDetails from '../../hook/useFilmDetails'
import {
  FeaturedImageDesktop,
  Header,
  TitleContainer,
} from './TheHeaderDetails.elements'

function TheHeaderDetails() {
  const { details } = useFilmDetails()

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
