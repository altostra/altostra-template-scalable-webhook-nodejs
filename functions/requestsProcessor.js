const util = require('util')

module.exports.handler = async (event, context) => {
  console.log(`Received SQS event: ${util.inspect(event)}`)
}