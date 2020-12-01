const { format } = require('date-fns')

exports.handler = async (event, context, callback) => {
  callback(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({
      data: {
        formatted_date: format(new Date(), 'dd-MM-yyy'),
        day: format(new Date(), 'd'),
        month: format(new Date(), 'M'),
        year: format(new Date(), 'yyy'),
        limited_month: '12',
      },
    }),
  })
}
