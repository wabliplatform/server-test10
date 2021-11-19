
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mockupSchema = new Schema({
Underscoreid:String , 

firstname:String , 

lastname:String 


})

module.exports = {
  Mockup : mongoose.model('Mockup', mockupSchema),
}

