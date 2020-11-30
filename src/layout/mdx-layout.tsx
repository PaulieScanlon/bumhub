import React, { FunctionComponent, Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Prism from '@theme-ui/prism'

import * as themeUiComponents from 'theme-ui'

import { AdventCard } from '../components/advent-card'
import { LogoIcon } from '../components/logo-icon'
import { LogoBrand } from '../components/logo-brand'

const components = {
  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: Prism,
  ...themeUiComponents,
  AdventCard,
  LogoIcon,
  LogoBrand,
}

const MdxLayout: FunctionComponent = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

export default MdxLayout
