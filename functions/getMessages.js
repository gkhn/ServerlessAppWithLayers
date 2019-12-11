const AWS = require('aws-sdk');
const reverser = require('/opt/reverser.js');

const dynamodb = new AWS.DynamoDB();

module.exports.getMessages = (event, context, callback) => {
  dynamodb.scan({ TableName: process.env.DDB_TABLE_NAME }, (err, data) => {
      if(err){
        callback(null, {
          statusCode: 400,
          body: JSON.stringify({error: err.message}),
        });
      } else {
        const result = data.Items.map((item) => {
          return {
            id: item.id.S, 
            message: reverser.reverseString(item.message.S)
          };
        });
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(result),
        });
      }
  });
};