import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { Container, Divider, Heading, Text, Box, Spinner } from 'theme-ui'
import { graphql, Link } from 'gatsby'

interface IBumsPageProps {
  data: any
}

const BumsPage: FunctionComponent<IBumsPageProps> = ({ data }) => {
  const [res, setRes] = useState({ readme: null, error: null })
  const [isLoading, setIsLoading] = useState(true)
  const {
    name,
    owner: { login },
    description,
  } = data.bums

  useEffect(() => {
    fetch(`../../${process.env.GATSBY_API_URL}/github-readme`, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({ owner: login, repo: name }),
    })
      .then((res) => res.text())
      .then((res) => {
        setIsLoading(false)
        setRes(JSON.parse(res))
      })
  }, [])

  return (
    <Container>
      <Link to="/">Back</Link>
      <Heading as="h1" variant="styles.h1">
        {`name: ${name}`}
      </Heading>
      <Text>{`login: ${login}`}</Text>
      <Text>{description}</Text>
      <Divider />
      {isLoading ? (
        <Spinner />
      ) : res.error ? (
        <Heading as="h4" variant="styles.h4">
          {res.error}
        </Heading>
      ) : null}
      {res.readme ? (
        <Fragment>
          <Box dangerouslySetInnerHTML={{ __html: res.readme }} />
          <Divider />
          {/* <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre> */}
        </Fragment>
      ) : null}
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
