import React, { FunctionComponent } from 'react'
import { Container, Grid, Flex, Box, Heading, Text, Link } from 'theme-ui'
import filesize from 'filesize'

import theme from '../../gatsby-plugin-theme-ui'

import { Starburst } from '../starburst'
import { GitHubStat } from '../github-stat'
import { LaptopBum } from '../laptop-bum/laptop-bum'

const { colors } = theme

interface IBumHeroProps {
  /** The repository name */
  name: string
  /** The repository owner */
  login: string
  /** The repository description */
  description: string
  /** The repository url */
  html_url: string
  /** The repository language */
  language: string
  /** The repository stargazer count */
  stargazers_count: number
  /** The repository size */
  size: number
  /** The repository licence */
  license: { name: string }
  /** The repository issue count */
  open_issues_count: number
  /** The repository watchers */
  watchers: number
}

export const BumHero: FunctionComponent<IBumHeroProps> = ({
  name = '',
  login = '',
  description = '',
  html_url = '',
  language = '',
  stargazers_count = 0,
  size = 0,
  license = { name: '' },
  open_issues_count = '',
  watchers = 0,
}) => {
  return (
    <Container sx={{ position: 'relative', zIndex: 1 }}>
      <Box
        as="section"
        sx={{
          backgroundColor: 'accent',
          borderRadius: 0,
          boxShadow: 'surface',
          p: 4,
          position: 'relative',
          zIndex: 'hero',
        }}
      >
        <Grid
          sx={{
            position: 'relative',
            gridTemplateColumns: ['1fr', '1fr', '1fr 0.8fr'],
            zIndex: 1,
          }}
        >
          <Box sx={{}}>
            <Heading as="h1" variant="styles.h1">
              <Link href={html_url} target="_blank" sx={{ color: 'text' }}>
                {name}
              </Link>
            </Heading>
            <Text>{description}</Text>
            <Flex sx={{ width: ['50%', '60%', '70%'], mt: '10%' }}>
              <LaptopBum />
            </Flex>
          </Box>
          <Box
            sx={{
              backgroundColor: 'text',
              borderRadius: 0,
              p: 4,
            }}
          >
            <Grid
              sx={{
                mx: '-45px',
                rowGap: 3,
              }}
            >
              <GitHubStat description="User" value={`@${login}`} color={colors.primary} icon="accountCircle" />
              <GitHubStat description="Language" value={language} color={colors.secondary} icon="code" />
              <GitHubStat description="License" value={license?.name} color={colors.highlight} icon="localPolice" />
              <GitHubStat description="Stargazers" value={stargazers_count} color={colors.accent} icon="grade" />
              <GitHubStat
                description="Size"
                value={filesize(size, { exponent: 1 })}
                color={colors.green}
                icon="snippetFolder"
              />
              <GitHubStat description="Watchers" value={watchers} color={colors.teal} icon="visibility" />
              <GitHubStat description="Issues" value={open_issues_count} color={colors.midRed} icon="warning" />
            </Grid>
          </Box>
        </Grid>
        <Box
          sx={{
            opacity: 0.6,
            top: ['5%', '2%', '-10%'],
            left: ['-60%'],
            bottom: 0,
            right: 0,
            position: 'absolute',
            overflow: 'hidden',
            zIndex: 0,
          }}
        >
          <Starburst />
        </Box>
      </Box>
    </Container>
  )
}
