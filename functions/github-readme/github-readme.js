const { octokit } = require('../../client')

// docs
// https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#get-a-repository-readme
// https://developer.github.com/v3/repos/contents/

exports.handler = (event, context, callback) => {
  const { owner, repo } = JSON.parse(event.body)

  return octokit
    .request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: `${owner}`,
      repo: `${repo}`,
      path: 'README.md',
      mediaType: {
        format: 'html',
      },
    })
    .then((response) => {
      return callback(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify({
          data: response.data,
        }),
      })
    })
    .catch(() => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          data: null,
        }),
      })
    })
}
