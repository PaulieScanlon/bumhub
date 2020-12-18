import theme from '../gatsby-plugin-theme-ui'
const {
  colors: { tone },
} = theme

export const useTone = () => Math.round(Math.floor(Math.random() * Math.floor(tone.length)))
