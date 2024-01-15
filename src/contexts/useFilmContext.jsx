import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const FilmContext = createContext()

function FilmProvider({ children }) {
  const [query, setQuery] = useState('')

  function handleSearchQuery(q) {
    setQuery(q)
  }

  return (
    <FilmContext.Provider value={{ query, handleSearchQuery }}>
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
