const { octokit } = require('../clients')

// docs
// https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#get-a-repository-readme
// https://developer.github.com/v3/repos/contents/

exports.handler = async (event, context, callback) => {
  const { owner, repo } = JSON.parse(event.body)

  const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: `${owner}`,
    repo: `${repo}`,
    path: 'README.md',
    mediaType: {
      format: 'html',
    },
  })

  callback(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({ readme: { data } }),
  })
}
