const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel")
const userController = require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser)

router.get("/getUsersData", userController.getUsersData)

module.exports = router;