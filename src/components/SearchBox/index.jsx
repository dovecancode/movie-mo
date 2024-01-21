import { Box, InputAdornment } from '@mui/material'
import PropTypes from 'prop-types'
import { SearchBoxInput } from './SearchBox.elements'

import { useState } from 'react'

import { LuSearch } from 'react-icons/lu'
import { useFilmContext } from '../../contexts/useFilmContext'

function SearchBox({ placeholder }) {
  const { query, handleSearchQuery } = useFilmContext()

  // this state is for input border color and and off
  const [isFocus, setIsFocus] = useState(false)

  return (
    <Box className="search-box-input-container" sx={{ paddingBlock: '2rem' }}>
      <SearchBoxInput
        fullWidth
        placeholder={placeholder}
        value={query}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LuSearch
                size={25}
                color={
                  isFocus ? 'rgba(182, 109, 255, 1)' : 'rgba(71, 80, 105, 1)'
                }
              />
            </InputAdornment>
          ),
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => handleSearchQuery(e.target.value)}
      />
    </Box>
  )
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
}

export default SearchBox
