import React, { FunctionComponent, useState, useEffect } from 'react'
import { Container, Heading, Spinner } from 'theme-ui'

const DatePage: FunctionComponent = () => {
  const [res, setRes] = useState({ date: null })

  useEffect(() => {
    console.log('useEffect')
    fetch(`../${process.env.GATSBY_API_URL}/get-date`, {
      mode: 'no-cors',
      method: 'GET',
    })
      .then((res) => res.text())
      .then((res) => {
        setRes(JSON.parse(res))
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <Container>
      {res.date ? (
        <>
          <Heading as="h1" variant="styles.h1">
            Date
          </Heading>
          <pre>
            <code>{JSON.stringify(res.date, null, 2)}</code>
          </pre>
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  )
}

export default DatePage
