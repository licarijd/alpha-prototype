const Express = require('express');
const router = Express.Router();

const {
  createAthlete,
  getAthleteByUserName,
  getAthleteByEmail,
  getScore,
  addDailyQuestionnaire,
  addWeeklyQuestionnaire,
  login
} = require('../services/DynamoDbService');

router.post('/create-athlete', (request, response) => {
  const {username} = request.body
  try {
    createAthlete(username, response)
  } catch {
    response.send(new Error(500));
  }
});

router.post('/login', (request, response) => {
  const {username, passwordText} = request.body
  try {
    login(username, passwordText, response)
  } catch {
    response.send(new Error(500));
  }
});

router.get('/get-athlete', (request, response) => {
  try {
    getAthleteByUserName(response)
  } catch {
    response.send(new Error(500));
  }
});
  
router.get('/get-email', (request, response) => {
  try {
    getAthleteByEmail(response)
  } catch {
    response.send(new Error(500));
  }
});

router.post('/update-daily-questionnaire', (request, response) => {
  try {
    addDailyQuestionnaire(response)
  } catch {
    response.send(new Error(500));
  }
});

router.post('/update-weekly-questionnaire', (request, response) => {
  try {
    addWeeklyQuestionnaire(response)
  } catch {
    response.send(new Error(500));
  }
});

router.post('/get-score', (request, response) => {
  try {
    getScore(response)
  } catch {
    response.send(new Error(500));
  }
});

module.exports = router;
