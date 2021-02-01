const AWS = require('aws-sdk');
const config = require('../../../aws-config/config');

const getAthleteByUserName = () => {
    AWS.config.update(config.aws_remote_config);

    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

    const params = {
      TableName: 'ATHLETES_QA',
      Key: {
          'username': {S: 'fast_harambe_95'}
      },
      ProjectionExpression: 'age'
    };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err
    } else {
      console.log("Success", data.Item);
      return data.Item
    }
  });
}

const getAthleteByEmail = () => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: "ATHLETES_QA",
    IndexName: "email-index",
    KeyConditionExpression: "email = :email", 
    ExpressionAttributeValues: {
     ":email": {
       S: "fast_harambe@gmail.com"
      }
    }
  };

  // Call DynamoDB to read the item from the table
  ddb.query(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err
    } else {
      console.log("Success", data.Items);
      return data.Items
    }
  });
}

const addAthlete = () => {
    AWS.config.update(config.aws_remote_config);

    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    
    const params = {
        TableName: 'ATHLETES_QA',
        Item: {
          'username' : {S: 'fast_harambe_95'},
          'age' : {N: '29'}
        }
      };

    // Call DynamoDB to add the item to the table
    return ddb.putItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
            return err
        } else {
            console.log("Success", data);
            return data
        }
    });
}


module.exports = {
    getAthleteByUserName,
    getAthleteByEmail,
    addAthlete
}