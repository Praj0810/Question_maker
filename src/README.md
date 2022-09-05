-----------------------------------------------------------------------------------------------
SignUp API

post : http://localhost:8080/UserDetails/signUp

req.body :  userSignUp schema

{
    "firstName" : "Prajakta",
    "lastName" : "Mohite",
    "emailId" : "pmohite@gmail.com",
    "password" : "qazwsx",
    "confirmPassword" : "qazwsx" 
}
MongoDB Data Storage:
_id
6315cecb98af43e3a52e31c0
firstName
"Prajakta"
lastName
"Mohite"
emailId
"pmohite@gmail.com"
password
"$2b$10$GCn9MWdS.obJtKAI.HN8ue1.V.z6FGbq28GFUtNT4WUqxU70qwNCy"
confirmPassword
"$2b$10$r.rcnQ5SST3WLbzBTQU/nu8jFNwQ767VEA2r3WeMAAetOg4KoyQsO"
__v
0
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

login API:

post:http://localhost:8080/UserDetails/login

req.body.params

{
    "emailId" : "pmohite@gmail.com",
    "password" : "qazwsx"
}

Auth-token:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE1Y2VjYjk4YWY0M2UzYTUyZTMxYzAiLCJpYXQiOjE2NjIzNzU1MDR9.qWg4fDrRzNvEBU1JWzd-MrREyE3kKx-dR-CPniJ2UEs",
    "message": "User Login Successfully"
}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
add questions to paper : API

post: http://localhost:8080/QuestRout/addQuestions

auth-token: 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE1Y2VjYjk4YWY0M2UzYTUyZTMxYzAiLCJpYXQiOjE2NjIzNzY4NzJ9.1v3kJvE_ddTo_kl9sl_JKTgG5E_odrRh8o27oFAls_Q

{
    "emailId" : "pmohite@gmail.com",
    "subject": "Maths",
    
    "allQuestions" : [{
        "subject" : "Maths",
        "questionType" :"True or False",
        "question": "Q123",

        "answerA" : null,
        "answerB" : null,
        "answerC" : null,
        "answerD" : null,
        "answerBrief" :null,
        "answerBool": "False",
        "answerMcQ" : null,
        "marks"   : 2 ,
        "deleted" : false
    },
    {
        "subject" : "Maths",
        "questionType" :"MCQ",
        "question": "Q1",

        "answerA" : "Abcd" ,
        "answerB" : "pqrs",
        "answerC" : "xyz",
        "answerD" : "jkl",
        "answerBrief" :null,
        "answerBool": null,
        "answerMcQ" : "Abcd",
        "marks"   : 4 ,
        "deleted" : false
    },
    {
        "subject" : "Maths",
        "questionType" :"Brief Questions",
        "question": "QA",

        "answerA" : null,
        "answerB" : null,
        "answerC" : null,
        "answerD" : null,
        "answerBrief" :"asdfghjkl",
        "answerBool": null ,
        "answerMcQ" : null,
        "marks"   : 10 ,
        "deleted" : false
    }
    ]
}

Mongodb Database storage:
_id
6315dec024866ce038fae95b
emailId
"pmohite@gmail.com"
subject
"Maths"

allQuestions
Array

0
Object
subject
"Maths"
questionType
"True or False"
question
"Q123"
answerA
null
answerB
null
answerC
null
answerD
null
answerBrief
null
answerBool
"False"
answerMcQ
null
marks
2
deleted
false
_id
6315dec024866ce038fae95c

1
Object
subject
"Maths"
questionType
"MCQ"
question
"Q1"
answerA
"Abcd"
answerB
"pqrs"
answerC
"xyz"
answerD
"jkl"
answerBrief
null
answerBool
null
answerMcQ
"Abcd"
marks
4
deleted
false
_id
6315dec024866ce038fae95d

2
Object
subject
"Maths"
questionType
"Brief Questions"
question
"QA"
answerA
null
answerB
null
answerC
null
answerD
null
answerBrief
"asdfghjkl"
answerBool
null
answerMcQ
null
marks
10
deleted
false
_id
6315dec024866ce038fae95e
__v
0


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
to get all questions API:

GET:http://localhost:9000/QuestRout/getAllQuestions/tr@gmail.com

