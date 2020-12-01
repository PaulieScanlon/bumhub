import React, { Fragment, FunctionComponent } from 'react'
import { Container, Flex, Grid, Divider, Heading, Text, Card, Box, Link } from 'theme-ui'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'

import { MrFetchy } from '../components/mr-fetchy'

import { LogoBrand } from '../components/logo-brand'
import { AdventCard } from '../components/advent-card'
import { Starburst } from '../components/starburst'

const END_POINT = 'get-date'

const isDisabled = (data: any, index: number) => {
  if (data.month === data.limited_month) {
    if (index.toString() <= data.day) {
      return false
    }
  }
  return true
}

const isToday = (data: any, index: number) => {
  if (data.month === data.limited_month) {
    if (index.toString() === data.day) {
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
      <Box as="section" sx={{ backgroundColor: 'accent', position: 'relative', zIndex: 'hero' }}>
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Flex sx={{ flexDirection: 'column', py: 5, justifyContent: 'center' }}>
            <LogoBrand sx={{ width: ['60%', '40%', '40%'] }} />
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
              <Flex
                sx={{ borderRadius: 4, backgroundColor: 'text', display: 'inline-flex', px: 3, py: 2, fontSize: 0 }}
              >
                <Text sx={{ color: 'background', mr: 1 }}>A</Text>
                <Link
                  href="https://twitter.com/search?q=%23SillySiteChallenge"
                  target="_blank"
                  sx={{ fontWeight: 'bold', mr: 1, ':focus': { outlineColor: 'primary' } }}
                >
                  #SillySiteChallenge
                </Link>
                <Text sx={{ color: 'background', mr: 1 }}>by</Text>
                <Link
                  href="https://twitter.com/PaulieScanlon"
                  target="_blank"
                  sx={{ color: 'secondary', fontWeight: 'bold', ':focus': { outlineColor: 'secondary' } }}
                >
                  @PaulieScanlon
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Container>
        <Box
          sx={{
            opacity: 0.6,
            top: ['5%', '0%', '-15%'],
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            minHeight: 'hero',
            zIndex: 0,
          }}
        >
          <Starburst />
        </Box>
      </Box>
      <Divider />
      <Box as="section">
        <Container>
          <Box>
            <Heading as="h2" variant="styles.h2" sx={{ textAlign: 'center' }}>
              Merry Christmass
            </Heading>
            <Text sx={{ textAlign: 'center' }}>
              A new <b>bum</b> for each day of advent
            </Text>
          </Box>
          <Divider />
          <MrFetchy endPoint={END_POINT}>
            {(response) => {
              return (
                <Grid
                  sx={{
                    gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
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
      <Box as="section">
        <Container>
          <Heading as="h2" variant="styles.h2">
            Bum Search
          </Heading>
          <Text>Discover more of the worlds GitHub ‘bum’ repositories</Text>
          <GatsbyLink to="/search">Search Bums</GatsbyLink>
        </Container>
      </Box>
      <Divider />
      <Box as="section">
        <Container>
          <Heading as="h2" variant="styles.h2">
            Bum UI
          </Heading>
          <Text>The BumHub styles created with the brills Theme-UI</Text>
          <GatsbyLink to="/bum-ui">Preview Styles</GatsbyLink>
        </Container>
      </Box>
      <Divider />
      <Box as="section">
        <Container>
          <Heading as="h2" variant="styles.h2">
            EcoBum
          </Heading>
          <Text> BumHubs carbon footprint measured in human farts, powered by EcoPing</Text>
          <Link href="http://ecoping.earth/" target="_blank">
            http://ecoping.earth/
          </Link>
        </Container>
      </Box>
      <Divider />
    </>
  )
}

export default IndexPage
