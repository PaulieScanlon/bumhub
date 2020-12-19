import { useStaticQuery, graphql } from 'gatsby'

export const useMeta = () => {
  const query = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          description
          name
          keywords
          siteUrl
          ogImage
          lang
          type
        }
      }
    }
  `)
  return query
}
