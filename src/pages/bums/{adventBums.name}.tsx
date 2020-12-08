import React, { FunctionComponent } from 'react'
import { Container, Divider, Box, Text } from 'theme-ui'
import { graphql } from 'gatsby'

import { MrFetchy } from '../../components/mr-fetchy'
import { BumHero } from '../../components/bum-hero/bum-hero'

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
    license,
    open_issues_count,
    watchers,
  } = data.adventBums

  return (
    <>
      <BumHero
        name={name}
        login={login}
        description={description}
        html_url={html_url}
        language={language}
        stargazers_count={stargazers_count}
        size={size}
        license={license}
        open_issues_count={open_issues_count}
        watchers={watchers}
      />
      <Divider />
      <Container>
        <Box
          sx={{
            borderRadius: 0,
            boxShadow: 'surface',
            px: 4,
            py: [3, 5],
            mx: [0, 4],
            mt: [-2, -5],
          }}
        >
          <MrFetchy endPoint={END_POINT} method="POST" body={{ owner: login, repo: name }}>
            {(readme) => {
              return (
                <Box>
                  <Text sx={{ fontSize: 0, fontWeight: 'heading' }}>README.md</Text>
                  <Box dangerouslySetInnerHTML={{ __html: readme.data }} />
                </Box>
              )
            }}
          </MrFetchy>
        </Box>
      </Container>
      <Divider />
    </>
  )
}

export default BumsPage

// example query
// {
//   bums(id: {eq: "b5129c3e-7849-5109-a322-69e768d77a2f"}) {
//   name
//   owner {
//     login
//   }
//   description
//   language
//   html_url
//   stargazers_count
//   size
//   license {
//     name
//   }
//   open_issues_count
//   watchers
// }
// }

export const query = graphql`
  query($id: String) {
    adventBums(id: { eq: $id }) {
      name
      owner {
        login
      }
      description
      language
      html_url
      stargazers_count
      size
      license {
        name
      }
      open_issues_count
      watchers
    }
  }
`
