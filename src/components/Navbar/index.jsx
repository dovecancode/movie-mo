import {
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@mui/material'

import { FaArrowRightLong } from 'react-icons/fa6'
import { Link as RouterLink } from 'react-router-dom'
import Logo from '../Logo'
import { NavbarContainer } from './Navbar.elements'

const pages = ['Movies', 'TV Shows'] //Suggest me

function Navbar() {
  return (
    <NavbarContainer component="nav" position="static">
      <Container maxWidth={false}>
        <Toolbar>
          <Link
            to="/"
            component={RouterLink}
            sx={{ textDecoration: 'none', color: '#fff' }}
          >
            <Typography
              component="h1"
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Logo size={40} />
              Movie Mo
            </Typography>
          </Link>

          <Box sx={{ marginLeft: 'auto' }}>
            {pages.map((page, idx) => (
              <Button
                sx={{ color: '#A8AEBF', fontWeight: 'bold' }}
                key={`page-${idx}`}
                component={RouterLink}
                to={`/${page.toLowerCase().split(' ').join('-')}`}
                color="inherit"
              >
                {page === 'Suggest me' ? (
                  <>
                    {page} &nbsp;
                    <FaArrowRightLong />
                  </>
                ) : (
                  page
                )}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </NavbarContainer>
  )
}

export default Navbar
