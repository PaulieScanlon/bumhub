import React, { FunctionComponent } from 'react'
import { Location } from '@reach/router'
import { Box } from 'theme-ui'

import { Header } from '../components/header'
import { Seo } from '../components/seo/seo'

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <Location>
        {({ location }) => {
          const { pathname } = location
          const isIndex = pathname === '/'
          return (
            <Box
              sx={{
                mt: isIndex ? 0 : 6,
              }}
            >
              {children}
            </Box>
          )
        }}
      </Location>
    </>
  )
}

export default PageLayout
