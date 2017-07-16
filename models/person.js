const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
		userName:String,
		passwd:String,
		type:Number //1：用户 2：管理员
});

const Person = mongoose.model('Person',personSchema);

personSchema.statics.findByName = function(name,cb){
	return this.find({ name: new RegExp(name,'i'),cb});
};

personSchema.index({userName:1});

module.exports = Person; 

