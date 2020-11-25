import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { Container, Flex, Grid, Divider, Heading, Text, Card, Spinner, Box, Link } from 'theme-ui'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'

const isEnabled = (date: any, index: number) => {
  if (index + 1 <= date.day && date.month === date.limited_month) {
    return true
  }

  return true
  // return false
}

const IndexPage: FunctionComponent = () => {
  const [res, setRes] = useState({ date: null })

  useEffect(() => {
    fetch(`../${process.env.GATSBY_API_URL}/get-date`, {
      mode: 'no-cors',
      method: 'GET',
    })
      .then((res) => res.text())
      .then((res) => {
        setRes(JSON.parse(res))
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const data = useStaticQuery(graphql`
    query BumsQuery {
      allSitePage(filter: { path: { regex: "//bums//" } }) {
        nodes {
          context {
            name
          }
          path
        }
      }
      allBums {
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
    <Container>
      <Box as="section" sx={{ mb: 5 }}>
        <Heading as="h1" variant="styles.h1">
          BumHub
        </Heading>
        <Text>A cheeky look at the worlds GitHub ‘bum’ repos</Text>
      </Box>
      <Divider />
      <Box as="section" sx={{ mb: 5 }}>
        <Heading as="h2" variant="styles.h2">
          Advent
        </Heading>
        <Text>A new ‘bum’ repo for each day of Christmas</Text>
        <Text>Server Date | {res.date ? res.date.formatted_date : ''}</Text>
      </Box>
      {res.date ? (
        <Grid
          sx={{
            gridTemplateColumns: ['1fr', '1fr 1fr'],
            mb: 5,
            a: {
              color: 'text',
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
            },
          }}
        >
          {data.allSitePage.nodes.map((node, index) => {
            const { path } = node
            const {
              name,
              owner: { login },
            } = data.allBums.nodes[index]

            return (
              <Fragment key={index}>
                <GatsbyLink to={isEnabled(res.date, index) ? path : `#${index + 1}`}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      minHeight: '200px',
                    }}
                  >
                    <Flex
                      sx={{
                        flexDirection: 'column',
                        flexGrow: 1,
                      }}
                    >
                      <Heading as="h2" variant="styles.h2">{`${index + 1}`}</Heading>
                      <Text>{login}</Text>
                      <Heading as="h2" variant="styles.h2">
                        {name}
                      </Heading>
                    </Flex>
                    {isEnabled(res.date, index) ? (
                      <Flex sx={{ justifyContent: 'flex-end' }}>
                        <Text sx={{ color: 'primary' }}>{`More details ➡️`}</Text>
                      </Flex>
                    ) : null}
                  </Card>
                </GatsbyLink>
              </Fragment>
            )
          })}
        </Grid>
      ) : (
        <Spinner />
      )}
      <Divider />
      <Box as="section" sx={{ mb: 5 }}>
        <Heading as="h2" variant="styles.h2">
          Bum Search
        </Heading>
        <Text>Discover more of the worlds GitHub ‘bum’ repositories</Text>
        <GatsbyLink to="/search">Search Bums</GatsbyLink>
      </Box>
      <Divider />
      <Box as="section" sx={{ mb: 5 }}>
        <Heading as="h2" variant="styles.h2">
          Bum UI
        </Heading>
        <Text>The BumHub styles created with the brills Theme-UI</Text>
        <GatsbyLink to="/bum-ui">Preview Styles</GatsbyLink>
      </Box>
      <Divider />
      <Box as="section" sx={{ mb: 5 }}>
        <Heading as="h2" variant="styles.h2">
          EcoBum
        </Heading>
        <Text> BumHubs carbon footprint measured in human farts, powered by EcoPing</Text>
        <Link href="http://ecoping.earth/" target="_blank">
          Preview Styles
        </Link>
      </Box>
    </Container>
  )
}

export default IndexPage
