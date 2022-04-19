const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const developersModel = new mongoose.Schema({
    name: "string",
    gender: {
        enum: ["male", "female", "other"]
    },
    percentage: Number,
    batch: {
        type: ObjectId,
        ref: "batch"
    }

})
module.exports = mongoose.model("developer", developersModel)