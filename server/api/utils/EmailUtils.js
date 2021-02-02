const {
    PASSWORD_RESET_SUBJECT
} = require('../constants/constants');

const { sendEmail } = require('../services/MailgunService');

const emailPasswordResetNotification = (email, password, key, url) => {
  const subject = PASSWORD_RESET_SUBJECT;
  const emailBody = `Please click this link ${url}reset?key=${key}&email=${email} to receive the following temporary password: ${password}.
  Ignore this email if you did not request a password reset.`;
  return sendEmail(email, subject, emailBody);
}

module.exports = {
    emailPasswordResetNotification
}