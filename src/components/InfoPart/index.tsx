import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

type InfoPartProps<T> = {
  title: string
  data: T
}

function InfoPart<T>({ title, data }: InfoPartProps<T>) {
  return (
    <Box sx={{ paddingBlock: '1rem', flex: 1 }}>
      <Typography
        sx={{ fontSize: '1rem', color: '#767E94', display: 'block' }}
        // component="span"
      >
        {title}
      </Typography>
      {!Array.isArray(data) ? (
        <Typography
          sx={{ color: '#C3C8D4' }}
          fontSize="1.25rem"
          variant="body1"
        >
          {String(data)}
        </Typography>
      ) : (
        data.map((item, idx) => (
          <Box key={`genre-${idx}`} sx={{ display: 'inline-block' }}>
            <Typography
              sx={{ color: '#C3C8D4' }}
              fontSize="1.25rem"
              variant="body1"
            >
              {item.name}
              {data.length - 1 !== idx && ','}
            </Typography>
          </Box>
        ))
      )}
    </Box>
  )
}

InfoPart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default InfoPart
