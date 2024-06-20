import { Box, Container, Typography } from '@mui/material'
import theme from '../../MovieTheme'
import useFilmDetails from '../../hook/useFilmDetails'
import {
  FeaturedImageDesktop,
  Header,
  TitleContainer,
} from './TheHeaderDetails.elements'

function TheHeaderDetails() {
  const { details } = useFilmDetails()

  // const isDesktop = useMediaQuery('(width >= 60rem)')

  return (
    <Header theme={theme}>
      <Container sx={{ maxWidth: '70%' }} maxWidth={false}>
        <Box sx={{ position: 'relative' }}>
          <FeaturedImageDesktop imgpath={details?.backdrop_path || ''} />

          <TitleContainer>
            <Typography variant="h1" component="h1">
              {details?.title || details?.name}
            </Typography>
          </TitleContainer>
        </Box>
      </Container>
    </Header>
  )
}

export default TheHeaderDetails
