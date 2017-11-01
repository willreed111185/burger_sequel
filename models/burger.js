// var orm = require("../config/orm.js");

// var burger = {
//   selectAll: function(cb) {
//     orm.selectAll(function(res) {
//       cb(res);
//     });
//   },
//   insertOne: function(burger_name, cb) {
//     orm.insertOne(burger_name, function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(burger_name, cb) {
//     orm.updateOne(burger_name, function(res) {
//       cb(res);
//     });
//   }
// };
// module.exports = burger;

var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("allcharacters", {
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  }
});

// Syncs with DB
Burger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Burger;