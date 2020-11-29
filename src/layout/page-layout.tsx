import React, { Fragment, FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import { Header } from '../components/header'

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box>{children}</Box>
    </Fragment>
  )
}

export default PageLayout
