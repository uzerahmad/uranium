const express = require('express');
const router = express.Router();
// const bookController= require("../controllers/bookController.js");
const developerController=require("../controllers/developerController")
const betchControllers  =require("../controllers/betchController")


router.post  ("/creatdevloper",developerController.getdeveloper)
router.post  ("/creatbatch",betchControllers.getbatch)
router.post  ("/getDevloper",developerController.getDeveloper)
router.post ("/getscolership",developerController.getscholership)



// router.post("/creatNewAuthor", bookController.creatNewAuthor)
// router.post("/createNewBook", bookController.createNewBook)
// router.get("/allBooks", bookController.allBooks)
// router.get("/updateBookPrice", bookController.updateBookPrice)
// router.get("/authorsName", bookController.authorsName) 
module.exports = router;
