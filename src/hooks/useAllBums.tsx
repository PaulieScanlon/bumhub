import { useStaticQuery, graphql } from 'gatsby'

const excludedKeys = ['full_name', 'created_at', 'description']

const friendlyNames = {
  ['name']: 'repository name',
  ['stargazers_count']: 'stargazers',
  ['owner']: 'user name',
}

export const useAllBums = () => {
  const query = useStaticQuery(graphql`
    query bumsQuery {
      allBums {
        nodes {
          name
          full_name
          owner {
            login
            avatar_url
          }
          description
          html_url
          created_at
          stargazers_count
          language
          forks
          watchers
          size
        }
      }
    }
  `)

  const keys = Object.keys(query.allBums.nodes[0])
    .map((header) => {
      return {
        key: header,
        friendly: friendlyNames[header] ? friendlyNames[header] : header,
      }
    })
    .filter((item) => !excludedKeys.includes(item.key))

  const data = query.allBums.nodes.map((body) => {
    const filtered = Object.keys(body)
      .filter((item) => !excludedKeys.includes(item))
      .reduce((items, item) => {
        items[item] = {
          value: item === 'owner' ? body[item].login : body[item],
          friendly: friendlyNames[item] ? friendlyNames[item] : item,
        }
        return items
      }, {})

    return {
      ...filtered,
      language: {
        value: body.language ? body.language : '🤷‍♂️',
        friendly: 'language',
      },
    }
  })

  return {
    keys,
    data,
  }
}
