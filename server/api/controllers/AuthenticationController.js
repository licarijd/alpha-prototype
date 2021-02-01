const Express = require('express');

const router = Express.Router();
const Response = require('../models/Response');
const { addAthlete, getAthleteByUserName, getAthleteByEmail } = require('../services/DynamoDbService');

router.post('/create-athlete', (request, response) => {
  Promise.resolve(addAthlete())
    .then(() => {
      return new Response("Put operation attempt made to DynamoDB").send(response);
    })
    .catch(null, () => new Error(500).send(response));
});

router.get('/get-athlete', (request, response) => {
  Promise.resolve(getAthleteByUserName())
    .then(() => {
      return new Response("GetItem operation attempt made to DynamoDB").send(response);
    })
    .catch(null, () => new Error(500).send(response));
});
  
router.get('/get-email', (request, response) => {
  Promise.resolve(getAthleteByEmail())
    .then(() => {
      return new Response("Query operation attempt made to DynamoDB").send(response);
    })
    .catch(null, () => new Error(500).send(response));
});

module.exports = router;
