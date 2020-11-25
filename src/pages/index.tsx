import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { Container, Flex, Grid, Divider, Heading, Text, Card, Spinner, Box, Link } from 'theme-ui'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby'

import { MrFetchy } from '../components/mr-fetchy'

const END_POINT = '/get-date'

const isEnabled = (data: any, index: number) => {
  if (index + 1 <= data.day && data.month === data.limited_month) {
    return true
  }

  return true
  // return false
}

const IndexPage: FunctionComponent = () => {
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
          25 Bums of Christmas
        </Heading>
        <Text>A new ‘bum’ repo for each day of Christmas</Text>
        {/* TDOO - remove this */}
        <MrFetchy endPoint={END_POINT}>
          {(date) => {
            return (
              <Text>
                <Text as="b">data_length: </Text>
                {date.data.formatted_date}
              </Text>
            )
          }}
        </MrFetchy>
      </Box>

      <MrFetchy endPoint={END_POINT}>
        {(date) => {
          return (
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
                    <GatsbyLink to={isEnabled(date.data, index) ? path : `#${index + 1}`}>
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
                          <Heading as="h4" variant="styles.h4">{`${index + 1}`}</Heading>
                          <Text>{login}</Text>
                          <Heading as="h5" variant="styles.h5">
                            {name}
                          </Heading>
                        </Flex>
                        {isEnabled(date.data, index) ? (
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
          )
        }}
      </MrFetchy>

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
          http://ecoping.earth/
        </Link>
      </Box>
    </Container>
  )
}

export default IndexPage
