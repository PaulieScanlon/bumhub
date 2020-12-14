import React, { FunctionComponent } from 'react'
import { Container, Flex, Heading, Text, Box, Link } from 'theme-ui'

import { LogoBrand } from '../logo-brand'
import { Starburst } from '../starburst'

export const IndexHero: FunctionComponent = () => {
  return (
    <Box as="section" sx={{ backgroundColor: 'accent', position: 'relative', zIndex: 'hero' }}>
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Flex sx={{ flexDirection: 'column', py: 5, justifyContent: 'center' }}>
          <LogoBrand sx={{ width: ['60%', '50%', '30%'], mt: 4 }} />
          <Heading as="h1" variant="styles.h1" sx={{ textAlign: 'center' }}>
            The cheekiest way
            <br />
            to explore GitHub
          </Heading>
          <Box sx={{ my: 3 }} />
          <Box
            sx={{
              margin: '0 auto',
            }}
          >
            <Flex sx={{ borderRadius: 0, backgroundColor: 'text', display: 'inline-flex', px: 3, py: 2, fontSize: 0 }}>
              <Text sx={{ color: 'background', mr: 1 }}>A</Text>
              <Link
                href="https://twitter.com/search?q=%23SillySiteChallenge"
                target="_blank"
                rel="noopener"
                sx={{ fontWeight: 'bold', mr: 1 }}
              >
                #SillySiteChallenge
              </Link>
              <Text sx={{ color: 'background', mr: 1 }}>by</Text>
              <Link
                href="https://twitter.com/PaulieScanlon"
                target="_blank"
                rel="noopener"
                sx={{ color: 'secondary', fontWeight: 'bold' }}
              >
                @PaulieScanlon
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
      <Box
        sx={{
          top: ['15%', 0],
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        <Starburst />
      </Box>
    </Box>
  )
}
