const mailgun = require("mailgun-js");

const COMPANY_EMAIL = 'oneathlete.alpha@gmail.com';
const DOMAIN = "sandbox8dcf89d04bdd49989942b3ec4648745a.mailgun.org";
const mg = mailgun({apiKey: "e4bcb838191a05e6093a9b326d36b23e-77751bfc-e55e5693", domain: DOMAIN});

module.exports = {
  mg,
  COMPANY_EMAIL,
};