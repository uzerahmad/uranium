const express = require('express');

const router = express.Router();

let players = [
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
        "name": "Rahul",
        "dob": "1/1/1985",
        "gender": "male",
        "city": "punjab",
        "sports": [
            "cricket"
        ]
    },
    {
        "name": "Sumit",
        "dob": "1/1/1983",
        "gender": "male",
        "city": "ranchi",
        "sports": [
            "cricket"
        ]
    },
    {
        "name": "ronaldo",
        "dob": "1/1/1981",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "footbal"
        ]
    },
    {
        "name": "Abhi",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "dagestan",
        "sports": [
            "mma"
        ]
    }

];
// const playerEntry =require('../controllers/playerEntry');
    router.post('/players', function (req, res) {

        //LOGIC WILL COME HERE
        for (let i = 0; i < players.length; i++) {
            if (req.body.name === players[i].name) {
                return res.send({msg:"Player already rejister try diffrent name"})

            }
        }
        let newPlayer = req.body
        players.push(newPlayer)
        console.log(newPlayer)

        res.send({ UpdatedList: players }) 


        // res.send(  { data: players , status: true }  )
    })
module.exports = router;
