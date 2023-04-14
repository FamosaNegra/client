const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.mesa = require("./mesa.model");
db.corretor = require("./corretor.model")
db.leadsCv = require("./leadsCv.model.js")

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;