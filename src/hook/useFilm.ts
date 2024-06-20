import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import movieServices from '../services/movieServices'

function useFilm(query: string) {
  const location = useLocation()

  const [movies, setMovies] = useState([])
  const [status, setStatus] = useState('idle')

  const [apiQuery, setApiQuery] = useState('')

  const category = location.pathname === '/movies' ? 'movie' : 'tv'

  const getSearchFilm = useCallback(
    async function getSearchFilm() {
      setStatus('loading')
      try {
        const res = await movieServices.fetchSearchData(category, apiQuery)
        const { results } = res
        // setMovies((prev) => prev.map((movie) => ({ ...movie, results })))
        setMovies(results) // console.log('query', results)
        setStatus('success')
      } catch (error) {
        console.error(error)
        setStatus('error')
      }
    },
    [category, apiQuery]
  )

  useEffect(() => {
    async function getFilms() {
      if (apiQuery) {
        // fire whenever using the searchbox
        getSearchFilm()
      } else {
        // fire whenever movie and tv shows page visits
        setStatus('loading')
        try {
          const res = await movieServices.fetchData(`/discover/${category}`)
          const { results } = res
          setMovies(results)
          setStatus('success')
        } catch (error) {
          setStatus('error')
        }
      }
    }
    getFilms()
  }, [apiQuery, category, getSearchFilm])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setApiQuery(query)
    }, 500)

    return () => clearTimeout(timeOut)
  }, [query])

  return { status, movies }
}

export default useFilm
