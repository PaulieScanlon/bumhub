const { Octokit } = require('@octokit/rest')
const fetch = require('isomorphic-fetch')

module.exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  console.log('onPreBuild: ', process.env.GATSBY_OCTOKIT_PERSONAL_ACCESS_TOKEN)

  const octokit = new Octokit({
    auth: process.env.OCTOKIT_PERSONAL_ACCESS_TOKEN,
    userAgent: 'Bah-BumHub',
  })

  const { data } = await octokit.request('GET /search/repositories', {
    q: 'bums in:name,description',
  })

  data.items.forEach((item, index) => {
    const { id } = item

    let nodeMeta = {
      id: createNodeId(`bum-id-${id}`),
      parent: null,
      children: [],
      internal: {
        type: `bums`,
        mediaType: `text/html`,
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    }
    const node = Object.assign({}, item, nodeMeta)
    createNode(node)
  })
}
