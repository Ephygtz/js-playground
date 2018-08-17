//require express from node_modules
const express = require('express');

//initialize the express method. Makes the express app
const app = express();

//routing a get request on the server
app.get('/', function(req, res){
    //sending a response back to the user
    res.send('Greetings from mufasa.com');
    //consoling a message
    console.log(`A request made from ('/') home!`);
});

//routing a new request
app.get('/names', function(req, res){
    //sending a response back after request 
    res.send('<ul><li>Mufasa</li><li>Quil</li><li>Drex</li></ul>');
    //consoling a message
    console.log('A request made by names');
});

// route for a new request and the request
app.get('/contacts', function(request, response){
    //sending a response 
    response.send('<h1>Contact Us</h1>');
    //consoling a message
    console.log('a request made from contacts!');
});

//set the port the app listens to to access the server
app.listen('5050', function(){
    //consoling a message when the server runs.
    console.log('Server started. Running on port 5050!');
});