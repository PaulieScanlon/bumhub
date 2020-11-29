import React from 'react'
import PageLayout from './src/layout/page-layout'

export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>
}
