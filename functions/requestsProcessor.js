const util = require('util')
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient();

const REQ_TABLE = process.env.TABLE_REQUESTSTABLE01

async function writeMessageToTable(msg) {

  const params = {
    TableName: REQ_TABLE,
    Item: {
      'id': msg.emailId,
      'status': msg.eventType,
      'updated_at': `${new Date().toISOString()}`
    }
  };

  try {
    const data = await docClient.put(params).promise();
    console.log("Added item:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
  }

}

module.exports.handler = async (event, context) => {
  console.log(`Received SQS event: ${util.inspect(event)}`)

  const msg = JSON.parse(event.Records[0].body)
  await writeMessageToTable(msg)
}