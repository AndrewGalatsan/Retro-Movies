const express = require('express');
const db = require('../db/connection');
const router  = express.Router();
const {notifyOwner, notifyCustomerOrderConfirmed,notifyCustomerOrderReady} = require('../helpers/notify')



module.exports = (db) => {

  let confirmedItems = {};
  let prices = {};
  let customerInfo = {};
  let totalQuantity = 0;
  let waitTime = 0;



  router.post("/", (req, res) => {      // JSON-only route for AJAX POST
    let selectedMenuItem = req.body;
    const items = selectedMenuItem.itemInfo;
    for (let item in items) {
      confirmedItems[item] = {};
      confirmedItems[item].id = items[item].id;
      confirmedItems[item].qty = Number(items[item].qty);
      confirmedItems[item].image = items[item].image;
      totalQuantity += confirmedItems[item].qty;
    }
    let subPrice = ((selectedMenuItem.subTotalPrice) / 100).toFixed(2);
    let totalPrice = (subPrice * 1.12).toFixed(2);
    prices.subTotPrice = subPrice;
    prices.totPrice = totalPrice;
    customerInfo.name = selectedMenuItem.customerName
    customerInfo.phone = selectedMenuItem.customerPhone
    customerInfo.notes = selectedMenuItem.customerNotes


    db.query(`INSERT INTO users (name, phone) VALUES ($1, $2) returning *`, [customerInfo.name, customerInfo.phone])
              .then ( (data) => {
                return db.query(`INSERT INTO movie_orders (user_id, customer_notes, status)
              VALUES($1, $2, $3) returning *`, [data.rows[0].id, customerInfo.notes, false ])})
              .then((movieOrder) => {
                for (let item in confirmedItems) {
                  db.query(`INSERT INTO ordered_items (order_id, menu_item_id, qty)
                  VALUES ($1, $2, $3)`, [movieOrder.rows[0].id, confirmedItems[item].id, confirmedItems[item].qty]);
                };
                res.send('hello')
              })

             // VALUES ('$1,$2,$3,$4,$5,$6'),[data.user_id, data.created_at, data.updated_at, data.completed_at, data.customer_notes, data.status];`)})

  });



  router.get("/", (req, res) => {

    if (totalQuantity > 3) {
      waitTime = totalQuantity * 6;
    } else {
      waitTime = 15;
    }
    notifyOwner()
    notifyCustomerOrderConfirmed(waitTime)
    setTimeout(notifyCustomerOrderReady, waitTime * 1000)

    res.render("confirmation", { confirmedItems, prices, customerInfo });
    });
  return router;
};
