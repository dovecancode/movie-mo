import { Box, Container, Stack, Typography } from '@mui/material'
import useFilmDetails from '../../hook/useFilmDetails'
import InfoPart from '../InfoPart'
import StarRating from '../StarRating'
import { Item } from './TheDetails.elements'

function TheDetails() {
  const { details } = useFilmDetails()

  let {
    poster_path,
    tagline,
    overview,
    vote_average,
    release_date,
    first_air_date,
    last_air_date,
    number_of_episodes,
    number_of_seasons,
    status,
    runtime,
    episode_run_time,
    genres,
    type,
  } = details

  return (
    <Container sx={{ maxWidth: '70%', paddingBlock: '5rem' }} maxWidth={false}>
      <Stack direction={{ md: 'row' }} spacing={10}>
        <Item sx={{ marginBottom: '2rem', flex: 1 }}>
          <Box
            sx={{ borderRadius: '1.5rem', width: '100%' }}
            component="img"
            src={`https://image.tmdb.org/t/p/w780${poster_path}`}
          />
        </Item>
        <Item sx={{ flex: 2 }}>
          <Typography variant="subtitle2">{tagline}</Typography>
          <Typography variant="body1" style={{ paddingBlock: '1rem' }}>
            {overview}
          </Typography>
          <StarRating position="static" rating={Number(vote_average)} />

          <Box>
            {type ? (
              <>
                <Stack direction={{ sm: 'row' }}>
                  <InfoPart title="Type" data="TV Show" />
                  <InfoPart title="Status" data={status} />
                </Stack>
                <Stack direction={{ sm: 'row' }}>
                  <InfoPart title="First air date" data={first_air_date} />
                  <InfoPart title="Last air date" data={last_air_date} />
                </Stack>
                <Stack direction={{ sm: 'row' }}>
                  <InfoPart title="No. of Seasons" data={number_of_seasons} />
                  <InfoPart title="No. of episodes" data={number_of_episodes} />
                </Stack>
              </>
            ) : (
              <>
                <InfoPart title="Type" data="Movie" />
                <InfoPart
                  title="Release Date:"
                  data={release_date || first_air_date}
                />
              </>
            )}

            <InfoPart
              title={episode_run_time ? 'Episode run time' : 'Run time'}
              data={
                episode_run_time
                  ? episode_run_time + ' min/episode'
                  : runtime + ' min'
              }
            />

            <InfoPart title="Genres" data={genres} />
          </Box>
        </Item>
      </Stack>
    </Container>
  )
}

export default TheDetails
