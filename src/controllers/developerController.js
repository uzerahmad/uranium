const developersModel = require("../models/developersModel")
// const batchesModel = require("../models/batchesModel")

const creatdeveloper = async function (req, res) {
    const bodydata = req.body
    const data = await developersModel.create(bodydata)
    res.send({ msg: data })
}
const scholarship = async function (req, res) {
    const alldata = await developersModel.find({ percentage: { $gte: 70 }, "gender.enum": "female" })
    res.send({ data: alldata })

}
const developers = async function (req, res) {
    let data = req.query.percentage
    let data1 = req.query.program
    const details = await developersModel.find({ percentage: data, "program.enum": data1 })
    res.send({ data: details })
}
module.exports.getdeveloper = creatdeveloper;
module.exports.getscholership = scholarship;
module.exports.getDeveloper = developers
