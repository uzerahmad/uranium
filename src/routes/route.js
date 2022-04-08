const express = require('express');
const logger = require('../logger/logger.js')
const helpermodules = require('../util/helper')
const formatter= require('../validator/formatter')
const lodash = require('lodash')
// const Asiignment = require('../Assignment/Assi8Ap')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    logger.welcome()
    helpermodules.printDate()
    helpermodules.printMonth()
    helpermodules.printbatchinfo()
    formatter.printtrim()
    formatter.lowercase()
    formatter.uppercase()
});
router.get('/hello', function (req, res) {
    let month = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
    let subarray = lodash.chunk(month,3)
    console.log(subarray)
    // Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
    let oddnum = [1,3,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddnum))
    // p->2 move next problem
    let a=[3,5,7,9]
    let b=[3,8,4,1]
    let c=[1,2,3,4]
    let d=[9,8,5,3]
    let e=[9,8,7,6,5,4,]
    console.log(lodash.union(a,b,c,d,e))
    // p->3 key value pairs solution
    let keyvalue= [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(keyvalue))
    res.send('I am Mohd Uzer')
});    

module.exports = router;
// adding this comment for no 