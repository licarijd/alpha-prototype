const { mg, COMPANY_EMAIL } = require('../../mailgun.config');

const sendEmail = (recipient, subject, text) => {
  const data = {
    from: `${COMPANY_EMAIL}`,
    to: recipient,
    subject,
    text,
  };

  return mg.messages()
    .send(
      data,
      (error, body) => {
        console.log(error);
        return body || error;
      },
    );
};

const sendHTMLEmail = (recipient, subject, html) => {
  const data = {
    from: `${COMPANY_EMAIL}`,
    to: recipient,
    subject,
    html,
  };

  return mg.messages()
    .send(
      data,
      (error, body) => {
        console.log(error);
        return body || error;
      },
    );
};

module.exports = {
  sendEmail,
  sendHTMLEmail,
};