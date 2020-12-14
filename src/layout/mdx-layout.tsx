import React, { FunctionComponent, Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Prism from '@theme-ui/prism'

import * as themeUiComponents from 'theme-ui'

import { AdventCard } from '../components/advent-card'
import { LogoIcon } from '../components/logo-icon'
import { LogoBrand } from '../components/logo-brand'
import { Starburst } from '../components/starburst'
import { PantsDown } from '../components/pants-down'
import { PantsUp } from '../components/pants-up'
import { Mistletoe } from '../components/mistletoe'
import { Reef } from '../components/reef'
import { GitHubStat } from '../components/github-stat'
import { FartBum } from '../components/fart-bum'
import { LaptopBum } from '../components/laptop-bum'
import { EcoStat } from '../components/eco-stat'
import { ThemeUIBum } from '../components/theme-ui-bum'
import { GlassesBum } from '../components/glasses-bum'
import { Dropdown } from '../components/dropdown'
import { BumToneTester } from '../components/bum-tone-tester'

const components = {
  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: Prism,
  ...themeUiComponents,
  AdventCard,
  LogoIcon,
  LogoBrand,
  Starburst,
  PantsDown,
  PantsUp,
  Mistletoe,
  Reef,
  GitHubStat,
  FartBum,
  LaptopBum,
  EcoStat,
  ThemeUIBum,
  GlassesBum,
  Dropdown,
  BumToneTester,
}

const MdxLayout: FunctionComponent = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

export default MdxLayout
