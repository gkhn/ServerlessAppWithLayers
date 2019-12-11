const AWS = require('aws-sdk');
const uuid = require('uuid');
const reverser = require('/opt/reverser.js');
const dynamodb = new AWS.DynamoDB();

module.exports.putMessage = (event, context, callback) => {
  let message = '';
  if(event.body){
    message = JSON.parse(event.body).message;
  } else {
    message = event.message;
  }
  dynamodb.putItem({
    TableName: process.env.DDB_TABLE_NAME, 
    Item: {
      id: {
        S: uuid.v4()
      },
      message: {
        S: reverser.reverseString(message)
      }
    }
  }, (err, data) => {
    if (err) {
        callback(null, {
          statusCode: 400,
          body: JSON.stringify({error: err}),
        });
    } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({status: 'success'}),
        });
    }
  });
};