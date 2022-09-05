const Users = require("../models/userSignup");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const jwtSecret = "qwerty131";


const signUp = async(req, res) => {
  //console.log(req.body.emailId);
  try {
    if (req.body.password === req.body.confirmPassword) {
    const user = new Users({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        emailId : req.body.emailId,
        password :  await bcrypt.hash(req.body.password, 10),
        confirmPassword : await bcrypt.hash(req.body.confirmPassword, 10)
      });
      await user.save();
      res.send("User signup Successful");
    }else {
        res.send("password and confirm password do not match");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
  
}



const login = async (req, res) => {
    try {
      const { emailId, password } = req.body;
      if (!emailId || !password) {
        return res.status(400).send({ error: "Plz enter the data" });
      }
  
      const userLogin = await Users.findOne({ emailId: emailId });
      //  console.log(userLogin, "hello user");
      
      if (userLogin) {
        const validPassword = await bcrypt.compare(password, userLogin.password);
        if (!validPassword) {
          res.status(400).send({ error: "enter correct password" });
        } else {
          const token = jwt.sign({_id : userLogin._id}, jwtSecret);
          res.status(200).json({token :token , message: "User Login Successfully" });
        }}else {
        res.status(400).send({message: "invalid credentials"}); 
      }
  
    } catch (error) {
      res.status(400);
      console.log(error);
    }
  }

  module.exports = { signUp, login };