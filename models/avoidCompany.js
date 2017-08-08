const db = require('../lib/db.js');
const mongoose = require('mongoose');

const avoidCompanySchema = new mongoose.Schema({
		userName:String,
        name:String,
        isWorkplace:String
});

const avoidCompany = db.model('avoidCompany',avoidCompanySchema);

avoidCompanySchema.index({userName:1 });

module.exports = avoidCompany;