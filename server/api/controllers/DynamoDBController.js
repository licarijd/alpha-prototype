const Express = require('express');

const router = Express.Router();
const Response = require('../models/Response');
const {
  createAthlete,
  getAthleteByUserName,
  getAthleteByEmail,
  removeOldQuestionnaireData,
  getScore,
  addDailyQuestionnaire,
  addWeeklyQuestionnaire
} = require('../services/DynamoDbService');

router.post('/create-athlete', (request, response) => {
  const {username} = request.body
  try {
    createAthlete(username, response)
  } catch {
    response.send(new Error(500));
  }
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

router.post('/update-daily-questionnaire', (request, response) => {
  Promise.resolve(addDailyQuestionnaire())
    .then(() => {
      return new Response("Update operation attempt made to DynamoDB").send(response);
    })
    .catch(null, () => new Error(500).send(response));
});

router.post('/update-weekly-questionnaire', (request, response) => {
  Promise.resolve(addWeeklyQuestionnaire())
    .then(() => {
      return new Response("Update operation attempt made to DynamoDB").send(response);
    })
    .catch(null, () => new Error(500).send(response));
});

router.post('/remove-old-questionnaires', (request, response) => {
  Promise.resolve(removeOldQuestionnaireData())
    .then(() => {
      return new Response("Operation attempts made to DynamoDB").send(response);
    })
    .catch(null, () => new Error(500).send(response));
});

router.post('/get-score', (request, response) => {
  Promise.resolve(getScore())
    .then((score) => {
      return new Response(score).send(response);
    })
    .catch(null, () => new Error(500).send(response));
});

module.exports = router;
