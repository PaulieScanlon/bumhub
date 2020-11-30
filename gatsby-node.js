const { octokit } = require('./client')

// docs
// https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-repositories

const included_repos = [
  'https://github.com/Morpher/BeetleBum',
  'https://github.com/meccaLeccaHi/snowblog',
  'https://github.com/yousaiditchewie/bourbon-bums',
  'https://github.com/YurkaninRyan/kungPOW',
  'https://github.com/davidlepe/bumswipes',
  'https://github.com/clinamen16/bumstagram',
  'https://github.com/Exrasxed/Dino',
  'https://github.com/sagana/Bummer',
  'https://github.com/yemyatthu1990/Bum-Meme-Maker',
  'https://github.com/harikrish00/CouchBums',
  'https://github.com/Sparkmasterflex/bum_haus',
  'https://github.com/idalmys/plum-bum',
  'https://github.com/jtvandyk/data-bum',
  'https://github.com/aayushkd/crossbody-hobo-bags',
  'https://github.com/StefanescuCristian/hammerhead',
  'https://github.com/frederikja163/Bum-game',
  'https://github.com/Liques/RobotBum',
  'https://github.com/alferguet/BumBotApp',
  'https://github.com/jerbmega/spiderbutt',
  'https://github.com/jawigs/lucky-bum',
  'https://github.com/tacong56/bumShopSolution',
  'https://github.com/ejayjock/turtle-bum',
  'https://github.com/kawikadkekahuna/BumCam',
  'https://github.com/Berkayhub/tizzy-bot',
  'https://github.com/PaulieScanlon/bumhub',
]

const excluded_repos = [
  'https://github.com/kitakula/Hips-and-bums-penis-enlargement-cream-27810950180',
  'https://github.com/cyrlbuura/dd',
  'https://github.com/25011966V/iptv',
  'https://github.com/Torvicbaroli/dsa3rrr',
  'https://github.com/ssgerson/lista.m3u',
  'https://github.com/GersonLima2006/Lista-',
]

module.exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const bums = await octokit.paginate(
    'GET /search/repositories',
    {
      q: 'bums in:name,description',
      per_page: 100,
    },
    (response, done) => {
      if (response.data.length === response.data.total_count) {
        done()
      }
      return response.data
    },
  )

  const adventFiltered = bums
    .filter((a) => included_repos.includes(a.html_url))
    .sort((a, b) => included_repos.indexOf(a.html_url) - included_repos.indexOf(b.html_url))

  if (adventFiltered.length < 25) {
    throw new Error('Respositories length is less than 25')
  }

  adventFiltered.forEach((item, index) => {
    const { id } = item

    let nodeMeta = {
      id: createNodeId(`advent-bum-id-${id}`),
      parent: null,
      children: [],
      internal: {
        type: `adventBums`,
        mediaType: `text/html`,
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    }
    const node = Object.assign({}, item, nodeMeta)
    createNode(node)
  })

  const searchFiltered = bums.filter((a) => !excluded_repos.includes(a.html_url))

  searchFiltered.forEach((item, index) => {
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
