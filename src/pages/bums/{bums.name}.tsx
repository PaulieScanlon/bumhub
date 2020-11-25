import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { Container, Divider, Heading, Text, Box, Spinner } from 'theme-ui'
import { graphql, Link } from 'gatsby'

import { MrFetchy } from '../../components/mr-fetchy'

const END_POINT = '/github-readme'
interface IBumsPageProps {
  /** Gatsby page data */
  data: any
}

const BumsPage: FunctionComponent<IBumsPageProps> = ({ data }) => {
  const {
    name,
    owner: { login },
    description,
  } = data.bums

  return (
    <Container>
      <Box as="section" sx={{ mb: 5 }}>
        <Heading as="h1" variant="styles.h1">
          {`name: ${name}`}
        </Heading>
        <Text>{`login: ${login}`}</Text>
        <Text>{`description: ${description}`}</Text>
      </Box>
      <Divider />
      <MrFetchy endPoint={END_POINT} method="POST" body={{ owner: login, repo: name }}>
        {(readme) => {
          return <Box dangerouslySetInnerHTML={{ __html: readme.data }} />
        }}
      </MrFetchy>
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
