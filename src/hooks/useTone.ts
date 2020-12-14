import theme from '../gatsby-plugin-theme-ui'
const { skin } = theme.colors

export const useTone = () => Math.round(Math.floor(Math.random() * Math.floor(skin.length)))
