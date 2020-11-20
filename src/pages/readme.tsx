import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container, Box, Spinner, Heading } from 'theme-ui'

const ReadmePage: FunctionComponent = () => {
  const [res, setRes] = useState({ readme: null })

  useEffect(() => {
    // This will probably go in the page template
    // owner.login =
    // const login = 'JakobBoedker'
    // const name = 'BumsOMeter'

    const login = 'PaulieScanlon'
    const name = 'bah-bumhub'

    fetch(`../../${process.env.GATSBY_API_URL}/github-readme`, {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({ owner: login, repo: name }),
    })
      .then((res) => res.text())
      .then((res) => {
        setRes(JSON.parse(res))
      })
  }, [])

  return (
    <Container>
      <Heading as="h1" variant="styles.h1">
        Readme
      </Heading>
      {res.readme ? <Box dangerouslySetInnerHTML={{ __html: res.readme }} /> : <Spinner />}
    </Container>
  )
}

export default ReadmePage
