const AWS = require('aws-sdk');
const config = require('../../../aws-config/config');
const computeScore = require('../utils/ALPHAScoring');

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
  })/*.then(res => res)*/;
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

const updateDailyQuestionnaireResults = (questionnaireData={"1612220346" : {S: 'hi'}, "1612227574" : {S: 'hi'}}) => {
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

const updateWeeklyQuestionnaireResults = (questionnaireData={"1612220346" : {S: 'hi'}, "1612227574" : {S: 'hi'}}) => {
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

const filterOldQuestionnaireData = (dailyQuestionnaireData, weeklyQuestionnaireData) => {
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
  updateWeeklyQuestionnaireResults(newWeeklyQuestionnaireMap)
  updateDailyQuestionnaireResults(newDailyQuestionnaireMap)
}

const getScore = () => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
        'username': {S: 'fast_harambe_95'}
    },
    ProjectionExpression: 'dailyQuestionnaireResults, weeklyQuestionnaireResults, trends'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err
    } else {
      console.log("Success", data.Item);
      const {dailyQuestionnaireResults, weeklyQuestionnaireResults, trends} = data.Item
      const score = computeScore({dailyQuestionnaireResults, weeklyQuestionnaireResults})
      const newTrends = computeTrends(score, trends)
      updateTrends(newTrends)
      return score
    }
  })/*.then(res => res)*/;
}

const computeTrends = (score, trendsObj) => {
  console.log("BEFORE")
  console.log(trendsObj)
  //console.log(trendsObj.M['sleep-factors'].M)
  let trends = trendsObj || { M : {} }
  console.log(trends)
  const date = new Date()
  for (const [key, value] of Object.entries(score)) {
    if (trends.M[key] && trends.M[key].M) {
      //const trendEntry = {}
      //trendEntry[date] = {S: value}
      trends.M[key].M[date] = {S: value}
      console.log("new")
      console.log(trends.M[key].M[date])
    } else {
      const trendEntry = {}
      trendEntry[date] = {S: value}
      trends.M[key] = {M: trendEntry}
    }
  }
  console.log("AFTER")
  console.log(trends)
  console.log(trends.M['sleep-factors'].M)
  return trends
}

const updateTrends = (trends) => {
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
    UpdateExpression: 'SET #trends =:trends',
    ExpressionAttributeNames: {
        '#trends': 'trends' //COLUMN NAME       
    },
    ExpressionAttributeValues: {
      ':trends': trends
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

module.exports = {
    getAthleteByUserName,
    getAthleteByEmail,
    addAthlete,
    updateDailyQuestionnaireResults,
    updateWeeklyQuestionnaireResults,
    removeOldQuestionnaireData,
    getScore
}