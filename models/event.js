const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var eventSchema = new Schema({
    
    
    businessid:String,
    expireAt:Date,
    name:String,
    image_url:String,
    people:[String]

});



const model = mongoose.model('event',eventSchema)

var eventObject={
    model:model,
    schema:eventSchema
}
module.exports = eventObject

