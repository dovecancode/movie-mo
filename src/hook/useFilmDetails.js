import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import movieServices from '../services/movieServices'

function useFilmDetails() {
  const [status, setStatus] = useState('idle')
  const [details, setDetails] = useState({})
  let { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      setStatus('loading')
      try {
        const res = await movieServices.getMovieDetails(id)
        setDetails(res)

        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    }
    fetchData()
  }, [id])

  useEffect(() => {
    async function fetchData() {
      setStatus('loading')
      try {
        const res = await movieServices.getTvShowDetails(id)
        setDetails(res)
        setStatus('success')
      } catch (error) {
        setStatus('error')
      }
    }
    fetchData()
  }, [id])

  return { status, details }
}

export default useFilmDetails
