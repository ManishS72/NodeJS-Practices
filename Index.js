const express = require("express");
const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log('It is running ${port}');
});

app.use((req,res)=>{
    console.log("Request Recive");
    res.send("Hello I am New Lernner");
});