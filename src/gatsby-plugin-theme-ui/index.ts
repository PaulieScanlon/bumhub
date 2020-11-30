import { transparentize } from '@theme-ui/color'
import codeTheme from '@theme-ui/prism/presets/github.json'

export const commonFocus = {
  outlineStyle: 'solid',
  outlineWidth: '2px',
}

export default {
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#e260d3',
    secondary: '#00cfff',
    lightGrey: '#f7f7f7',
    grey: '#cccccc',
    accent: '#fdc449',
    highlight: '#fceffb',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: ['0.75rem', '1rem', '1.5rem', '1.75rem', '2rem', '2.25rem', '2.5rem', '3rem'],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    heading: 1,
    body: 1.5,
    code: 1.8,
  },
  shadows: ['0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.12)'],
  sizes: {
    header: 64,
    hero: 600,
    container: 940,
    full: '100vw',
  },
  zIndices: {
    header: 999,
    hero: 998,
  },
  styles: {
    root: {
      backgroundColor: 'background',
      fontSize: 1,
      fontFamily: 'body',
      lineHeight: 'body',
      minWidth: '320px',
      a: {
        ':focus': {
          ...commonFocus,
          outlineColor: 'text',
        },
      },
    },
    h1: {
      fontSize: [4, 5, 7],
      m: 0,
    },
    h2: {
      fontSize: [4, 6],
      m: 0,
    },
    h3: {
      fontSize: [4, 5],
      m: 0,
    },
    h4: {
      fontSize: 4,
      m: 0,
    },
    h5: {
      fontSize: 3,
      m: 0,
    },
    h6: {
      fontSize: 2,
      m: 0,
    },
    p: {
      fontSize: 1,
      m: 0,
      mb: 2,
    },
    a: {
      color: 'primary',
      ':focus': {
        ...commonFocus,
        outlineColor: 'accent',
      },
    },
    pre: {
      m: 0,
      p: 3,
      whiteSpace: 'pre-wrap',
      ...codeTheme,
    },
    hr: {
      my: 3,
      color: 'transparent',
    },
  },
  buttons: {
    default: {
      textTransform: 'capitalize',
      ':focus': {
        ...commonFocus,
        outlineColor: 'accent',
      },
    },
    primary: {
      variant: 'buttons.default',
    },
    secondary: {
      variant: 'buttons.default',
      backgroundColor: 'secondary',
    },
  },
  links: {
    nav: {
      color: 'text',
      textDecoration: 'none',
      fontWeight: 'bold',
      p: 2,
      borderRadius: 4,
      transition: '.2s linear background-color',
      ':hover': {
        backgroundColor: transparentize('text', 0.95),
      },
      ':focus': {
        ...commonFocus,
        outlineColor: 'text',
      },
    },
  },
  text: {},
  cards: {
    primary: {
      boxShadow: 0,
      padding: 3,
    },
  },
  layout: {
    container: {
      px: [3, 4],
    },
  },
}
