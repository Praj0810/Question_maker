const express = require("express");
const Router = express.Router();
const { authToken }  = require('../middleware/authToken');
const { addQuestions, getAllQuestions, getAllQuesSubject, editAndDeleteQuestion} = require('../controllers/questionCont');

Router.post("/addQuestions", authToken , addQuestions);
Router.get("/getAllQuestions/:emailId", authToken, getAllQuestions);
Router.get("/getAllQuesSubject/:emailId/:subject", authToken, getAllQuesSubject);
Router.put("/editAndDeleteQuestion/:emailId/:paperId", authToken, editAndDeleteQuestion);

module.exports = Router;