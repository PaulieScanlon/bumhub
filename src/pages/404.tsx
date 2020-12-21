import React, { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Container, Grid, Box, Heading, Text } from 'theme-ui'

import { Seo } from '../components/seo'
import { FartBum } from '../components/fart-bum'

const NotFoundPage: FunctionComponent = () => (
  <>
    <Seo title="Oh Bums!" />
    <Container>
      <Grid
        sx={{
          textAlign: 'center',
          a: { variant: 'buttons.accent' },
        }}
      >
        <Heading as="h1" variant="styles.h1" sx={{ textAlign: 'center' }}>
          Oh Bums!
        </Heading>

        <FartBum
          sx={{
            width: 220,
          }}
        />

        <Text sx={{ textAlign: 'center' }}>This page can't be found</Text>
        <Box
          sx={{
            mx: 'auto',
          }}
        >
          <GatsbyLink to="/">Back to the Bums</GatsbyLink>
        </Box>
      </Grid>
    </Container>
  </>
)

export default NotFoundPage
