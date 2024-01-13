import { useEffect, useState } from 'react'
import movieServices from '../services/movieServices'

function useMovies() {
  const [movies, setMovies] = useState([])
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    async function getAllMovies() {
      setStatus('loading')
      try {
        const res = await movieServices.getAllMovies()
        // console.log(res.results)
        setMovies(res.results)
        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    }
    getAllMovies()
  }, [])

  return [status, movies]
}

export default useMovies
