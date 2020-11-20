const { octokit } = require('../../client')

exports.handler = async (event, context, callback) => {
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

  callback(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({
      bums: bums,
    }),
  })
}
