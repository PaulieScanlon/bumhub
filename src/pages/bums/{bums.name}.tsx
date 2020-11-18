import React, { FunctionComponent, useEffect, useState } from 'react'
import { Container, Divider, Heading, Text, Box, Spinner } from 'theme-ui'
import { graphql } from 'gatsby'

interface IBumsPageProps {
  data: any
}

const BumsPage: FunctionComponent<IBumsPageProps> = ({ data }) => {
  const [readmeResponse, setReadmeResponse] = useState({ readme: null })

  const {
    name,
    description,
    owner: { login },
    repo,
  } = data.bums

  useEffect(() => {
    fetch(`${process.env.GATSBY_API_URL}/github-readme`, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({ owner: login, repo: repo }),
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
      <Heading as="h1" variant="styles.h1">
        {name}
      </Heading>
      <Text>{description}</Text>
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
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </Container>
  )
}

export default BumsPage

// example query
// {
//     bums(id: {eq: "b5129c3e-7849-5109-a322-69e768d77a2f"}) {
//       name
//       owner {
//         login
//       }
//     }
//   }

export const query = graphql`
  query($id: String) {
    bums(id: { eq: $id }) {
      name
      owner {
        login
      }
      description
    }
  }
`
