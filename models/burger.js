//
var Sequelize = require("sequelize");
var sequelize = require("../config/config.json");

//

var burger = sequelize.define("burger", {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
  burger_name: {
      type: Sequelize.STRING,
      len: [1, 300]
    },
  devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    }
},{
  nowDate: Sequelize.DATE
});


//
burger.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = burger;


/*
//===== IMPORT =====//

//orm
var orm = require("../config/orm.js");

//===== ORM FUNCTIONS =====//

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};


//===== EXPORT =====//

module.exports = burger;
*/