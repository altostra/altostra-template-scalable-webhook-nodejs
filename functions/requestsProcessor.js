const util = require('util')
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient();

const REQ_TABLE = process.env.TABLE_REQUESTSTABLE01

async function updateUserProductsByEmailId(emailId) {

  console.info(`Updating user products for email: ${emailId}`)
  //Update all the user-specific products as seen
  return

}

async function logMessageToTable(msg) {

  console.log(`Logging email event to DynamoDB`)

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
    console.log("Added item");
  } catch (err) {
    console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
  }

}

module.exports.handler = async (event, context) => {
  console.log(`Received SQS event: ${util.inspect(event)}`)

  const msg = JSON.parse(event.Records[0].body)
  await updateUserProductsByEmailId(msg.emailId)
  await logMessageToTable(msg)

}