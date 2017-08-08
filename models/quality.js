const db = require('../lib/db.js');
const mongoose = require('mongoose');

const qualitySchema = new mongoose.Schema({
		userName:String,
		Sname:String,
		Sid:String
});

const Quality = db.model('Quality',qualitySchema);

qualitySchema.index({userName:1});

module.exports = Quality; 