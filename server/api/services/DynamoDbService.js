const AWS = require('aws-sdk');
const config = require('../../../aws-config/config');
const { historicalQuestionnaireResults, dailyQuestionnaireResults, weeklyQuestionnaireResults } = require('../../../mock-data/questionnaireResults');
const computeScore = require('../utils/ALPHAScoring');
const { hashPassword, verifyPassword } = require('../utils/AuthUtils');

const getAthleteByUserName = (response) => {
    AWS.config.update(config.aws_remote_config);

    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

    const params = {
      TableName: 'ATHLETES_QA',
      Key: {
          'username': {S: 'fast_harambe_69'}
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
      response.send(data.Item)
      return data.Item
    }
  });
}

const createAthlete = (username, response) => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
        'username': {S: username}
    },
    ProjectionExpression: 'email'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err
    } else {
      console.log("Success", data.Item);

      if (data.Item && data.Item.email) {
        response.send(`An athlete with username ${username} already exists`)
      } else {
        addAthlete(username, response)
      }
    }
  });
}

const login = (username, passwordText, response) => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
        'username': {S: username}
    },
    ProjectionExpression: 'password'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err
    } else {
      console.log("Success", data.Item);

      if (data.Item && data.Item.password) {
        const passwordCorrect = verifyPassword(data.Item.password.S, passwordText)
        if (passwordCorrect) {
          response.send('Password correct')
        } else {
          response.send('Password incorrect')
        }
      } else {
        response.send(`An athlete with username ${username} doesn't exist`)
      }
    }
  });
}

const getAthleteByEmail = (response) => {
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
      response.send(data.Item)
      return data.Items
    }
  });
}

const addAthlete = (username, response, data = historicalQuestionnaireResults) => {
    AWS.config.update(config.aws_remote_config);

    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    const date = new Date().getTime()
    const historicalQuestionnaireData = {}
    historicalQuestionnaireData[date] = {S: data}
    const params = {
        TableName: 'ATHLETES_QA',
        Item: {
          'username' : {S: username},
          'age' : {N: '29'},
          'email' : {S: 'fast_harambe_69@gmail.com'},
          'password' : {S: hashPassword('example')},
          'historicalQuestionnaireResults' : {M : historicalQuestionnaireData}
        }
      };

    // Call DynamoDB to add the item to the table
    return ddb.putItem(params, function(err, data) {
        if (err) {
            console.log("Error", err);
            return err
        } else {
            console.log("Success", data);
            response.send(data)
            return data
        }
    });
}

const updateDailyQuestionnaireResults = (questionnaireData) => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
      'username': {
          S: 'fast_harambe_69'
      }
    },               
    UpdateExpression: 'SET #dailyQuestionnaireResults =:dailyQuestionnaireResults',
    ExpressionAttributeNames: {
        '#dailyQuestionnaireResults': 'dailyQuestionnaireResults' //COLUMN NAME       
    },
    ExpressionAttributeValues: {
      ':dailyQuestionnaireResults': questionnaireData
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
          S: 'fast_harambe_69'
      }
    },               
    UpdateExpression: 'SET #weeklyQuestionnaireResults =:weeklyQuestionnaireResults',
    ExpressionAttributeNames: {
        '#weeklyQuestionnaireResults': 'weeklyQuestionnaireResults' //COLUMN NAME       
    },
    ExpressionAttributeValues: {
      ':weeklyQuestionnaireResults': questionnaireData
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

const getScore = (response) => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
        'username': {S: 'fast_harambe_69'}
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
      response.send(score)
      return score
    }
  });
}

const computeTrends = (score, trendsObj) => {
  let trends = trendsObj || { M : {} }
  const date = new Date().getTime()
  for (const [key, value] of Object.entries(score)) {
    if (trends.M[key] && trends.M[key].M) {
      trends.M[key].M[date] = {S: value}
    } else {
      const trendEntry = {}
      trendEntry[date] = {S: value}
      trends.M[key] = {M: trendEntry}
    }
  }
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
          S: 'fast_harambe_69'
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

const addDailyQuestionnaire = (response, questionnaireResults = dailyQuestionnaireResults) => {
  return getDailyQuestionnaires(response, questionnaireResults)
}

const addWeeklyQuestionnaire = (response, questionnaireResults = weeklyQuestionnaireResults) => {
  return getWeeklyQuestionnaires(response, questionnaireResults)
}

const getDailyQuestionnaires = (response, questionnaireResults) => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
        'username': {S: 'fast_harambe_69'}
    },
    ProjectionExpression: 'dailyQuestionnaireResults'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err
    } else {
      console.log("Success", data.Item);
      const newDailyQuestionnaireData = buildQuestionnaireMap(questionnaireResults, data.Item, false)
      updateDailyQuestionnaireResults(newDailyQuestionnaireData)
      response.send(data.Item)
      return data.Item
    }
  })
}

const buildQuestionnaireMap = (newResults, existingResults, isWeekly) => {
  const limit = isWeekly ? 4 : 30
  let results = { M: {} }
  
  if (existingResults && Object.keys(existingResults).length != 0) {
    const resultsObj = isWeekly ? existingResults.weeklyQuestionnaireResults : existingResults.dailyQuestionnaireResults
    results = {...resultsObj}
  }

  const timestamps = Object.keys(results.M)

  if (timestamps.length >= limit) {
    const oldest = Math.min(...timestamps)
    delete results.M[oldest]
  }
  const date = new Date().getTime()
  results.M[date] = {S: newResults}
  return results
}

const getWeeklyQuestionnaires = (response, questionnaireResults) => {
  AWS.config.update(config.aws_remote_config);

  // Create the DynamoDB service object
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  const params = {
    TableName: 'ATHLETES_QA',
    Key: {
        'username': {S: 'fast_harambe_69'}
    },
    ProjectionExpression: 'weeklyQuestionnaireResults'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err
    } else {
      console.log("Success", data.Item);
      const newWeeklyQuestionnaireData = buildQuestionnaireMap(questionnaireResults, data.Item, true)
      updateWeeklyQuestionnaireResults(newWeeklyQuestionnaireData)
      response.send(data.Item)
      return data.Item
    }
  })
}

module.exports = {
    getAthleteByUserName,
    getAthleteByEmail,
    addAthlete,
    addDailyQuestionnaire,
    addWeeklyQuestionnaire,
    getScore,
    createAthlete,
    login
}