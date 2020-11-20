import React, { FunctionComponent } from 'react'
import { Container, Flex, Grid, Divider, Heading, Text, Card } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'

const IndexPage: FunctionComponent = () => {
  // const data = useStaticQuery(graphql`
  //   query BumsQuery {
  //     allBums {
  //       nodes {
  //         id
  //         name
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query BumsQuery {
      allSitePage(filter: { path: { regex: "//bums//" } }) {
        nodes {
          context {
            name
          }
          path
        }
      }
      allBums {
        nodes {
          name
          full_name
          owner {
            login
          }
          description
          created_at
          stargazers_count
          language
        }
      }
    }
  `)

  return (
    <Container>
      <Heading as="h1" variant="styles.h1">
        BumHub
      </Heading>
      <Text>A list of GitHub repositories with "Bum" in the name</Text>
      <Divider />
      <Grid
        sx={{
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          a: {
            color: 'text',
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
          },
        }}
      >
        {data.allSitePage.nodes.map((node, index) => {
          const { path } = node

          const {
            name,
            description,
            owner: { login },
            stargazers_count,
            created_at,
          } = data.allBums.nodes[index]

          return (
            <Link key={index} to={path}>
              <Card sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: '200px' }}>
                <Flex
                  sx={{
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Flex sx={{ justifyContent: 'space-between' }}>
                    <Text>{`📅 ${index + 1}`}</Text>
                    <Text>{`⭐ ${stargazers_count}`}</Text>
                  </Flex>
                  <Flex sx={{ justifyContent: 'space-between' }}>
                    <Text>{`😶 ${login}`}</Text>
                    <Text>{`🕑 ${created_at}`}</Text>
                  </Flex>
                  <Heading as="h2" variant="styles.h2">
                    {name}
                  </Heading>
                  <Text>{description}</Text>
                </Flex>
                <Flex sx={{ justifyContent: 'flex-end' }}>
                  <Text sx={{ color: 'primary' }}>{`More details ➡️`}</Text>
                </Flex>
              </Card>
            </Link>
          )
        })}
      </Grid>
      {/* <Box as="ul">
        {data.allSitePage.nodes.map((node, index) => {
          const {
            path,
            context: { name },
          } = node

          return (
            <Box key={index} as="li">
              <Link to={path}>{`${index + 1}-${name}`}</Link>
            </Box>
          )
        })}
      </Box> */}
    </Container>
  )
}

export default IndexPage
