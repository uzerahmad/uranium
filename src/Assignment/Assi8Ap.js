
// {
//     "name": "manish",
//     "dob": "1/1/1995",
//     "gender": "male",
//     "city": "jalandhar",
//     "sports": [
//     "swimming"
    // ]
    // }
    // e.g. the players array would look like this:
    // router.get('/test-me', function (req, res) {
    let players =
    

       [
           {
               "name": "manish",
               "dob": "1/1/1995",
               "gender": "male",
               "city": "jalandhar",
               "sports": [
                   "swimming"
               ]
           },
           {
               "name": "gopal",
               "dob": "1/09/1995",
               "gender": "male",
               "city": "delhi",
               "sports": [
                   "soccer"
               ]
           },
           {
               "name": "lokesh",
               "dob": "1/1/1990",
               "gender": "male",
               "city": "mumbai",
               "sports": [
                   "soccer"
               ]
           },
       ]
     
    
    // Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)
    
    // NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits)
    
    
    
    // —----------------
    
    
    // The file inside routes would look like this:
    
    const express = require('express');
    const router = express.Router();
     
    let players =
       [
           {
               "name": "manish",
               "dob": "1/1/1995",
               "gender": "male",
               "city": "jalandhar",
               "sports": [
                   "swimming"
               ]
           },
           {
               "name": "gopal",
               "dob": "1/09/1995",
               "gender": "male",
               "city": "delhi",
               "sports": [
                   "soccer"
               ],
           },
           {
               "name": "lokesh",
               "dob": "1/1/1990",
               "gender": "male",
               "city": "mumbai",
               "sports": [
                   "soccer"
               ],
           },
       ]
     
       router.post('/players', function (req, res) {
     
           //LOGIC WILL COME HERE
           let a=req.body.name
           for (let i=0;i<players.length;i++)
           {
               if (players[i].name!==a){
                   players.push(a)
                 }
                 else {
                     console.log("player alredy ")
                 }
           }
           
           res.send(  { data: players , status: true }  )
       })
      
    module.exports = router;
    