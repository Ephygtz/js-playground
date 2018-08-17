//require express from node_modules
const express = require('express');
//initialize express
const app = express();

//making a get request to a server
//get accepts 2 params route and callback fn
app.get('/', function(request, response){
    response.send('First App');
    console.log('Request Made from home!');
});

// route for a new request and the request
app.get('/contacts', function(request, response){
    response.send('<h1>Contact Us</h1>');
    console.log('a request made from contacts!');
});

//routing a new request
app.get('/about', function(request, response){
    response.send('Wahoooo!!');
    console.log('request made from about!');
});
//instructing the app to listen to the port the server is running from
app.listen('7070', function(){
    //consoling a message when server runs
    console.log('server running on port 7070!');
});
