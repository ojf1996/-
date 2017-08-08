const db = require('../lib/db.js');
const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
		userName:String,
		startTime:Date,
        endTime:Date,
        workplace:String,
        certifier:String,
        position:String
});

const WorkExperience = db.model('WorkExperience',workExperienceSchema);

workExperienceSchema.index({userName:1 });

module.exports = WorkExperience;