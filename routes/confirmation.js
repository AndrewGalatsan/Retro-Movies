const express = require("express");
const db = require("../db/connection");
const router = express.Router();
const { twilioNotify } = require("../helpers/notify");

   const createUser = (req, res) => {
     const { name, email } = req.body;

     db.query(
       "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
       [name, email],
       (error, results) => {
         if (error) {
           throw error;
         }
         console.log("result rows", res.rows[0].id);
         res.status(201).send(`User added with ID: ${res.rows[0].id}`);
       }
     );
   };

module.exports = (db) => {
  let confirmedItems = {};
  let prices = {};
  let customerInfo = {};
  let totalQuantity = 0;
  let waitTime = 0;

  router.post("/", (req, res) => {
    // JSON-only route for AJAX POST
    let selectedMenuItem = req.body;
    console.log("selected", selectedMenuItem)
    const items = selectedMenuItem.itemInfo;
    for (let item in items) {
      confirmedItems[item] = {};
      confirmedItems[item].id = items[item].id;
      confirmedItems[item].qty = Number(items[item].qty);
      confirmedItems[item].image = items[item].image;
      confirmedItems[item].name = items[item].name;
      confirmedItems[item].showtimes = items[item].showtimes;
      totalQuantity += confirmedItems[item].qty;
    }
    let subPrice = (selectedMenuItem.subTotalPrice / 100).toFixed(2);
    let totalPrice = (subPrice * 1.12).toFixed(2);
    prices.subTotPrice = subPrice;
    prices.totPrice = totalPrice;
    customerInfo.name = selectedMenuItem.customerName;
    customerInfo.phone = selectedMenuItem.customerPhone;

    db.query(`INSERT INTO users (name, phone) VALUES ($1, $2) returning *`, [
      customerInfo.name,
      customerInfo.phone,
    ]).then((user) => {

      for (let item in confirmedItems) {
        db.query(
          `INSERT INTO movie_orders (user_id, created_at, updated_at, completed_at, status)
                  VALUES ($1, $2, $3, $4, $5) returning *`,
          [user.rows[0].id, null, null, null, true]
        ).then((movie_order) => {
          for (let item in confirmedItems) {
            db.query(
              `INSERT INTO ordered_items (order_id, movie_item_id, showtimes, qty)
                  VALUES ($1, $2, $3, $4) returning *`,
              [
                movie_order.rows[0].id,
                confirmedItems[item].id,
                confirmedItems[item].showtimes,
                confirmedItems[item].qty,
              ]
            );
          }
        });
      }
      res.send("hello");
    })

  });


  router.get("/", (req, res) => {
     console.log("confirmedItems checkout", confirmedItems);
     console.log("customerinfo checkout", customerInfo);
     console.log("customer prices", prices);
    let user = customerInfo.name;
    let movies = Object.values(confirmedItems)[0];
    console.log("movie name", movies);

    twilioNotify(user, movies);
    res.render("confirmation", { confirmedItems, prices, customerInfo });
  });

  return router;

};

