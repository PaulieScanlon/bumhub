import React, { FunctionComponent } from 'react'
import { Box, Container } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'

const IndexPage: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query BumsQuery {
      allBums {
        nodes {
          id
          name
        }
      }
    }
  `)

  return (
    <Container>
      <Box as="ul">
        {data.allBums.nodes.map((node, index) => {
          const { name } = node

          return (
            <Box key={index} as="li">
              <Link to={`/bums/${name.toLowerCase()}`}>{`${index + 1}-${name}`}</Link>
            </Box>
          )
        })}
      </Box>
    </Container>
  )
}

export default IndexPage
