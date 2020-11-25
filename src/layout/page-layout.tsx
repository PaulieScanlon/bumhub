import React, { Fragment, FunctionComponent } from 'react'
import { Container, Grid, Box, Heading, Divider } from 'theme-ui'
import { Link } from 'gatsby'

export const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Box as="header">
        <Container>
          <Grid sx={{ gridTemplateColumns: '1fr 1fr' }}>
            <Link to="/">
              <Heading as="h1" variant="styles.h1">
                BumHub
              </Heading>
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
