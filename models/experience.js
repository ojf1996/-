const db = require('../lib/db.js');
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
		userName:String,
		time:Date,
        name:String,
        desc:String,
        type:String
});

const Experience = db.model('Experience',experienceSchema);

experienceSchema.index({userName:1 });

module.exports = Experience;