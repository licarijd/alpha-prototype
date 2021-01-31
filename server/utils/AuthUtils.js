//const bcrypt = require('bcrypt');
const uuidv1 = require('uuid/v1');
const { TIME_ONE_HOUR } = require ('../constants/constants')

const saltRounds = 10;

const createSession = () => {
    const sess = {
        genid: function(req) {
          return uuidv1() // use UUIDs for session IDs
        },
        key: 'init',
        secret: 'init',
        cookie: { maxAge: 8 * TIME_ONE_HOUR },
        resave: true,
        saveUninitialized: true
      }

      return sess
} 

/*const hashPassword = (passwordText) => {
    return bcrypt.hash (
        passwordText,
        saltRounds
    )
    .then(hash => {
        return hash
    })
}

const verifyPassword = (hash, passwordText) => {
    return bcrypt.compare(passwordText, hash)
    .then (res => {
        return res
    });
}*/

const generateTempPassword = () => {
  return Math.random().toString(36).substr(2, 5);
};

module.exports = {
    //verifyPassword,
    //hashPassword,
    createSession,
    generateTempPassword,
}