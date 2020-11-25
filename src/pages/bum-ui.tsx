import React, { FunctionComponent } from 'react'
import { Container, Box, Divider, Text, Heading } from 'theme-ui'

const BumUIPage: FunctionComponent = () => {
  return (
    <Container>
      <Box>
        <Box as="section" sx={{ mb: 5 }}>
          <Heading as="h1" variant="styles.h1">
            Bum UI
          </Heading>
          <Text>The BumHub styles created with the brills Theme-UI</Text>
        </Box>
      </Box>
      <Divider />
    </Container>
  )
}

export default BumUIPage
