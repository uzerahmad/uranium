const batchesModel = require("../models/batchesModel")

const createbatch = async function (req,res){
    const bodydata = req.body
    const data = await batchesModel.create(bodydata)
    res.send ({msg:data})
}
module.exports.getbatch=createbatch;