import React, { FunctionComponent, useState } from 'react'
import { Container, Grid, Flex, Box, MenuButton, Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import { Location } from '@reach/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import theme from '../../gatsby-plugin-theme-ui'
import { LogoIcon } from '../logo-icon/logo-icon'
import { INavigationItem } from '../../types'
import { Dropdown } from '../dropdown/dropdown'
import { Icon } from '../icon'

const navigationItems: INavigationItem[] = [
  {
    name: 'Bum Search',
    to: '/search',
  },
  {
    name: 'Bum Bum Maker',
    to: '/bum-bum-maker',
  },
  {
    name: 'Bum UI',
    to: '/bum-ui',
  },
]

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
                maxWidth: 'maxWidth',
              }}
            >
              <Grid
                sx={{
                  backgroundColor: isIndex ? headerColor : 'background',
                  borderRadius: 0,
                  boxShadow: 'header',
                  gridGap: [1, 3],
                  gridTemplateColumns: 'auto auto 24px',
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
                <Flex
                  sx={{
                    display: ['flex', 'none'],
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Dropdown trigger={<MenuButton aria-label="Menu" />} items={navigationItems} />
                </Flex>
                <Grid
                  sx={{
                    position: 'relative',
                    display: ['none', 'grid'],
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: 2,
                    gridTemplateColumns: 'auto auto auto',
                  }}
                >
                  {navigationItems.map((item: INavigationItem, index: number) => {
                    const { to, name } = item
                    return (
                      <GatsbyLink key={index} to={to}>
                        {name}
                      </GatsbyLink>
                    )
                  })}
                </Grid>
                <Flex>
                  <Link
                    aria-label="GitHub"
                    href="https://github.com/PaulieScanlon/bumhub"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      mt: ['0px', '-3px'],
                      p: '0px!important',
                    }}
                  >
                    <Icon name="gitHub" />
                  </Link>
                </Flex>
              </Grid>
            </Container>
          </Flex>
        )
      }}
    </Location>
  )
}
