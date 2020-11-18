const { Octokit } = require('@octokit/rest')

module.exports = {
  octokit: new Octokit({
    auth: process.env.OCTOKIT_PERSONAL_ACCESS_TOKEN,
    userAgent: 'Bah-BumHub',
  }),
}
