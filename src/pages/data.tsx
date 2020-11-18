import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container, Heading, Grid, Box, Spinner, Text, Divider } from 'theme-ui'

const DataPage: FunctionComponent = () => {
  const [dateResponse, setDateResponse] = useState({ date: null })
  const [octokitResponse, setOctokitResponse] = useState({ search: null })
  const [readmeResponse, setReadmeResponse] = useState({ readme: null })

  console.log('process.env.GATSBY_API_URL: ', process.env.GATSBY_API_URL)

  useEffect(() => {
    console.log('useEffect')
    fetch(`${process.env.GATSBY_API_URL}/get-date`, {
      mode: 'no-cors',
      method: 'GET',
    })
      .then((res) => res.text())
      .then((res) => {
        setDateResponse(JSON.parse(res))
      })
      .catch((err) => {
        console.error(err)
      })

    fetch(`${process.env.GATSBY_API_URL}/github-search`, {
      mode: 'no-cors',
      method: 'GET',
    })
      .then((res) => res.text())
      .then((res) => {
        setOctokitResponse(JSON.parse(res))
      })
      .catch((err) => {
        console.error({ err })
      })

    // This will probably go in the page template
    // owner.login =
    const owner = 'yemyatthu1990'
    const repo = 'Bum-Meme-Maker'

    fetch(`${process.env.GATSBY_API_URL}/github-readme`, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({ owner: owner, repo: repo }),
    })
      .then((res) => res.text())
      .then((res) => {
        setReadmeResponse(JSON.parse(res))
      })
      .catch((err) => {
        console.error({ err })
      })
  }, [])

  return (
    <Container>
      {dateResponse.date ? (
        <>
          <Heading as="h4" variant="styles.h4">
            Date Response
          </Heading>
          <pre>
            <code>{JSON.stringify(`${process.env.GATSBY_API_URL}/get-date`, null, 2)}</code>
          </pre>
          <pre>
            <code>{JSON.stringify(dateResponse.date, null, 2)}</code>
          </pre>
        </>
      ) : (
        <Spinner />
      )}
      <Divider />
      {readmeResponse.readme ? (
        <>
          <Heading as="h4" variant="styles.h4">
            Readme Response
          </Heading>
          <Box dangerouslySetInnerHTML={{ __html: readmeResponse.readme.data }} />
        </>
      ) : (
        <Spinner />
      )}
      <Divider />
      {octokitResponse.search ? (
        <>
          <Heading as="h4" variant="styles.h4">
            Octokit Response
          </Heading>
          <Box as="ul">
            {octokitResponse.search.data.items
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .map((item: any, index: number) => {
                const { owner, name, full_name, description, stargazers_count, html_url, default_branch } = item
                return (
                  <Grid key={index} as="li" sx={{ gridTemplateColumns: 'auto 1fr', gap: 2, mb: 2 }}>
                    <Text>{index}</Text>
                    <Box>
                      <Text>{`owner.login: ${owner.login}`}</Text>
                      <Text>{`name: ${name}`}</Text>
                      <Text>{`full_name: ${full_name}`}</Text>
                      <Text>{`description: ${description}`}</Text>
                      <Text>{`stargazers_count: ${stargazers_count}`}</Text>
                      <Text>{`html_url: ${html_url}`}</Text>
                      <Text>{`default_branch: ${default_branch}`}</Text>
                    </Box>
                  </Grid>
                )
              })}
          </Box>
          <pre>
            <code>{JSON.stringify(`${process.env.GATSBY_API_URL}/github-search`, null, 2)}</code>
          </pre>
          <pre>
            <code>{JSON.stringify(octokitResponse.search, null, 2)}</code>
          </pre>
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  )
}

export default DataPage
