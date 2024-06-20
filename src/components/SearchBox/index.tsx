import { Box, InputAdornment } from '@mui/material'

import { useState } from 'react'

import { LuSearch } from 'react-icons/lu'
import { ContextType, useFilmContext } from '../../contexts/useFilmContext'
import { SearchBoxInput } from './SearchBox.elements'

type SearboxProps = {
  placeholder: string
}

function SearchBox({ placeholder }: SearboxProps) {
  const { query, handleSearchQuery } = useFilmContext() as ContextType

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

export default SearchBox
