import React, { FunctionComponent } from 'react'
import { Container, Box, Divider, Text, Link, Flex, Heading } from 'theme-ui'

import { MrFetchy } from '../components/mr-fetchy'

const END_POINT = 'github-search'

const SearchPage: FunctionComponent = () => {
  return (
    <Container>
      <Box as="section" sx={{ mb: 5 }}>
        <Heading as="h1" variant="styles.h1">
          Bum Search
        </Heading>
        <Text>Discover more of the worlds GitHub ‘bum’ repositories</Text>
      </Box>
      <Divider />

      <MrFetchy endPoint={END_POINT}>
        {(bums) => {
          return (
            <Box as="ol">
              {bums.data.map((item, index: number) => {
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
          )
        }}
      </MrFetchy>
    </Container>
  )
}

export default SearchPage
