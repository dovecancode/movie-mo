import { Box, InputAdornment } from '@mui/material'
import { SearchBoxInput } from './SearchBox.element'

import { useState } from 'react'

import { LuSearch } from 'react-icons/lu'

function SearchBox() {
  // this state is for input icon search to on and off
  const [isFocus, setIsFocus] = useState(false)

  return (
    <Box className="search-box-input-container" sx={{ paddingBlock: '2rem' }}>
      <SearchBoxInput
        fullWidth
        placeholder={'Search Movies'}
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
      />
    </Box>
  )
}

export default SearchBox
