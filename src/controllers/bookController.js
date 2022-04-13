const BookModel = require("../models/bookModel")
const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}
//  case-2 getBooksInYear: takes year as input in post request and gives list of all books published that year
// const getBooksData = async function (req, res) {
//     let yearbookModel=await BookModel.find().select({years:"2020"})
//     res.send(yearbookModel)
// } 
// case-1bookList : gives all the books- their bookName and authorName only 

// const getBooksData = async function(req,res){
//     let allBooks= await BookModel.find().select( { authorName : 1 , bookName: 1  } )
//     res.send(allBooks)
// }
// const getBooksData = async function (req,res){
//     let Getyear = await BookModel.find().select({bookName:1})
//     res.send(Getyear)
// }
const getBooksData = async function(req,res){
    let pricedata = await BookModel.find({"prices.indianPrice":{$in:["Rs 100","Rs 200","Rs 500"]}})
    res.send(pricedata)

 }
// const getBooksData = async function (req,res){
//     let allBooks = await BookModel.find({$or:[{stockAvailable: true} , {totalePages: {$gt: 500 }]})
//     res.send({ msg: allBooks })

// }
module.exports.createBook = createBook
module.exports.getBooksData = getBooksData