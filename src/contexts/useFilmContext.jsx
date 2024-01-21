import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from 'react'
import movieServices from '../services/movieServices'

const FilmContext = createContext()

function FilmProvider({ children }) {
  const [trendingFilm, setTrendingFilm] = useState([])
  const [categoryFilm, setCategoryFilm] = useState('all')
  const [status, setStatus] = useState('idle')

  const [query, setQuery] = useState('')
  const [mediaType, setMediaType] = useState('')

  function handleSearchQuery(q) {
    setQuery(q)
  }

  function handleMediaType(type) {
    setMediaType(type)
  }

  function handleClickCategory(cat) {
    setCategoryFilm(cat)
  }

  useEffect(() => {
    async function getTrendingVideo() {
      try {
        setStatus('loading')
        const data = await movieServices.fetchData(
          `/trending/${categoryFilm}/day`
        )
        const { results } = data
        setTrendingFilm(results)

        setStatus('success')
      } catch (error) {
        setStatus('error')
        console.log(error)
      }
    }
    getTrendingVideo()
  }, [categoryFilm])

  return (
    <FilmContext.Provider
      value={{
        query,
        mediaType,
        handleSearchQuery,
        handleMediaType,
        status,
        trendingFilm,
        handleClickCategory,
      }}
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
