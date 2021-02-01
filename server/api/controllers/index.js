const Express = require('express');
const HttpStatus = require('http-status-codes');
const authController = require('./AuthenticationController');
const Error = require('../models/Error');

const router = Express.Router();

router.use('/auth', authController);

router.get('*', (req, res) => {
  new Error(HttpStatus.NOT_FOUND, 'URL does not exist').send(res);
});

module.exports = router;