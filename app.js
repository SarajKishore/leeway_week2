const express = require('express');
const app=express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const cors= require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Importing Routes
const postRoutes= require('./routes/posts');
app.use('/posts',postRoutes);



mongoose.connect('mongodb+srv://saraj:gax123@rest.3jsnp.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("connected")
})

app.listen(4000);