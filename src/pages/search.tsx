import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container, Box, Divider, Spinner, Text, Link, Flex, Heading } from 'theme-ui'

const SearchPage: FunctionComponent = () => {
  const [res, setRes] = useState({ bums: null })
  const [isMounted, setIsmounted] = useState(true)

  useEffect(() => {
    fetch(`../${process.env.GATSBY_API_URL}/github-search`, {
      mode: 'no-cors',
      method: 'GET',
    })
      .then((res) => res.text())
      .then((res) => {
        isMounted ? setRes(JSON.parse(res)) : null
      })
      .catch((err) => {
        console.error({ err })
      })
  }, [])

  useEffect(() => {
    return () => {
      setIsmounted(false)
    }
  }, [])

  return (
    <Container>
      <Box as="section" sx={{ mb: 5 }}>
        <Heading as="h1" variant="styles.h1">
          Bum Search
        </Heading>
        <Text>Discover more of the worlds GitHub ‘bum’ repositories</Text>
        <Text>
          <Text as="b">endpoint: </Text>
          {`${process.env.GATSBY_API_URL}/github-search`}
        </Text>
        {res.bums ? (
          <Text>
            <Text as="b">data_length: </Text>
            {res.bums.length}
          </Text>
        ) : null}
      </Box>
      <Divider />

      {res.bums ? (
        <Box as="ol">
          {res.bums.map((item, index) => {
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
      ) : (
        <Spinner />
      )}
    </Container>
  )
}

export default SearchPage
