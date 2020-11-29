import React, { Fragment, FunctionComponent } from 'react'
import { Container, Grid, Box, Text, Divider } from 'theme-ui'
import { Link } from 'gatsby'

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Box as="header">
        <Container>
          <Grid sx={{ gridTemplateColumns: '1fr 1fr' }}>
            <Link to="/">
              <Text>BumHub</Text>
            </Link>
            <Grid sx={{ alignItems: 'center', justifyContent: 'flex-end', gap: 2, gridTemplateColumns: 'auto auto' }}>
              <Link to="/search">Bum Search</Link>
              <Link to="/bum-ui">Bum UI</Link>
            </Grid>
          </Grid>
          <Divider />
        </Container>
      </Box>
      {children}
    </Fragment>
  )
}

export default PageLayout
