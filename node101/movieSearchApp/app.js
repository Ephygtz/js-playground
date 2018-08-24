"use strict";
const express = require('express');
const request = require('request');
const ejs = require('ejs');
const app = express();

//Set our view engine
app.set("view engine", "ejs");


//define routes
app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    let movieToSearch = req.query.search;
    let url = `http://www.omdbapi.com/?apikey=2a0a6d9a&s=${movieToSearch}`;
    // console.log(movieToSearch);
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            let parsedData = JSON.parse(body);
            // console.log(parsedData);
            res.render("results", {data: parsedData});
        }
    });
    
});

//Initialize server
const port ="8040";
app.listen(port, function(){
    console.log(`app running on port ${port}`);
});