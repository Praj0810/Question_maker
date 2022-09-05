const express = require("express");
const Router = express.Router();
const { signUp, login }= require('../controllers/userLoginSignupCont');


Router.post("/signUp", signUp);
Router.post("/login", login);


module.exports = Router;
