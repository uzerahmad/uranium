const jwt = require("jsonwebtoken")
const validateToken = async function(req,res,next){
   try{
        let token = req.headers['x-Auth-Token'] || req.headers['x-auth-token']

    if(!token){
        res.send({status:false,msg:"token must be present"})
    }
    let decodedToken = jwt.verify(token,"functionup-Uranium")
    if(!decodedToken){
        res.send({status:false,msg:"token is invalid"})
    }

    let userId = req.params.userId
    let decoded = decodedToken.userId

    if(userId != decoded) {
          return res.status(404).send("INVALID REQUEST!!")
    }
    
    }
    catch (error){
        return res.status(404).send({error})
    }
    next()
}
const validateUser = async function (req, res,next) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).send("No such user exists");
    }
    next()
}
module.exports.validateToken= validateToken
module.exports.validateUser=validateUser

         
 