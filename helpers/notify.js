// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

require('dotenv').config();
const ENV        = process.env.ENV || "development";
const express    = require("express");
const app        = express();

const MessagingResponse = require('twilio').twiml.MessagingResponse;

const twilioNotify = (user, movies) => {
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);
  const options = {
    text: `Thank you for choosing Retro-Flicks`,
    movie: movies.name,
    tickets: movies.qty,
    showtime: movies.showtimes,
  };

  // return function (options) {
    client.messages
      .create({
        body: `${options.text}, ${user}. You've ordered ${options.tickets} ticket(s) for the show of ${options.movie} at our ${options.showtime} showing. Enjoy!`,
        from: "+13614016748",
        to: `+16477782876`,
      })
      .then((message) => console.log(message.sid))
      .catch((error) => console.log(error));
  };
// };

const notifyOwner = (user,movies) => {
  const options = {
    text: `Thank you for choosing Retro-Flicks`,
    movie: movies.name,
    user: user,
    tickets: movies.qty,
    showtime: movies.showtimes,
  };
  twilioNotify(options);
};

const notifyCustomerOrderConfirmed = (
) => {
  const options = {
    text: `Your order will be ready in`,

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
  twilioNotify,
  notifyOwner,
  notifyCustomerOrderConfirmed,
  notifyCustomerOrderReady,
};

