// requiring our modules
const express = require('express');

//initialize express
const app = express();

app.get("/", function(req, res){
    console.log("request from homepage");
    res.send("<h1>Hi there human!</h1>");
});


app.get("/about", function(req, res){
    console.log("request from about");
    res.send("<h2>About US</h2>");
});

//listening for a connection
app.listen("8080", function(){
    console.log("Server running from port 4000");
});