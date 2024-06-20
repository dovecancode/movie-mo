import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import movieServices from '../services/movieServices'

type DetailsType = {
  poster_path: string
  tagline: string
  overview: string
  vote_average: number
  release_date: string
  first_air_date: string
  last_air_date: string
  number_of_episodes: number
  number_of_seasons: number
  status: string
  runtime: number
  episode_run_time: number
  genres: string
  type: string
  backdrop_path: string
  title: string
  name: string
}

function useFilmDetails() {
  const [status, setStatus] = useState('idle')
  const [details, setDetails] = useState<DetailsType | null>(null)
  let { id } = useParams()

  useEffect(() => {
    async function fetchData() {
      setStatus('loading')
      try {
        const res = await movieServices.getMovieDetails(id ?? '')
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
        const res = await movieServices.getTvShowDetails(id ?? '')
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
