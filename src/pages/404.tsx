import React, { FunctionComponent } from 'react'
import { Container, Box, Heading, Text } from 'theme-ui'

import { Seo } from '../components/seo'

const NotFoundPage: FunctionComponent = () => (
  <>
    <Seo title="Oh Bums!" />
    <Container>
      <Box>
        <Heading as="h1" variant="styles.h1">
          Oh Bums!
        </Heading>
        <Text>This page can't be found</Text>
      </Box>
    </Container>
  </>
)

export default NotFoundPage
