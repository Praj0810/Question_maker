const express = require("express");
const  authToken  = require("../middleware/authToken");
const QuestionModel = require('../models/QuestionModel');


const addQuestions = async(req, res) => {
    console.log(req, "Running");
    let newQuest = new  QuestionModel({
        subject: req.body.subject,
        allQuestions : req.body.allQuestions,
        emailId : req.body.emailId 
    });
    if (authToken)
    newQuest.save((error) =>  {
        console.log(error);
        if (error){
            res.send({err:"Something went wrong", message: "Question paper does not exist"});
        } else {
            res.status(200).send({msg: "Question Successfully updated"});
        }

    });
}


//to get all questions 

const getAllQuestions = async(req, res) => {
    const emailId = req.body.emailId;
    console.log(emailId);
    QuestionModel.find({emailId : emailId} ,(error ,data) => {
        if(error) throw error;
        else{
            res.status(200).send({data:data});
        }
    });    
}
//to get all question of particular subject
const getAllQuesSubject = async(req,res) =>{
    const emailId = req.body.emailId;
    const subject = req.body.subject;
    QuestionModel.find({emailId: emailId, subject: subject},(error, data) => {
        if(error) throw error;
        else {
            res.status(200).send({data:data});
        }
    });
}

// to edit and delete the questions
const editAndDeleteQuestion = async(req, res) => {
    const paperId = req.body.paperId;
    const emailId = req.body.emailId;
    console.log(paperId);
    QuestionModel.updateOne(
        {emailId:emailId , _id: paperId},
        {$set : {allQuestions:  req.body}},
        (error) => {
            if (error) throw error;
            else {
                res.status(200).send({msg: "Question Updated"});
                console.log("done");
            }
        });
}

module.exports = {addQuestions, getAllQuestions, getAllQuesSubject, editAndDeleteQuestion};
