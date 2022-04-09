 const express = require('express');
const router = express.Router();
module.exports = router;
router.get('/movies', function(req,res){
    const arr = ["rang de basnasti","the shining", "lord of the rings", "batman begins" ] 
    console.log(arr)

    res.send(arr)
});
router.get('/movies/:indexNumber',function(req,res){
    const pmovie = ["rang de basnasti","the shining", "lord of the rings", "batman begins" ]
    let indexNumber = req.params.indexNumber
    if (indexNumber>pmovie.length - 1){
        res.send("movie are present")
    }
    else{
        res.send(pmovie[indexNumber])
    }

});
router.get('/films',function(req,res){
    let mdata=[ {
        "id": 1,
        "name": "The Shinin"},{
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
    console.log(mdata)
    res.send(mdata)
       
      
       
});
router.get('/films/:filmId',function(req,res){
    const nmovie=[{
        "id": 1,
        "name": "The Shining"}
        ,{
            "id":2,
            "name":"incedince"
        },{
            "id":3,
            "name":"Rangde bsanti"
        },{
            "id":4,
            "name":"finding nemo"
    }]
    let a;
    let n=req.params.nmovie
    for (let i=0;i<nmovie.length;i++){
        if(n>nmovie[i].id){
            a="Movie is no found with this id"
        }
        if(n==nmovie[i].id){
            a=nmovie[i]
        }
    }
    res.send(a)
});