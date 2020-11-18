const { format } = require('date-fns')

exports.handler = async (event, context, callback) => {
  callback(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({
      date: {
        formatted_date: format(new Date(), 'dd-MM-yyy'),
        day: format(new Date(), 'dd'),
        month: format(new Date(), 'MMMMMMM'),
        year: format(new Date(), 'yyy'),
      },
    }),
  })
}
