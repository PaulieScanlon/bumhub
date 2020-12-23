import React, { FunctionComponent } from 'react'
import { Location } from '@reach/router'
import { Box } from 'theme-ui'

import { Seo } from '../components/seo/seo'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

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
      <Footer />
    </>
  )
}

export default PageLayout
