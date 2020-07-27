import { SQS } from 'aws-sdk';
const sqs = new SQS({ apiVersion: '2012-11-05' });

const queueUrl = process.env.QUEUE_REQUESTSQUEUE01

exports.handler = async (event) => {

  console.info(`Received event:  ${JSON.stringify(event)}`)

  var params = {
    MessageBody: "This is a test message.",
    QueueUrl: sqsUrl
  };

  const res = await sqs.sendMessage(params).promise()

  console.info(`Queue message sent: ${JSON.stringify(res)}`)

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
