import codeTheme from '@theme-ui/prism/presets/github.json'

const commonFocus = {
  outlineStyle: 'solid',
  outlineWidth: '4px',
}

export default {
  colors: {
    text: '#333333',
    background: '#ffffff',
    primary: '#FF5BA3',
    secondary: '#1da0f2',
    grey: '#f7f7f7',
    accent: '#fdc449',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: ['0.75rem', '1rem', '1.25rem', '1.5rem', '2.125rem', '3rem', '3.5rem', '6rem'],
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
  shadows: ['0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'],
  sizes: {
    container: 940,
  },
  styles: {
    root: {
      fontSize: 1,
      fontFamily: 'body',
      lineHeight: 'body',
    },
    h1: {
      fontSize: 7,
      m: 0,
    },
    h2: {
      fontSize: 6,
      m: 0,
    },
    h3: {
      fontSize: 5,
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
    },
    pre: {
      m: 0,
      p: 3,
      whiteSpace: 'pre-wrap',
      ...codeTheme,
    },
    hr: {
      color: 'grey',
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
  text: {
    small: {
      fontSize: 0,
      color: 'grey',
    },
  },
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
