const mongoose = require ("mongoose")
const batchModel = new mongoose.Schema({
    name:String,
    size:Number,
    program:String
})
module.exports=mongoose.model("batch",batchModel)