//Questions related emailId: 
{
    emailId: tr@gmail.com
}
OUTPUT of API:
{"data":[{"_id":"6315e615b9ab7e4353fe6a2e","emailId":"tr@gmail.com","subject":"history","allQuestions":[{"subject":"history","questionType":"True or False","question":"Q1","answerA":null,"answerB":null,"answerC":null,"answerD":null,"answerBrief":null,"answerBool":"False","answerMcQ":null,"marks":2,"deleted":false,"_id":"6315e615b9ab7e4353fe6a2f"},{"subject":"history","questionType":"MCQ","question":"Q1","answerA":"Abcd","answerB":"pqrs","answerC":"xyz","answerD":"jkl","answerBrief":null,"answerBool":null,"answerMcQ":"xyz","marks":4,"deleted":false,"_id":"6315e615b9ab7e4353fe6a30"},{"subject":"history","questionType":"Brief Questions","question":"QA1","answerA":null,"answerB":null,"answerC":null,"answerD":null,"answerBrief":"asdfghjkl","answerBool":null,"answerMcQ":null,"marks":10,"deleted":false,"_id":"6315e615b9ab7e4353fe6a31"}],"__v":0}]}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
to get all Questions of a particular Subject API

GET: http://localhost:9000/QuestRout/getAllQuesSubject/tr@gmail.com/history

Details to fetch the data:
{
    "emailId" : "tr@gmail.com",
    "subject" : "history"
}

Subject wise : questions of particular EmailId
{"data":[{"_id":"6315e615b9ab7e4353fe6a2e","emailId":"tr@gmail.com","subject":"history","allQuestions":[{"subject":"history","questionType":"True or False","question":"Q1","answerA":null,"answerB":null,"answerC":null,"answerD":null,"answerBrief":null,"answerBool":"False","answerMcQ":null,"marks":2,"deleted":false,"_id":"6315e615b9ab7e4353fe6a2f"},{"subject":"history","questionType":"MCQ","question":"Q1","answerA":"Abcd","answerB":"pqrs","answerC":"xyz","answerD":"jkl","answerBrief":null,"answerBool":null,"answerMcQ":"xyz","marks":4,"deleted":false,"_id":"6315e615b9ab7e4353fe6a30"},{"subject":"history","questionType":"Brief Questions","question":"QA1","answerA":null,"answerB":null,"answerC":null,"answerD":null,"answerBrief":"asdfghjkl","answerBool":null,"answerMcQ":null,"marks":10,"deleted":false,"_id":"6315e615b9ab7e4353fe6a31"}],"__v":0}]}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
to update and delete the question API:

PUT:http://localhost:9000/QuestRout/editAndDeleteQuestion/tr@gmail.com/6315e615b9ab7e4353fe6a31

Input to the API:
{
    "emailId" : "tr@gmail.com",
    "paperId" : "6315e615b9ab7e4353fe6a31",
    "allQuestions": [
                {
                    "subject": "history",
                    "questionType": "True or False",
                    "question": "Q1",
                    "answerA": null,
                    "answerB": null,
                    "answerC": null,
                    "answerD": null,
                    "answerBrief": null,
                    "answerBool": "False",
                    "answerMcQ": null,
                    "marks": 2,
                    "deleted": false,
                    "_id": "6315e615b9ab7e4353fe6a2f"
                },
                {
                    "subject": "history",
                    "questionType": "MCQ",
                    "question": "Q1",
                    "answerA": "Abcd",
                    "answerB": "pqrs",
                    "answerC": "xyz",
                    "answerD": "jkl",
                    "answerBrief": null,
                    "answerBool": null,
                    "answerMcQ": "xyz",
                    "marks": 4,
                    "deleted": false,
                    "_id": "6315e615b9ab7e4353fe6a30"
                },
                {
                    "subject": "history",
                    "questionType": "Brief Questions",
                    "question": "QA1",
                    "answerA": null,
                    "answerB": null,
                    "answerC": null,
                    "answerD": null,
                    "answerBrief": "asdfghjkl",
                    "answerBool": null,
                    "answerMcQ": null,
                    "marks": 10,
                    "deleted": false,
                    "_id": "6315e615b9ab7e4353fe6a31"
                }
            ]
}

OUTPUT:
{
    "msg": "Question Updated"
}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++