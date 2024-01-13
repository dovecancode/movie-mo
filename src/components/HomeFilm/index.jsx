import { Box, Container } from '@mui/material'
import { MovieCards, PopularMoviesSection } from './PopularMovies.elements.js'

import { useEffect, useState } from 'react'
import CategoryButtons from '../CategoryButtons'
import MovieCard from '../MovieCard'

import movieServices from '../../services/movieServices.js'
import LoaderSpinner from '../LoaderSpinner'

function HomeFilm() {
  const [trending, setTrending] = useState([])
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    async function getTrendingVideo() {
      try {
        setStatus('loading')
        const data = await movieServices.getTrending()
        const { results } = data
        setTrending(results)
        setStatus('success')
        console.log(results)
      } catch (error) {
        setStatus('error')
        console.log(error)
      }
    }
    getTrendingVideo()
  }, [])

  const isLoading = status === 'loading'
  const isError = status === 'error'

  if (isError) {
    return <h1>There is an error fething the data</h1>
  }

  return (
    <PopularMoviesSection>
      <Container className="container" disableGutters>
        <CategoryButtons />

        {isLoading ? (
          <Box sx={{ height: '70vh', display: 'grid', placeItems: 'center' }}>
            <LoaderSpinner />
          </Box>
        ) : (
          <MovieCards direction={{ sm: 'row' }}>
            {trending.map((trend) => (
              <MovieCard key={`trend-${trend.id}`} {...trend} />
            ))}
          </MovieCards>
        )}
      </Container>
    </PopularMoviesSection>
  )
}

export default HomeFilm
