const userModel = require("../models/userModel")

const createUser = async function (req, res) {
    let data = req.body
    let savedData = await userModel.create(data)
    res.send({ msg: savedData })
}

const getUsersData = async function (req, res) {
    let allUsers = await userModel.find()
    res.send({ msg: allUsers })
}

module.exports.createUser = createUser
module.exports.getUsersData = getUsersData