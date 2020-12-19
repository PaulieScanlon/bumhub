import React from 'react'
import PageLayout from './src/layout/page-layout'

import theme from './src/gatsby-plugin-theme-ui'
const { space } = theme

export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>
}

export const onRouteUpdate = ({ location }) => {
  const anchor = document.querySelectorAll(`a[href="${location.hash}"]`)[0]
  window.scrollTo({
    top: anchor ? anchor.offsetTop - space[6] : null,
    behavior: 'smooth',
  })
}
