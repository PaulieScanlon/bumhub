const axios = require('axios')

exports.handler = (event, context, callback) => {
  axios
    .get(process.env.ECO_PING_STATS_ENDPOINT)
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
