import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

type PageTitleProps = {
  title: string
  siteName?: string
}

function PageTitle({ title, siteName = 'Movie Mo' }: PageTitleProps) {
  return (
    <Box sx={{ color: '#EBEEF5', paddingTop: '3rem' }}>
      <Typography variant="subtitle1" component="span">
        {siteName}
      </Typography>
      <Typography variant="h1" component="h1">
        {title}
      </Typography>
    </Box>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string,
  siteName: PropTypes.string,
}

export default PageTitle
