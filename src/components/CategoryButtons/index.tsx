import { Box } from '@mui/material'
import { useState } from 'react'
import { useFilmContext } from '../../contexts/useFilmContext'
import { ButtonCategory, ButtonContainer } from './CategoryButtons.element'

const categories = ['All', 'Movie', 'TV Shows']

function CategoryButtons() {
  const { handleClickCategory } = useFilmContext() || {}
  const [isActive, setIsActive] = useState(0)
  return (
    <Box>
      <ButtonContainer>
        {categories.map((category, idx) => (
          <ButtonCategory
            key={category}
            className={isActive === idx ? 'active' : ''}
            variant="contained"
            onClick={() => {
              category = category.split(' ')[0].toLowerCase()
              setIsActive(idx)
              handleClickCategory && handleClickCategory(category)
            }}
          >
            {category === 'Movie' ? 'Movies' : category}
          </ButtonCategory>
        ))}
      </ButtonContainer>
    </Box>
  )
}

export default CategoryButtons
