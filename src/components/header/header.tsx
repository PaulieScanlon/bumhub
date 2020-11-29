import React, { FunctionComponent, useState } from 'react'
import { Container, Grid, Flex, Box } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import { Location } from '@reach/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import theme from '../../gatsby-plugin-theme-ui'

export const Header: FunctionComponent = () => {
  const [isHeaderBgVisible, setIsHeaderBgVisible] = useState(true)

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y >= -theme.sizes.hero + theme.sizes.header * 1.2) {
        setIsHeaderBgVisible(true)
      } else {
        setIsHeaderBgVisible(false)
      }
    },
    [isHeaderBgVisible],
  )

  return (
    <Location>
      {({ location }) => {
        const { pathname } = location
        const isIndex = pathname === '/'
        console.log('isIndex: ', isIndex)
        return (
          <Flex
            as="header"
            sx={{
              alignItems: 'center',
              backgroundColor: isIndex ? (isHeaderBgVisible ? 'transparent' : 'accent') : 'white',
              position: 'fixed',
              height: 'header',
              width: 'full',
              zIndex: 'header',
              boxShadow: isIndex ? 'none' : 0,
            }}
          >
            <Container>
              <Grid
                sx={{
                  gridTemplateColumns: 'auto auto',
                  a: {
                    variant: 'links.nav',
                  },
                }}
              >
                <Flex sx={{ alignItems: 'center' }}>
                  <GatsbyLink to="/">BumHub</GatsbyLink>
                </Flex>
                <Grid
                  sx={{ alignItems: 'center', justifyContent: 'flex-end', gap: 2, gridTemplateColumns: 'auto auto' }}
                >
                  <GatsbyLink to="/search">Bum Search</GatsbyLink>
                  <GatsbyLink to="/bum-ui">Bum UI</GatsbyLink>
                </Grid>
              </Grid>
            </Container>
          </Flex>
        )
      }}
    </Location>
  )
}
