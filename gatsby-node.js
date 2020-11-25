const { octokit } = require('./client')

// docs
// https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-repositories

const included_repos = [
  'Ski-Bums-16',
  'time-series-forecasting-project-BUMSA',
  'gh-BumsooKim',
  'bumsuk92.github.io',
  // 'bums',
  'bumsweb',
  'bumstagram',
  // 'bumskis',
  // 'ZwergBumsti',
  'bumsetak',
  'bumstaerk-com',
  'BumSack',
  'bumsyalao.me',
  'CouchBums',
  'bumsu_crawler_basics',
  'bumsoo.install',
  'furry-bumsquad',
  'BeachyBumsDesign',
  'dharma-bums-client',
  'bourbon-bums',
  'zillow-home-value-prediction-BUMSA',
  'distance-food-preferences-BUMSA',
  'NBA-Bums-vs-closers',
  'kaggle-porto-seguro-assignment-BUMSA',
  'simulation-optimization-BUMSA',
  'Beach-Bums-Website',
  'dharma-bums-backend',
]

module.exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const bums = await octokit.paginate(
    'GET /search/repositories',
    {
      q: 'bums in:name',
      per_page: 100,
    },
    (response, done) => {
      if (response.data.length === response.data.total_count) {
        done()
      }
      return response.data
    },
  )

  const owner = ({ data } = await octokit.request('GET /repos/{owner}/{repo}', {
    owner: 'pauliescanlon',
    repo: 'bah-bumhub',
  }))

  const filtered = bums.filter((a) => included_repos.includes(a.name)).concat([owner.data])

  if (filtered.length < 25) {
    throw new Error('Respositories length is less than 25')
  }

  filtered.forEach((item, index) => {
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
