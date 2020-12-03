const { octokit } = require('./client')

// docs
// https://docs.github.com/en/free-pro-team@latest/rest/reference/search#search-repositories

const included_repos = [
  'https://github.com/amwall/Ski-Bums-16',
  'https://github.com/yemyatthu1990/Bum-Meme-Maker',
  'https://github.com/alinaselega/BUMHMM',
  // 'https://github.com/Aspirisha/dumphunt',
  // 'https://github.com/meccaLeccaHi/snowblog',
  // 'https://github.com/YurkaninRyan/kungPOW',
  // 'https://github.com/blackshirt/dompetku',
  'https://github.com/gh-BumsooKim/gh-BumsooKim',
  'https://github.com/bumsuk92/bumsuk92.github.io',
  // 'https://github.com/meccaLeccaHi/snow_scraper',
  'https://github.com/megamegax/bumshakalaka',
  'https://github.com/skwidge/bumsink',
  'https://github.com/Morpher/BeetleBum',
  // 'https://github.com/kellyfauxland/bumba_bot',
  'https://github.com/BumsKim/bumsweb',
  'https://github.com/clinamen16/bumstagram',
  // 'https://github.com/sjohnston92/bumskis',
  // 'https://github.com/yosuahohoho/bumsetak',
  'https://github.com/zuik/bumic-web',
  // 'https://github.com/bumstaerk/bumstaerk-com',
  // 'https://github.com/o89/nitro',
  // 'https://github.com/abumphy/vue-bum-admin',
  // 'https://github.com/larserbach/Illustrator-Scripts',
  'https://github.com/harikrish00/CouchBums',
  // 'https://github.com/Sparkmasterflex/bum_haus',
  'https://github.com/meliketoy/bumsoo.install',
  // 'https://github.com/btwg/furry-bumsquad',
  'https://github.com/helliOh/bumsu_crawler_basics',
  'https://github.com/yousaiditchewie/bourbon-bums',
  'https://github.com/klrkdekira/bums-guide',
  'https://github.com/JimHotchkiss/dharma-bums-client',
  'https://github.com/Door43/d43-bum',
  // 'https://github.com/foo-dogsquared/one-for-all',
  // 'https://github.com/rachelkopecky/jack-fire-brazil-BUMSA',
  'https://github.com/Jeffery-777/NBA-Bums-vs-closers',
  // 'https://github.com/Dkopecky/Github_Test_BUMSA',
  // 'https://github.com/AaronMacken/Beach-Bums-Website',
  'https://github.com/JimHotchkiss/dharma-bums-backend',
  // 'https://github.com/HansestadtPanda/PeterBumsflocke-dark-theme-ui',
  // 'https://github.com/jawigs/lucky-bum',
  // 'https://github.com/gonini/https-github.com-bumsgoh-ProjectABRD',
  // 'https://github.com/MauricioAlgalan/PovRay-Bump-maps',
  // 'https://github.com/fscbest/Calculator-app',
  // 'https://github.com/mrwhiterk/couch_bum_api',
  // 'https://github.com/MattDeDuck/TheLegendOfBumbo',
  // 'https://github.com/Kellermaenn/DaBumstDerDockerDichVomHocker',
  'https://github.com/ndri/bum-irc-bot',
  // 'https://github.com/RachelHamiltonWorks/giphtionary-beta',
  // 'https://github.com/freddyheppell/insult',
  // 'https://github.com/jerbmega/spiderbutt',
  // 'https://github.com/the8bitbum/TTAOT8BB',
  // 'https://github.com/scrum-bums/donation_boi_web',
  'https://github.com/Liques/RobotBum',
  // 'https://github.com/BooeySays/Tracker-Smokes_Mike_Bummed',
  // 'https://github.com/rarar/Vibes',
  // 'https://github.com/fluffynuts/jiggle_jenkins',
  // 'https://github.com/gondsm/bum',
  // 'https://github.com/hoshin/rezume',
  'https://github.com/marangiop/diff_BUM_HMM',
  // 'https://github.com/Pengeszikra/Spider-Paint',
  // 'https://github.com/michaelansel/waefers-bum',
  // 'https://github.com/Spiffn/caps-finder-client',
  'https://github.com/idalmys/plum-bum',
  // 'https://github.com/cd-Roid/CleverFit-Studiospace',
  'https://github.com/PaulieScanlon/bumhub',
]

const excluded_repos = [
  'https://github.com/kitakula/Hips-and-bums-penis-enlargement-cream-27810950180',
  'https://github.com/cyrlbuura/dd',
  'https://github.com/25011966V/iptv',
  'https://github.com/Torvicbaroli/dsa3rrr',
  'https://github.com/ssgerson/lista.m3u',
  'https://github.com/GersonLima2006/Lista-',
  'https://github.com/blusteel21/Shit-java',
  'https://github.com/the8weekbooty/the8weekbooty---Why-is-having-a-great-booty-actually-good-for-you-',
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

  console.log('')
  console.log(adventFiltered.map((a, index) => `${index + 1} | ${a.name}`))
  console.log('')
  console.log('adventFiltered: ', adventFiltered.length)
  console.log('')

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
