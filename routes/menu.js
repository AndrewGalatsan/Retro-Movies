const express = require('express');
const router = express.Router();




module.exports = (db) => {

  router.get("/", (req, res) => {         // non-AJAX route; returns full page of HTML
    console.log("test")
    res.render("movie");
  });

  router.get("/1", (req, res) => {        // JSON-only route for AJAX GET
    db.query(`SELECT * FROM movie_items;`)
      .then(data => {
        let templateVars = data.rows;
        res.json({ templateVars })
        //res.render('menu', templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  })

  return router;
}
