const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Middlewere = require("../Middlewere/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",Middlewere.validateToken,userController.getUserData)

router.put("/users/:userId",Middlewere.validateToken ,userController.updateUser)
router.delete("/deleteUser/:userId",Middlewere.validateToken,userController.deleteUser)


module.exports = router;