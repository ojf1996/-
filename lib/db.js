var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/local');
mongoose.Promise = global.Promise;

module.exports =  db;