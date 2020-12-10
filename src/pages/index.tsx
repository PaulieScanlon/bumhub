import React, { FunctionComponent } from 'react'
import { Container, Grid, Divider, Heading, Text, Flex, Box, Link, Button } from 'theme-ui'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'
import codeTheme from 'prism-react-renderer/themes/dracula'

import theme from '../gatsby-plugin-theme-ui'

import { MrFetchy } from '../components/mr-fetchy'

import { AdventCard } from '../components/advent-card'
import { IndexHero } from '../components/index-hero/index-hero'
import { EcoStat } from '../components/eco-stat'
import { FartBum } from '../components/fart-bum'
import { ThemeUIBum } from '../components/theme-ui-bum'
import fileSize from 'filesize'

import Highlight, { defaultProps } from 'prism-react-renderer'

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

  // console.log('data: ', data)
  // console.log('allSitePage.nodes: ', data.allSitePage.nodes.length)
  // console.log('allAdventBums.nodes: ', data.allAdventBums.nodes.length)

  return (
    <>
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
          </Box>
          <Divider />
          <MrFetchy endPoint={DATE_END_POINT}>
            {(response) => {
              return (
                <Grid
                  sx={{
                    gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
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
          backgroundColor: 'lightGrey',
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
            </Box>
            <Box
              sx={{
                m: '0 auto',
                width: ['100%', '100%', '70%'],
              }}
            >
              <MrFetchy endPoint={ECO_END_POINT}>
                {(response) => {
                  console.log(response)
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
              <Link href="http://ecoping.earth/" target="_blank" rel="noopener">
                <Button as="div" variant="accent">
                  Visit EcoPing.earth
                </Button>
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
            <Grid sx={{ gridRowGap: 2 }}>
              <Box>
                <Heading as="h2" variant="styles.h2">
                  Bum UI
                </Heading>
                <Text>
                  BumHub's UI was created using the brills{' '}
                  <Link href="http://theme-ui.com/" target="_blank" rel="noopener">
                    Theme UI
                  </Link>
                </Text>
              </Box>
              <Text sx={{ fontSize: 0, fontStyle: 'italic' }}>
                "Theme UI is a library for creating themeable user interfaces based on constraint-based design
                principles" - Theme UI
              </Text>
              <Flex sx={{ alignItems: 'flex-end' }}>
                <GatsbyLink to="/bum-ui" className="gatsby-link">
                  <Button variant="secondary">Preview Styles</Button>
                </GatsbyLink>
              </Flex>
            </Grid>
            <Box sx={{ position: 'relative' }}>
              <Highlight
                {...defaultProps}
                code={JSON.stringify(theme.styles.header, null, 2)}
                language="jsx"
                theme={codeTheme}
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <Box as="pre" variant="styles.pre" sx={{ boxShadow: 'header' }} className={className} style={style}>
                    {tokens.map((line, i) => (
                      <Text {...getLineProps({ line, key: i })} sx={{ lineHeight: '1.5' }}>
                        <Box as="span" sx={{ color: 'lineNumbers', mr: 2 }}>
                          {i}
                        </Box>
                        {line.map((token, key) => (
                          <Box as="span" {...getTokenProps({ token, key })} />
                        ))}
                      </Text>
                    ))}
                  </Box>
                )}
              </Highlight>
              <Box sx={{ position: 'absolute', right: 0, bottom: '-25%' }}>
                <Box sx={{ width: 320 }}>
                  <ThemeUIBum />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Divider />

      <Box
        as="section"
        sx={{
          backgroundColor: 'lightGrey',
        }}
      >
        <Container
          sx={{
            py: 5,
          }}
        >
          <Heading as="h2" variant="styles.h2">
            Bum Search (WIP)
          </Heading>
          <Text>Discover more of the worlds GitHub ‘bum’ repositories</Text>
          <GatsbyLink to="/search">Search Bums</GatsbyLink>
        </Container>
      </Box>

      <Box as="section">
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
