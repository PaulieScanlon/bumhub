import React, { Fragment, FunctionComponent } from 'react'
import { Container, Divider, Heading, Text, Box, Link } from 'theme-ui'
import { graphql } from 'gatsby'

import { MrFetchy } from '../../components/mr-fetchy'

const END_POINT = 'github-readme'
interface IBumsPageProps {
  /** Gatsby page data */
  data: any
}

const BumsPage: FunctionComponent<IBumsPageProps> = ({ data }) => {
  const {
    name,
    owner: { login },
    description,
    html_url,
    language,
    stargazers_count,
    size,
  } = data.adventBums

  return (
    <>
      <Container>
        <Box>
          <Heading as="h1" variant="styles.h1">
            {name}
          </Heading>
          <Text>{`user: @${login}`}</Text>
          <Text>{`description: ${description}`}</Text>
          <Text>{`language: ${language}`}</Text>
          <Text>{`stargazers: ${stargazers_count}`}</Text>
          <Text>{`size: ${size}`}</Text>
          <Text>
            url:{' '}
            <Link href={html_url} target="_blank">
              {html_url}
            </Link>
          </Text>
        </Box>
        <Divider />
        <MrFetchy endPoint={END_POINT} method="POST" body={{ owner: login, repo: name }}>
          {(readme) => {
            return <Box dangerouslySetInnerHTML={{ __html: readme.data }} />
          }}
        </MrFetchy>
      </Container>
    </>
  )
}

export default BumsPage

// example query
// {
//   bums(id: {eq: "b5129c3e-7849-5109-a322-69e768d77a2f"}) {
//     name
//     owner {
//       login
//     }
//     description
//     html_url
//     language
//     stargazers_count
//     size
//   }
// }

export const query = graphql`
  query($id: String) {
    adventBums(id: { eq: $id }) {
      name
      owner {
        login
      }
      description
      html_url
      language
      stargazers_count
      size
    }
  }
`
