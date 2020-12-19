import { transparentize } from '@theme-ui/color'
import codeTheme from '@theme-ui/prism/presets/dracula.json'

export default {
  colors: {
    text: '#000000',
    background: '#f5f7fc',
    primary: '#e260d3',
    secondary: '#00cfff',
    darkRed: '#df3022',
    midRed: '#ff4a4a',
    green: '#66cc4f',
    teal: '#29d6c6',
    lightBlue: '#c2d8ff',
    grey: '#cccccc',
    midGrey: '#666666',
    darkGrey: '#373737',
    white: '#ffffff',
    blueGreen: '#102738',
    accent: '#fdc449',
    highlight: '#fbc7f5',
    shadowBlue: '#dbe6fb',
    shadowAccent: '#c29e50',
    shadowSecondary: '#009FD8',
    codeLineNumbers: '#5b68b3',
    codeBackground: '#282A36',
    oddTableRow: '#f7f7f7',
    gatsbyDefault: '#663399',
    gatsbyDark: '#3e2d59',
    gatsbyLight: '#9682c0',
    transparent: 'rgba(255, 255, 255, 0)',
    tone: [
      {
        light: '#ffB297',
        mid: '#f49262',
        dark: '#d87148',
      },
      {
        light: '#f9e7b2',
        mid: '#eece71',
        dark: '#e0a941',
      },
      {
        light: '#fdeeda',
        mid: '#eddcbf',
        dark: '#d1b792',
      },
      {
        light: '#fcd6bd',
        mid: '#e8b797',
        dark: '#cb9571',
      },
      {
        light: '#b48860',
        mid: '#93633b',
        dark: '#623f2d',
      },
      {
        light: '#75645b',
        mid: '#574840',
        dark: '#352621',
      },
    ],
  },
  fonts: {
    body: 'Ruda, system-ui',
    heading: 'Ruda, system-ui',
    monospace: 'Menlo, monospace',
  },
  fontSizes: ['0.9rem', '1rem', '1.25rem', '1.75rem', '2rem', '2.25rem', '2.5rem', '3rem'],
  fontWeights: {
    body: 500,
    bold: 700,
    heading: 900,
  },
  lineHeights: {
    heading: 1,
    body: 1.7,
    code: 1.8,
  },
  radii: [8, 48],
  shadows: {
    header: '0px 0px 40px -5px rgba(0,0,0,0.25)',
    surface: '0px 0px 30px -2px rgba(0,0,0,0.10)',
    focus: '0px 0px 1px 3px rgba(0,0,255,0.90)',
  },
  sizes: {
    container: 1340,
    full: '100vw',
    max: 1440,
  },
  space: [0, 4, 8, 16, 32, 64, 108],
  zIndices: {
    hero: 998,
    header: 999,
  },
  styles: {
    root: {
      backgroundColor: 'background',
      fontSize: 1,
      fontFamily: 'body',
      lineHeight: 'body',
      minWidth: '320px',
      a: {
        variant: 'styles.a',
      },
      // GitHub readme top level div
      '.markdown-body': {
        pre: {
          variant: 'styles.pre',
        },
      },
    },
    header: {
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      display: 'flex',
      mx: 'auto',
      py: 2,
      width: 'full',
      zIndex: 'header',
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
      lineHeight: 'body',
      m: 0,
      mb: 2,
      // inline code
      code: {
        borderRadius: 0,
        padding: 2,
        backgroundColor: 'shadowBlue',
        fontSize: '1.1rem',
      },
    },
    a: {
      borderRadius: 0,
      cursor: 'pointer',
      color: 'primary',
      transition: '0.2s linear box-shadow',
      wordBreak: 'break-all',
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
    pre: {
      borderRadius: 0,
      m: 0,
      p: 3,
      overflow: 'scroll',
      ...codeTheme,
    },
    hr: {
      my: 3,
      color: 'transparent',
    },
  },

  buttons: {
    default: {
      alignItems: 'center',
      cursor: 'pointer',
      borderRadius: 0,
      display: 'inline-flex',
      textTransform: 'capitalize',
      textDecoration: 'none',
      fontSize: [0, 1],
      fontWeight: 'bold',
      justifyContent: 'center',
      px: 3,
      py: 2,
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
    primary: {
      variant: 'buttons.default',

      fontWeight: 'bold',
    },
    secondary: {
      variant: 'buttons.default',
      backgroundColor: 'secondary',
      color: 'white',
    },
    accent: {
      variant: 'buttons.default',
      color: 'text',
      fontWeight: 'heading',
      backgroundColor: 'accent',
    },
    ghost: {
      variant: 'buttons.default',
      color: 'secondary',
      backgroundColor: 'transparent',
    },
    icon: {
      cursor: 'pointer',
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
    close: {
      cursor: 'pointer',
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
    menu: {
      cursor: 'pointer',
    },
  },

  links: {
    nav: {
      borderRadius: 0,
      cursor: 'pointer',
      color: 'text',
      fontSize: 1,
      fontWeight: 'bold',
      p: 2,
      transition: '.2s linear background-color',
      textDecoration: 'none',
      ':hover': {
        backgroundColor: transparentize('text', 0.95),
      },
    },
  },
  forms: {
    input: {
      backgroundColor: 'white',
      borderColor: 'transparent',
      borderRadius: 0,
      px: 3,
      py: 2,
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
    select: {
      backgroundColor: 'white',
      borderColor: 'transparent',
      borderRadius: 0,
      cursor: 'pointer',
      px: 3,
      py: 2,
      ':focus': {
        outline: 'none',
        boxShadow: 'focus',
      },
    },
    label: {
      cursor: 'pointer',
      borderRadius: 0,
      textTransform: 'capitalize',
      transition: '.2s linear background-color',
      ':hover': {
        backgroundColor: transparentize('background', 0.8),
      },
    },
  },

  cards: {
    primary: {
      borderRadius: 0,
      boxShadow: 'surface',
      padding: 3,
    },
  },
  layout: {
    container: {
      px: [3, 4],
    },
  },
}
