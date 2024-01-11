import { Box } from '@mui/material'
import { ButtonCategory, ButtonContainer } from './CategoryButtons.element'

const categories = ['All', 'Movies', 'TV Shows']

function CategoryButtons() {
  return (
    <Box>
      <ButtonContainer>
        {categories.map((category) => (
          <ButtonCategory variant="contained" key={`category-${category}`}>
            {category}
          </ButtonCategory>
        ))}
      </ButtonContainer>
    </Box>
  )
}

export default CategoryButtons
