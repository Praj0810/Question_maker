const express = require('express');
const mongoose = require('mongoose');
const app = express();

//load routes
const UserDetails = require('./routes/UserDetails');
const QuestRout = require('./routes/QuestRout');

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//db connect
mongoose.connect('mongodb://localhost:27017/QuestionMaker').then(() => {
    console.log('DB Connection Successful')
}).catch(error => console.error('no connection', error));

//use routes
app.use('/UserDetails/',UserDetails);
app.use('/QuestRout/', QuestRout);


const PORT =  9000;
app.listen(PORT ,() => {
    console.log('Server is running', PORT);
})

