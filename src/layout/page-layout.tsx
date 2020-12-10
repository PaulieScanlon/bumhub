import React, { Fragment, FunctionComponent } from 'react'
import { Location } from '@reach/router'
import { ThemeProvider, Box } from 'theme-ui'

import { Header } from '../components/header'

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <>
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
