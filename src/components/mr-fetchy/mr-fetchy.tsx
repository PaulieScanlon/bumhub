import React, { FunctionComponent, useEffect, useState } from 'react'
import { Flex, Box, Text, Spinner } from 'theme-ui'

interface IMrFetchyProps {
  /** The Netlify function to hit */
  endPoint: string
  /** POST body */
  body?: any
  /** Fetch method */
  method?: string
  /** React children with response arg */
  children: (res: any) => void
}

export const MrFetchy: FunctionComponent<IMrFetchyProps> = ({ endPoint, method = 'GET', body, children }) => {
  const [response, setResponse] = useState(null)
  const [isMounted, setIsMounted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // console.log('')
  // console.log('endPoint: ', endPoint)
  // console.log('method: ', method)
  // console.log('body: ', body)
  // console.log(`${process.cwd()}${process.env.GATSBY_API_URL}/${endPoint}`)
  // console.log('')

  useEffect(() => {
    fetch(`${process.cwd()}${process.env.GATSBY_API_URL}/${endPoint}`, {
      mode: 'no-cors',
      method: method,
      body: body ? JSON.stringify(body) : null,
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Oh bums! There's been a server error.")
        }
        return response
      })
      .then((response) => response.json())
      .then((response) => {
        setIsLoading(false)
        isMounted ? setResponse(response) : null
      })
      .catch((error) => {
        setIsLoading(false)
        setHasError(error.toString())
      })
  }, [])

  useEffect(() => {
    return () => {
      setIsMounted(false)
    }
  })

  return (
    <Box>
      {hasError ? <Text sx={{ textAlign: 'center', color: 'darkRed' }}>{hasError}</Text> : null}
      {isLoading ? (
        <Flex sx={{ justifyContent: 'center' }}>
          <Spinner />
        </Flex>
      ) : null}
      {!hasError && !isLoading && response ? <>{children(response)}</> : null}
    </Box>
  )
}
