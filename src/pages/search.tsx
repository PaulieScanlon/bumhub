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
            avatar_url
          }
          description
          html_url
          created_at
          stargazers_count
          language
          forks
          watchers
          size
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
            const {
              name,
              full_name,
              owner,
              description,
              html_url,
              created_at,
              stargazers_count,
              language,
              forks,
              watchers,
              size,
            } = item
            return (
              <Box key={index} as="li" sx={{ mb: 4 }}>
                <Text>{`name: ${name}`}</Text>
                <Text>{`full_name: ${full_name}`}</Text>
                <Text>{`login: ${owner.login}`}</Text>
                <Text>{`avatar_url: ${owner.avatar_url}`}</Text>
                <Text>{`description: ${description}`}</Text>
                <Text>{`html_url: ${html_url}`}</Text>
                <Text>{`created_at: ${created_at}`}</Text>
                <Text>{`stargazers_count: ${stargazers_count}`}</Text>
                <Text>{`language: ${language}`}</Text>
                <Text>{`forks: ${forks}`}</Text>
                <Text>{`watchers: ${watchers}`}</Text>
                <Text>{`size: ${size}`}</Text>
              </Box>
            )
          })}
        </Box>
      </Container>
    </>
  )
}

export default SearchPage
