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

const removeOldQuestionnaireData = () => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
        'username': {S: 'fast_harambe_95'}
    },
    ProjectionExpression: 'dailyQuestionnaireResults, weeklyQuestionnaireResults'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err
    } else {
      console.log("Success", data.Item);
      const {dailyQuestionnaireResults, weeklyQuestionnaireResults} = data.Item
      filterOldQuestionnaireData(dailyQuestionnaireResults.M, weeklyQuestionnaireResults.M)
      return data.Item
    }
  }).then(res => res);
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
          'age' : {N: '29'},
          'email' : {S: 'fast_harambe_95@gmail.com'},
          'password' : {S: 'example'},
          'historicalQuestionnaireResults' : {M : {"1612220346" : {S: "historical-test-data-json"}}}
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

const addDailyQuestionnaireResults = (questionnaireData={"1612220346" : {S: 'hi'}, "1612227574" : {S: 'hi'}}) => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
      'username': {
          S: 'fast_harambe_95'
      }
    },               
    UpdateExpression: 'SET #dailyQuestionnaireResults =:dailyQuestionnaireResults',
    ExpressionAttributeNames: {
        '#dailyQuestionnaireResults': 'dailyQuestionnaireResults' //COLUMN NAME       
    },
    ExpressionAttributeValues: {
      ':dailyQuestionnaireResults': {
        M : questionnaireData
      }
    }
  };

  // Call DynamoDB to update the item
  return ddb.updateItem(params, function(err, data) {
    if (err) {
        console.log("Error", err);
        return err
    } else {
        console.log("Success", data);
        return data
    }
  });
}

const addWeeklyQuestionnaireResults = (questionnaireData={"1612220346" : {S: 'hi'}, "1612227574" : {S: 'hi'}}) => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
      'username': {
          S: 'fast_harambe_95'
      }
    },               
    UpdateExpression: 'SET #weeklyQuestionnaireResults =:weeklyQuestionnaireResults',
    ExpressionAttributeNames: {
        '#weeklyQuestionnaireResults': 'weeklyQuestionnaireResults' //COLUMN NAME       
    },
    ExpressionAttributeValues: {
      ':weeklyQuestionnaireResults': {
        M : questionnaireData
      }
    }
  };

  // Call DynamoDB to update the item
  return ddb.updateItem(params, function(err, data) {
    if (err) {
        console.log("Error", err);
        return err
    } else {
        console.log("Success", data);
        return data
    }
  });
}

/*const removeOldQuestionnaireData = async () => {
  const questionnaireData = await getAthleteQuestionnaireData()
  console.log("q")
  console.log(questionnaireData)
  const {dailyQuestionnaireResults, weeklyQuestionnaireResults} = questionnaireData
  const newQuestionnaireData = filterOldQuestionnaireData(dailyQuestionnaireResults, weeklyQuestionnaireResults)
  addWeeklyQuestionnaireResults(newQuestionnaireData.newWeeklyQuestionnaireMap)
  addDailyQuestionnaireResults(newQuestionnaireData.newDailyQuestionnaireMap)
}*/

const filterOldQuestionnaireData = (dailyQuestionnaireData, weeklyQuestionnaireData) => {
  console.log("RESULTS")
  console.log(dailyQuestionnaireData)
  console.log(weeklyQuestionnaireData)
  const newDailyQuestionnaireMap = {}
  const newWeeklyQuestionnaireMap = {}
  let i = 0
  for (const [key, value] of Object.entries(dailyQuestionnaireData)) {
    if (i == 0) { // replace with date condition
      newDailyQuestionnaireMap[key] = value
    }
    i++
  }
  let j = 0
  for (const [key, value] of Object.entries(weeklyQuestionnaireData)) {
    if (j == 0) { // replace with date condition
      newWeeklyQuestionnaireMap[key] = value
    }
    j++
  }
  addWeeklyQuestionnaireResults(newWeeklyQuestionnaireMap)
  addDailyQuestionnaireResults(newDailyQuestionnaireMap)
}

module.exports = {
    getAthleteByUserName,
    getAthleteByEmail,
    addAthlete,
    addDailyQuestionnaireResults,
    addWeeklyQuestionnaireResults,
    removeOldQuestionnaireData
}