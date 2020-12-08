import React, { FunctionComponent, useState } from 'react'
import { Container, Grid, Flex, Box } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import { Location } from '@reach/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import theme from '../../gatsby-plugin-theme-ui'
import { LogoIcon } from '../logo-icon/logo-icon'

export const Header: FunctionComponent = () => {
  const [headerColor, setHeaderColor] = useState(theme.colors.transparent)

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y >= 0) {
        setHeaderColor(theme.colors.transparent)
      } else {
        setHeaderColor(theme.colors.background)
      }
    },
    [headerColor],
  )

  return (
    <Location>
      {({ location }) => {
        const { pathname } = location
        const isIndex = pathname === '/'
        return (
          <Flex
            as="header"
            sx={{
              variant: 'styles.header',
            }}
          >
            <Container
              sx={{
                px: [1, 1, 1, 1],
              }}
            >
              <Grid
                sx={{
                  backgroundColor: isIndex ? headerColor : 'background',
                  borderRadius: 0,
                  boxShadow: 'header',
                  gridTemplateColumns: 'auto auto',
                  flexGrow: 1,
                  transition: '.5s linear background-color',
                  p: 2,
                  a: {
                    variant: 'links.nav',
                  },
                }}
              >
                <Flex sx={{ alignItems: 'center' }}>
                  <GatsbyLink to="/">
                    <Flex sx={{ alignItems: 'center' }}>
                      <LogoIcon />
                      BumHub
                    </Flex>
                  </GatsbyLink>
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
