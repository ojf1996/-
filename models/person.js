const db = require('../lib/db.js');
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
		userName:String,
		passwd:String,
		type:Number //1：用户 2：管理员
});

const Person = db.model('Person',personSchema);

personSchema.index({userName:1});

module.exports = Person; 

