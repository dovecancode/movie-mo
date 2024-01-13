import { Container } from '@mui/material'
import PageTitle from '../PageTitle'
import SearchBox from '../SearchBox'
import { MovieSection } from './MotionPicture.element'

function MotionPicture() {
  return (
    <MovieSection>
      <Container>
        <PageTitle title="Movies" />
        <SearchBox />
      </Container>
    </MovieSection>
  )
}

export default MotionPicture
