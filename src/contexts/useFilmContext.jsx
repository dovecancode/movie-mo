import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const FilmContext = createContext()

function FilmProvider({ children }) {
  const [query, setQuery] = useState('')
  const [mediaType, setMediaType] = useState('')

  function handleSearchQuery(q) {
    setQuery(q)
  }

  function handleMediaType(type) {
    setMediaType(type)
  }

  return (
    <FilmContext.Provider
      value={{ query, mediaType, handleSearchQuery, handleMediaType }}
    >
      {children}
    </FilmContext.Provider>
  )
}

// Custom hook
function useFilmContext() {
  return useContext(FilmContext)
}

FilmProvider.propTypes = {
  children: PropTypes.element,
}

export { FilmProvider, useFilmContext }
