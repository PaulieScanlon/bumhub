import React, { FunctionComponent, Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Prism from '@theme-ui/prism'

import * as themeUiComponents from 'theme-ui'

const components = {
  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: Prism,
  ...themeUiComponents,
}

const MdxLayout: FunctionComponent = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

export default MdxLayout
