const { octokit } = require('../../client')

exports.handler = async (event, context, callback) => {
  const bums = await octokit.paginate(
    'GET /search/repositories',
    {
      q: 'bums in:name',
      per_page: 100,
    },
    (response, done) => {
      if (response.status !== 200) {
        return callback(null, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          statusCode: 400,
          body: JSON.stringify({
            data: null,
          }),
        })
      }

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
      data: bums,
    }),
  })
}
