//===== IMPORT =====//

var express = require("express");
var router = express.Router();


//model
var db = require("../models");
//var burger = require("../models/burger.js");

//===== ROUTES =====//

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    db.burger.findAll({}).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
    if (req.params.id){
        db.burger.update(
        req.body,
        {
          where: {
            id: req.body.id
          }
        }).then(function(dbBurger) {
          res.json(dbBurger);
        });
    };
  });

};


/*
//select
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//insert one
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured", "nowDate"
  ], [
    req.body.burger_name, req.body.devoured, req.body.nowDate
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

//update one
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


//===== EXPORT =====//

module.exports = router;
*/