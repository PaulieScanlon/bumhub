import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container, Box, Spinner, Text, Link, Flex, Grid, Heading } from 'theme-ui'

const SearchPage: FunctionComponent = () => {
  const [res, setRes] = useState({ bums: null })

  useEffect(() => {
    fetch(`../${process.env.GATSBY_API_URL}/github-search`, {
      mode: 'no-cors',
      method: 'GET',
    })
      .then((res) => res.text())
      .then((res) => {
        setRes(JSON.parse(res))
      })
      .catch((err) => {
        console.error({ err })
      })
  }, [])

  return (
    <Container>
      <Heading as="h1" variant="styles.h1">
        Search
      </Heading>
      <Flex sx={{ alignItems: 'center' }}>
        <Heading as="h4" variant="styles.h4" sx={{ mr: 1 }}>
          A list of queries matching:
        </Heading>
        <code>bums in:name,description</code>
      </Flex>
      {res.bums ? (
        <>
          <Grid>
            <Box>
              <Text>
                <Text as="b">endpoint: </Text>
                {`${process.env.GATSBY_API_URL}/github-search`}
              </Text>
              <Text>
                <Text as="b">data_length: </Text>
                {res.bums.length}
              </Text>
            </Box>
            <Box as="ol">
              {res.bums.map((item, index) => {
                const { name, description, html_url } = item

                return (
                  <Box key={index} as="li" sx={{ mb: 2 }}>
                    <Text>
                      <Text as="b">name: </Text>
                      {name}
                    </Text>
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
          </Grid>

          {/* <pre>
            <code>{JSON.stringify(res.data, null, 2)}</code>
          </pre> */}
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  )
}

export default SearchPage
