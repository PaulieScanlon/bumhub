import React, { FunctionComponent } from 'react'
import { Container, Box, Divider, Text, Link, Flex, Heading } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

const SearchPage: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query bumsQuery {
      allBums {
        nodes {
          name
          full_name
          owner {
            login
          }
          description
          html_url
          created_at
          stargazers_count
          language
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <Box>
          <Heading as="h1" variant="styles.h1">
            Bum Search (WIP)
          </Heading>
          <Text>Discover more of the worlds GitHub ‘bum’ repositories</Text>
        </Box>
        <Divider />
        <Box as="ol">
          {data.allBums.nodes.map((item, index: number) => {
            const { name, description, html_url } = item
            return (
              <Box key={index} as="li" sx={{ mb: 4 }}>
                <Heading as="h5" variant="styles.h5">
                  <Text as="b">name: </Text>
                  {name}
                </Heading>
                <Text>
                  <Text as="b">description: </Text>
                  {description ? description : '~no description available~'}
                </Text>
                <Flex>
                  <Text as="b">url: </Text>
                  <Link href={html_url} target="_blank">
                    {html_url}
                  </Link>
                </Flex>
              </Box>
            )
          })}
        </Box>
      </Container>
    </>
  )
}

export default SearchPage
