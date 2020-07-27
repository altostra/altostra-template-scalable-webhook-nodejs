const AWS = require('aws-sdk')
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

const queueUrl = process.env.QUEUE_REQUESTSQUEUE01

exports.handler = async (event) => {

  console.info(`Received event:  ${JSON.stringify(event)}`)

  const msgBody = event.body

  var params = {
    MessageBody: msgBody,
    QueueUrl: queueUrl
  };

  try {
    const res = await sqs.sendMessage(params).promise()
    console.info(`Queue message sent: ${JSON.stringify(res)}`)

  } catch (e) {
    console.error(`Failed to send message to queue`, e)
  }

  return {
    statusCode: 200
  }

};
