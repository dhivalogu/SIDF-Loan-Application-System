const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const credential = require("./models/credential");
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://dbadmin:dbadmindhiva@cluster0.uaggm.mongodb.net/sidf?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected Successfully");
  });

const Credential=require('./models/credential');
const crInfo=require('./models/crLicense');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PATCH,DELETE,OPTIONS"
    );
    next();
  });



app.post('/login',(req,res,next)=>
{
    console.log(req.body.user_id);
    console.log(req.body.password);
    Credential.findOne({user_id:req.body.user_id,password:req.body.password},(err,docs)=>
    {
        if(docs!=null)
        {
            res.json({message:'Login Successfull',code:'1'});
        }
        else
        {
            res.json({message:'User ID/Password Wrong',code:'0'});
        }
    })
    
})

app.post('/getLicenseInfo',(req,res,next)=>{

 crInfo.find((err,docs)=>{
  res.json(docs);
 })
 

})
module.exports=app;