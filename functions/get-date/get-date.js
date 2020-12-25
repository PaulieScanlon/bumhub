const { format } = require('date-fns')

exports.handler = (event, context, callback) => {
  callback(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({
      data: {
        // formatted_date: format(new Date(), 'dd-MM-yyy'),
        // day: format(new Date(), 'd'),
        // month: format(new Date(), 'M'),
        // year: format(new Date(), 'yyy'),
        // limited_month: '12',
        // Christmas has been and gone, just always return December 25 so everything still works
        formatted_date: '25-12-2020',
        day: '25',
        month: '12',
        year: '2020',
        limited_month: '12',
      },
    }),
  })
}
