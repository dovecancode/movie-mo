import { Box, Container } from '@mui/material'
import { PopularMoviesSection } from './PopularMovies.elements.js'

import { useEffect, useState } from 'react'
import CategoryButtons from '../CategoryButtons'

import movieServices from '../../services/movieServices.js'
import LoaderSpinner from '../LoaderSpinner'
import MovieCards from '../MovieCards'

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
          <MovieCards films={trending} />
        )}
      </Container>
    </PopularMoviesSection>
  )
}

export default HomeFilm
