const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "moats_array0a@icloud.com", // Change to your recipient
  from: "yoko_iwasakijp@yahoo.co.jp", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });

const handler = (req, res) => {
  let msg = {};

  const sgMail = require("@sendgrid/mail");

  sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー

  msg = {
    to: req.body.to,
    from: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  };

  (async () => {
    try {
      await sgMail.send(msg);
      res.status(200).json(msg);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();

  res.status(200);
};

// eslint-disable-next-line import/no-default-export
export default handler;
