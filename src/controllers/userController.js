const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try{
  
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
  }
  catch(err){
    return res.status(400).send({err})
  }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });


  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Uranium",
      organisation: "FUnctionUp",
    },
    "functionup-Uranium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
  }
  catch(err){
    return res.send({err})
  }

};

const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  let decodedToken = jwt.verify(token, "functionup-Uranium");
  if (!decodedToken)
    return res.status(400).send({ status: false, msg: "token is invalid" });

  let UserId = req.params.userId;
  let userDetails = await userModel.findById(UserId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" }); 

  res.status(200).send({ status: true, data: userDetails });
  }
  catch(err){
    return res.send({err})
  }
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });
} catch(err){
  return res.send({err})
}
};

const postMessage = async function (req, res) {
  try {
    let message = req.body.message
    let token = req.headers["x-auth-token"]
    if(!token) return res.status(404).send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-Uranium')

    if(!decodedToken) return res.status(400).send({status: false, msg:"token is not valid"})
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(404).send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
    return res.status(200).send({status: true, data: updatedUser})
  }
  catch(err){
    return res.send({err})
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
