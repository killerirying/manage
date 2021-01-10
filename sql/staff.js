const db = require('./db.js') 


const staffSchema = new db.mongoose.Schema({
    "username":{type:String},
    "age":{type:String},
    "salary":{type:Number},
    "year":{type:Number},
    "sex":{type:String}
})


module.exports = db.mongoose.model("staff",staffSchema)