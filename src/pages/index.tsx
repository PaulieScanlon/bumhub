import React, { FunctionComponent } from 'react'
import { Container, Grid, Divider, Heading, Text, Flex, Box, Link } from 'theme-ui'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'

import { MrFetchy } from '../components/mr-fetchy'

import { AdventCard } from '../components/advent-card'
import { IndexHero } from '../components/index-hero/index-hero'
import { EcoStat } from '../components/eco-stat'
import { FartBum } from '../components/fart-bum'
import { ThemeUIBum } from '../components/theme-ui-bum'
import fileSize from 'filesize'

import { LogoBrand } from '../components/logo-brand'
import { CodeBlock } from '../components/code-block'
import { TableGraphic } from '../components/table-graphic/table-graphic'
import { SearchBum } from '../components/search-bum'
import { Starburst } from '../components/starburst'
import { MakerBum } from '../components/maker-bum'
import { bumBumConfig } from './bum-bum-maker'
import { Seo } from '../components/seo/seo'

const DATE_END_POINT = 'get-date'
const ECO_END_POINT = 'get-eco-ping'

const isDisabled = (data: any, index: number) => {
  if (data.month === data.limited_month) {
    if (index <= Number(data.day)) {
      return false
    }
  }
  return true
}

const isToday = (data: any, index: number) => {
  if (data.month === data.limited_month) {
    if (index === Number(data.day)) {
      return true
    }
  }

  return false
}

