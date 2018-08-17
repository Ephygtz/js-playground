"use strict";
const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hi there, Welcome to the Homepage</h1>");
});

app.get("/r/:title/comments/:4567/:article_name", function(req, res){
    let title = req.params.title;
    res.send(`<h2>You are on ${title}</h2>`);
})





//Wildcard route match
app.get("*", function(req, res){
    res.send("<h1>page 404...Are you high??</h1>");
});


// Start server
app.listen("3020", function(){
    console.log("App from port 3020");
});