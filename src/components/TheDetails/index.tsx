import { Box, Container, Stack, Typography } from '@mui/material'
import useFilmDetails from '../../hook/useFilmDetails'
import InfoPart from '../InfoPart'
import StarRating from '../StarRating'
import { Item } from './TheDetails.elements'

function TheDetails() {
  const { details } = useFilmDetails()

  return (
    <Container sx={{ maxWidth: '70%', paddingBlock: '5rem' }} maxWidth={false}>
      <Stack direction={{ md: 'row' }} spacing={10}>
        <Item sx={{ marginBottom: '2rem', flex: 1 }}>
          <Box
            sx={{ borderRadius: '1.5rem', width: '100%' }}
            component="img"
            src={`https://image.tmdb.org/t/p/w780${details?.poster_path}`}
          />
        </Item>
        <Item sx={{ flex: 2 }}>
          <Typography variant="subtitle2">{details?.tagline}</Typography>
          <Typography variant="body1" style={{ paddingBlock: '1rem' }}>
            {details?.overview}
          </Typography>
          <StarRating
            position="static"
            rating={Number(details?.vote_average)}
          />

          <Box>
            {details?.type ? (
              <>
                <Stack direction={{ sm: 'row' }}>
                  <InfoPart title="Type" data="TV Show" />
                  <InfoPart title="Status" data={details?.status} />
                </Stack>
                <Stack direction={{ sm: 'row' }}>
                  <InfoPart
                    title="First air date"
                    data={details?.first_air_date}
                  />
                  <InfoPart
                    title="Last air date"
                    data={details?.last_air_date}
                  />
                </Stack>
                <Stack direction={{ sm: 'row' }}>
                  <InfoPart
                    title="No. of Seasons"
                    data={details?.number_of_seasons}
                  />
                  <InfoPart
                    title="No. of episodes"
                    data={details?.number_of_episodes}
                  />
                </Stack>
              </>
            ) : (
              <>
                <InfoPart title="Type" data="Movie" />
                <InfoPart
                  title="Release Date:"
                  data={details?.release_date || details?.first_air_date}
                />
              </>
            )}

            <InfoPart
              title={
                details?.episode_run_time ? 'Episode run time' : 'Run time'
              }
              data={
                details?.episode_run_time
                  ? details?.episode_run_time + ' min/episode'
                  : details?.runtime + ' min'
              }
            />

            <InfoPart title="Genres" data={details?.genres} />
          </Box>
        </Item>
      </Stack>
    </Container>
  )
}

export default TheDetails