const IndexPage: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query adventBumsQuery {
      allSitePage(filter: { path: { regex: "//bums//" } }) {
        nodes {
          context {
            name
          }
          path
        }
      }
      allAdventBums {
        nodes {
          name
          full_name
          owner {
            login
          }
          description
          created_at
          stargazers_count
          language
        }
      }
    }
  `)

  return (
    <>
      <Seo />
      <IndexHero />

      <Box as="section">
        <Container>
          <Box sx={{ my: 5 }}>
            <Heading as="h2" variant="styles.h2" sx={{ textAlign: 'center' }}>
              Merry Christmass
            </Heading>
            <Text sx={{ textAlign: 'center' }}>
              A new <b>bum</b> for every day of advent
            </Text>
            <Box
              sx={{
                mx: 'auto',
                width: ['100%', '80%', '70%', '50%'],
              }}
            >
              <Text sx={{ color: 'midGrey', fontSize: 0, fontStyle: 'italic', textAlign: 'center' }}>
                BumHub uses{' '}
                <Link href="https://www.netlify.com/products/functions/" target="_blank" rel="noopener">
                  Netlify functions
                </Link>{' '}
                to hit the GitHub{' '}
                <Link href="https://developer.github.com/v3/" target="_blank" rel="noopener">
                  REST API
                </Link>{' '}
                at build time to create a page for each day of advent using Gatsby's new{' '}
                <Link href="https://www.gatsbyjs.com/docs/file-system-route-api/" target="_blank" rel="noopener">
                  Routes API
                </Link>{' '}
                -{' '}
                <Box as="span" role="img" aria-label="Man Dancing">
                  🕺
                </Box>
              </Text>
            </Box>
          </Box>
          <Divider />
          <MrFetchy endPoint={DATE_END_POINT}>
            {(response) => {
              return (
                <Grid
                  sx={{
                    gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr'],
                    rowGap: 4,
                    columnGap: 3,
                  }}
                >
                  {data.allSitePage.nodes.map((node, index) => {
                    const { path } = node
                    const { name } = data.allAdventBums.nodes[index]
                    let _index = index + 1

                    return (
                      <AdventCard
                        key={_index}
                        day={_index}
                        to={path}
                        repoName={name}
                        isDisabled={isDisabled(response.data, _index)}
                        isToday={isToday(response.data, _index)}
                      />
                    )
                  })}
                </Grid>
              )
            }}
          </MrFetchy>
        </Container>
      </Box>

      <Divider />

      <Box
        as="section"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Container
          sx={{
            py: 5,
          }}
        >
          <Grid
            sx={{
              rowGap: 4,
            }}
          >
            <Box>
              <Heading as="h2" variant="styles.h2" sx={{ textAlign: 'center' }}>
                EcoBum
              </Heading>

              <Text sx={{ textAlign: 'center' }}>
                Website carbon usage calculated by{' '}
                <Link href="http://ecoping.earth/" target="_blank" rel="noopener">
                  EcoPing.earth
                </Link>
              </Text>
              <Text sx={{ color: 'midGrey', fontSize: 0, fontStyle: 'italic', textAlign: 'center' }}>
                BumHub uses{' '}
                <Link href="https://www.gatsbyjs.com/plugins/gatsby-plugin-preact/" rel="noopener">
                  gatsby-plugin-preact
                </Link>{' '}
                so it's as lightweight and eco-friendly as it can be
              </Text>
            </Box>
            <Box
              sx={{
                m: '0 auto',
                width: ['100%', '100%', '70%'],
              }}
            >
              <MrFetchy endPoint={ECO_END_POINT}>
                {(response) => {
                  return (
                    <Grid
                      sx={{
                        gridTemplateColumns: ['1fr', '1fr 260px 1fr'],
                        rowGap: 4,
                      }}
                    >
                      <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <EcoStat statistic={`${response.data.co2grams}g`} />
                        <Box sx={{ mt: 3 }}>
                          <Text
                            sx={{ textAlign: 'center', fontWeight: 'bold', lineHeight: 'heading' }}
                          >{`${response.data.co2grams} co2 grams`}</Text>
                          <Text sx={{ textAlign: 'center', fontSize: 0 }}>per page visit</Text>
                        </Box>
                      </Flex>
                      <Flex
                        sx={{
                          flexDirection: 'column',
                          mx: 'auto',
                          maxWidth: 270,
                        }}
                      >
                        <FartBum />
                        <Box sx={{ mt: 1 }}>
                          <Text sx={{ fontSize: 3, textAlign: 'center', fontWeight: 'bold', lineHeight: 'heading' }}>
                            {`${response.data.conversions.farts.perView} human farts`}
                          </Text>
                          <Text sx={{ textAlign: 'center', fontSize: 1 }}>per page visit</Text>
                        </Box>
                      </Flex>
                      <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <EcoStat statistic={fileSize(response.data.pageSize, { round: 0, exponent: 1 })} />
                        <Box sx={{ mt: 3 }}>
                          <Text sx={{ textAlign: 'center', fontWeight: 'bold', lineHeight: 'heading' }}>
                            {fileSize(response.data.pageSize, { round: 0, exponent: 1, fullform: true })}
                          </Text>
                          <Text sx={{ textAlign: 'center', fontSize: 0 }}>home page size</Text>
                        </Box>
                      </Flex>
                    </Grid>
                  )
                }}
              </MrFetchy>
            </Box>
            <Flex
              sx={{
                justifyContent: 'center',
              }}
            >
              <Link href="http://ecoping.earth/" target="_blank" rel="noopener" variant="buttons.accent">
                Visit EcoPing.earth
              </Link>
            </Flex>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box as="section">
        <Container
          sx={{
            py: 4,
          }}
        >
          <Grid sx={{ gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], rowGap: 4 }}>
            <Box sx={{ position: 'relative', gridRow: ['none', 'none', 1], py: 4 }}>
              <Flex
                sx={{
                  mx: 'auto',
                  position: 'relative',
                  zIndex: 1,
                  width: [280, 320],
                }}
              >
                <MakerBum config={bumBumConfig} />
              </Flex>
              <Box
                sx={{
                  backgroundColor: 'accent',
                  borderRadius: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: -10,
                  right: 0,
                  zIndex: 0,
                }}
              >
                <LogoBrand sx={{ position: 'absolute', left: '16px', bottom: '8px', width: '75px' }} />
                <Starburst />
              </Box>
            </Box>

            <Grid sx={{ gridRowGap: 1 }}>
              <Box
                sx={{
                  pl: [0, 0, 2, 4],
                }}
              >
                <Heading as="h2" variant="styles.h2" sx={{ textAlign: 'right' }}>
                  Bum Bum Maker
                </Heading>
                <Text sx={{ textAlign: 'right' }}>So what else can you do with Gatsby?</Text>
                <Text sx={{ color: 'midGrey', fontSize: 0, fontStyle: 'italic', textAlign: 'right' }}>
                  Bum Bum Maker lets you customise your own bum and by using{' '}
                  <Link href="https://www.npmjs.com/package/html-to-image" target="_blank" rel="noopener">
                    html-to-image
                  </Link>{' '}
                  even lets you export your bum to .jpeg so you can download and share! -{' '}
                  <Box as="span" role="img" aria-label=" Man Dancing">
                    🕺
                  </Box>
                </Text>
              </Box>
              <Flex sx={{ alignItems: 'flex-end', justifyContent: 'flex-end', a: { variant: 'buttons.secondary' } }}>
                <GatsbyLink to="/bum-bum-maker">Make your own bum</GatsbyLink>
              </Flex>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box
        as="section"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Container
          sx={{
            py: 5,
          }}
        >
          <Grid sx={{ gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], rowGap: 4 }}>
            <Grid sx={{ gridRowGap: 1 }}>
              <Box
                sx={{
                  pr: [0, 0, 2, 4],
                }}
              >
                <Heading as="h2" variant="styles.h2">
                  Bum UI
                </Heading>
                <Text>
                  BumHub's UI was created using the super brill brills{' '}
                  <Link href="http://theme-ui.com/" target="_blank" rel="noopener">
                    Theme UI
                  </Link>
                </Text>
                <Text sx={{ color: 'midGrey', fontSize: 0, fontStyle: 'italic' }}>
                  Theme UI is a library for creating themeable user interfaces based on constraint-based design
                  principles - Theme UI
                </Text>
              </Box>
              <Flex sx={{ alignItems: 'flex-end', a: { variant: 'buttons.secondary' } }}>
                <GatsbyLink to="/bum-ui">Preview the styles</GatsbyLink>
              </Flex>
            </Grid>
            <Box sx={{ position: 'relative' }}>
              <CodeBlock />
              <Flex
                sx={{
                  alignItems: 'center',
                  position: 'absolute',
                  right: 0,
                  bottom: '-20%',
                  justifyContent: 'flex-start',
                }}
              >
                <Box sx={{ width: [280, 320] }}>
                  <ThemeUIBum />
                </Box>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Divider />

      <Box as="section">
        <Container
          sx={{
            pt: 4,
            pb: 6,
          }}
        >
          <Grid sx={{ gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'], rowGap: 4 }}>
            <Box sx={{ position: 'relative', gridRow: ['none', 'none', 1] }}>
              <TableGraphic />
              <Flex
                sx={{
                  alignItems: 'center',
                  position: 'absolute',
                  left: [0, '-5%'],
                  bottom: '-35%',
                  justifyContent: 'flex-start',
                }}
              >
                <Box sx={{ width: [220, 260] }}>
                  <SearchBum />
                </Box>
              </Flex>
            </Box>

            <Grid sx={{ gridRowGap: 1 }}>
              <Box
                sx={{
                  pl: [0, 0, 2, 4],
                }}
              >
                <Heading as="h2" variant="styles.h2" sx={{ textAlign: 'right' }}>
                  Bum Search
                </Heading>
                <Text sx={{ textAlign: 'right' }}>BumHub has retrieved all the GitHub bums so you don't have to!</Text>
                <Text sx={{ color: 'midGrey', fontSize: 0, fontStyle: 'italic', textAlign: 'right' }}>
                  BumHub uses{' '}
                  <Link href="https://www.netlify.com/products/functions/" target="_blank" rel="noopener">
                    Netlify functions
                  </Link>{' '}
                  to hit the GitHub{' '}
                  <Link href="https://developer.github.com/v3/" target="_blank" rel="noopener">
                    REST API
                  </Link>{' '}
                  at build time so all bum data is statically rendered by Gatsby -{' '}
                  <Box as="span" role="img" aria-label="Kiss Mark">
                    💋
                  </Box>
                </Text>
              </Box>
              <Flex sx={{ alignItems: 'flex-end', justifyContent: 'flex-end', a: { variant: 'buttons.secondary' } }}>
                <GatsbyLink to="/search">Search the bums</GatsbyLink>
              </Flex>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        as="section"
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Container
          sx={{
            py: 5,
          }}
        >
          <Heading as="h2" variant="styles.h2">
            Blog (WIP)
          </Heading>
          <Text>Here's a blog post i'm regulary updating as I develop this site in public</Text>
          <Link href="https://paulie.dev/posts/2020/11/silly-site-challenge/" target="_blank" rel="noopener">
            https://paulie.dev/posts/2020/11/silly-site-challenge/
          </Link>
        </Container>
      </Box>
      <Divider />
    </>
  )
}

export default IndexPage
