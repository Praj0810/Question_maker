const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

    emailId : { 
        type: String
    },
    subject : {
        type: String,
    },
    
    allQuestions : [{
        subject : {
            type: String,
            required : true,
            
        },
        questionType :{
            type : String
        },
        question: {
            type : String,
            required: true
        },

        answerA : { type : String, },
        answerB : { type : String, },
        answerC : { type : String, },
        answerD : { type : String, },
        answerBrief : { type : String},
        answerBool : { type : String, },
        answerMcQ : { type : String, },
        marks   : {type : Number},
        deleted : {type:Boolean, default : false}
    }]
},{ 
    date : { type :Date, default: false}
});

const Quests = new mongoose.model("Quests", questionSchema)

module.exports = Quests 