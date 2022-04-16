const bookModule= require("../models/bookModule")
const authorModule = require("../models/authorModule")
// const authorModule = require("../models/authorModule")
// const bookModule = require("../models/bookModule")

const creatNewAuthor = async function(req,res){
    const reqAuthor = req.body
    const savedData = await authorModule.create(reqAuthor)
    res.send({msg : savedData})
}   
const createNewBook = async function(req,res){
    const reqBook = req.body
    const saved = await bookModule.create(reqBook)
    res.send({msg : saved})
}

const allBooks = async function (req,res){
    const data = await authorModule.find({author_name : "Chetan Bhaga"})
    const id = data[0].author_id
    const booksName = await bookModule.find({author_id : id}).select({name:1,_id:0})
    res.send({msg : booksName})
}

const updateBookPrice=async function(req,res){

    const bookDetails=await bookModule.find({name:"Two states"})
    const id=bookDetails[0].author_id
    const authorN=await authorModule.find({ author_id:id}).select({ author_name:1,_id:0})
  
    const bkName= bookDetails[0].name
    const updateBookPrice=await bookModule.findOneAndUpdate({  name:bkName},{price:100},{  new:true}).select({ price:1 ,_id:0})
     res.send({ msg:authorN,updateBookPrice})
  
  
  }
  

const authorsName = async function (req,res){
    const booksId = await bookModule.find({price: {$gte : 50, $lte : 100}}).select({author_id : 1, _id:0})
    const id = booksId.map(inr => inr.auhtor_id)

    let arr = []
    for(let i = 0; i<id.length ; i++){
        let x = id[i]
        const author = await authorModule.find({auhtor_id: x}).select({author_name:1, _id:0})
        arr.push(author)
    }
    const authorName = arr.flat()
    res.send({msg: authorName})
}


module.exports.creatNewAuthor = creatNewAuthor
module.exports.createNewBook = createNewBook
module.exports.allBooks = allBooks
module.exports.updateBookPrice = updateBookPrice
module.exports.authorsName = authorsName
