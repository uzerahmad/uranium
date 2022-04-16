const express = require('express');
const router = express.Router();
const bookController= require("../controllers/bookController.js");


router.post("/creatNewAuthor", bookController.creatNewAuthor)
router.post("/createNewBook", bookController.createNewBook)
router.get("/allBooks", bookController.allBooks)
router.get("/updateBookPrice", bookController.updateBookPrice)
router.get("/authorsName", bookController.authorsName) 
module.exports = router;
