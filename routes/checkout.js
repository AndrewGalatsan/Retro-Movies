const express = require('express');
const router  = express.Router();

var stripeHelper = 

module.exports = (db) => {
  const movieItems = {};

  router.post("/", (req, res) => {      // JSON-only route for AJAX POST
    let selectedMovieItem = req.body;
    const item_id = selectedMovieItem.item_id;
    movieItems[item_id] = {};
    movieItems[item_id].id = selectedMovieItem.item_id;
    movieItems[item_id].name = selectedMovieItem.name;
    movieItems[item_id].price = selectedMovieItem.price;
    movieItems[item_id].qty = selectedMovieItem.qty;
    movieItems[item_id].image = selectedMovieItem.image;
    movieItems[item_id].showtimes = selectedMovieItem.showtimes;
    console.log("selected movie", selectedMovieItem);
    res.end();
  })

  router.get("/", (req, res) => {      // non-AJAX route; returns full page of HTML


    res.render("checkout");
  });

  router.get("/1", (req, res) => {        // JSON-only route for AJAX GET
    res.json({ movieItems })
  })

  return router
}
