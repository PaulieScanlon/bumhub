const { Octokit } = require('@octokit/rest')
const { paginateRest } = require('@octokit/plugin-paginate-rest')
const MyOctokit = Octokit.plugin(paginateRest)

module.exports = {
  octokit: new MyOctokit({
    auth: process.env.OCTOKIT_PERSONAL_ACCESS_TOKEN,
    userAgent: 'Bah-BumHub',
  }),
}
