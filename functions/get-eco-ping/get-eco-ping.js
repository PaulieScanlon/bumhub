const axios = require('axios')

exports.handler = (event, context, callback) => {
  axios
    .get('https://ping-api.ecoping.earth/public/bumhub-netlify-app-ub9j08tn/stats?monthlyViews=1')
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
