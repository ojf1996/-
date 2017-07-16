var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/local');

module.exports =  db;