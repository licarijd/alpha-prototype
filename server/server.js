const express = require('express');
const cors = require('cors');
const next = require('next');
const bodyParser = require('body-parser');
const session = require('express-session');
const controllers = require('./api/controllers');
const { createSession } = require('./api/utils/AuthUtils');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    const sess = createSession();
    if (server.get('env') === 'production') {
      server.set('trust proxy', 1); // trust first proxy
      sess.cookie.secure = true; // serve secure cookies
    }

    server.use(cors());
    server.use(bodyParser());
    server.use(session(sess));

    server.use('/api', controllers);

    server.get('/dashboard', (req, res) => {
      if (!req.session.username) {
        res.redirect('/auth-select');
      }
      return handle(req, res);
    });

    /*server.get('/new-coupon', (req, res) => {
      if (!req.session.username) {
        res.redirect('/auth-select');
      }
      return handle(req, res);
    });

    server.get('/redeem-coupon', (req, res) => {
      if (!req.session.username) {
        res.redirect('/auth-select');
      }
      return handle(req, res);
    });

    server.get('/coupon-details', (req, res) => {
      if (!req.session.username) {
        res.redirect('/auth-select');
      }
      return handle(req, res);
    });*/

    server.get('/account', (req, res) => {
      if (!req.session.username) {
        res.redirect('/auth-select');
      }
      return handle(req, res);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(process.env.PORT || 8081, (err) => {
      if (err) throw err;
      console.log('> Ready!');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
