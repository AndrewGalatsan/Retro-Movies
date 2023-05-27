// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

require('dotenv').config();
const ENV        = process.env.ENV || "development";
const express    = require("express");
const app        = express();

const MessagingResponse = require('twilio').twiml.MessagingResponse;

const twilioSMSAPI = (options) => {
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);
  console.log('test')
  // return function (options) {
    client.messages
      .create({
        body: `${options.text}`,
        from: "+15675871752",
        to: "+16477782876",
      })
      .then((message) => console.log(message.sid))
      .catch((error) => console.log(error));
  };
// };

const notifyOwner = () => {
  const options = {
    text: `New Order is placed`
  };
  twilioSMSAPI(options);
};

const notifyCustomerOrderConfirmed = (
  id = 7,
  waitTime = 15,
  phoneNumber = "+16477782876"
) => {
  const options = {
    text: `Your order will be ready in ${waitTime}!`,
    phoneNumber: "+16477782876",
  };
  twilioSMSAPI(options);
};

const notifyCustomerOrderReady = () => {
  const options = {
    text: `Your order is ready for a pickup.`,
  };
  twilioSMSAPI(options);
};

module.exports = {
  notifyOwner,
  notifyCustomerOrderConfirmed,
  notifyCustomerOrderReady,
};
