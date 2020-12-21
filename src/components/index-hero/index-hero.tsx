import React, { FunctionComponent } from 'react'
import { Container, Flex, Grid, Heading, Text, Box, Link } from 'theme-ui'
import { keyframes } from '@emotion/react'

import { LogoBrand } from '../logo-brand'
import { Starburst } from '../starburst'
import { Icon } from '../icon'

const move = keyframes({
  '0%': {
    marginTop: '-20px',
    opacity: 0,
  },
  '49%': {
    marginTop: '0px',
    opacity: 1,
  },
  '51%': {
    marginTop: '0px',
    opacity: 1,
  },
  '100%': {
    marginTop: '20px',
    opacity: 0,
  },
})

export const IndexHero: FunctionComponent = () => {
  return (
    <Box as="section" sx={{ backgroundColor: 'accent', position: 'relative', zIndex: 'hero' }}>
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          sx={{
            pt: 6,
            pb: 4,
            gridGap: 4,
          }}
        >
          <LogoBrand sx={{ width: ['45%', '35%', '25%'] }} />
          <Heading as="h1" variant="styles.h1" sx={{ textAlign: 'center' }}>
            The cheekiest way
            <br />
            to explore GitHub
          </Heading>
          <Box
            sx={{
              mx: 'auto',
            }}
          >
            <Grid
              sx={{
                borderRadius: 0,
                backgroundColor: 'text',
                gridGap: 0,
                gridTemplateColumns: ['1fr', '1fr 1fr'],
                px: 3,
                py: 2,
                fontSize: 0,
                textAlign: ['center'],
              }}
            >
              <Text sx={{ color: 'background' }}>
                A{' '}
                <Link
                  href="https://twitter.com/search?q=%23SillySiteChallenge"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: 'primary', fontWeight: 'bold' }}
                >
                  #SillySiteChallenge
                </Link>
              </Text>
              <Text sx={{ color: 'background' }}>
                by{' '}
                <Link
                  href="https://twitter.com/PaulieScanlon"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: 'secondary', fontWeight: 'bold' }}
                >
                  @PaulieScanlon
                </Link>
              </Text>
            </Grid>
          </Box>
          <Flex sx={{ borderRadius: '100%', boxShadow: 'header', mx: 'auto', backgroundColor: 'text', p: 1 }}>
            <Box
              sx={{
                position: 'relative',
                width: 38,
                height: 38,
                svg: {
                  color: 'primary',
                  animationTimingFunction: 'ease-out',
                  animationIterationCount: 'infinite',
                  animationDuration: '2s',
                  animationName: move.toString(),
                },
              }}
            >
              <Icon
                name="expandMore"
                sx={{
                  position: 'absolute',

                  width: '100%',
                  height: '100%',
                }}
              />
              <Icon
                name="expandMore"
                sx={{
                  position: 'absolute',

                  width: '100%',
                  height: '100%',
                  animationDelay: '1s',
                }}
              />
            </Box>
          </Flex>
        </Grid>
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
