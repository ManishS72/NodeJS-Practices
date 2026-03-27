
const express = require("express");
const app = express();

let port = 7070;

app.use(express.json());

const info ={
    name :"Rohit Kumar",
    id : 102,
    City :"Delhi"
};

app.listen(port, ()=>{
    console.log('Hi am Manish Sharma Here ${port}');
});

app.get('/',(req, res) =>{
   res.send("Hi, I am New Lernner Here! ");
});

app.get('/apple',(req, res) =>{
    res.send("I am Apple Here If you are Hungry So you can eat me ");
});

app.get('/banana', (req, res) =>{
    res.send("Banana Here you can make me Banana sake!");
});

app.get('/mango', (req, res) =>{
    res.send({
        name : "Manish",
        Id : 101,
        City : "Noida",
    });
});

app.get('/pineapple',(req, res) =>{
    res.send(info);
});

app.use((req, res) => {
    res.status(404).send("This page does not exist");
});

app.post('/', (req,res) => {
    res.send("Hello Pinuts, I am hungry Now so can i eat you");
});