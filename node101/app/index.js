/*npm init --createa a package.json file when writen  on console.
This package.json is where the dependencies for the app are saved including any modules used
This will initialize a new nodejs app from scratch.
npm i express --save  will save any used modules to package.json file.*/

//require express from package.json
const express = require('express');
//initializing the express app
const app = express(); 

app.get('/', function(req, res){
    res.status(200).send("<h1>Hi there welcome to my assignment!</h1>");
});
/*the full colon is placed before the parameter to match with user's params.
the other params without the : prefix remain the same in order to access the route */
app.get('/r/:title/comments/:id/:file_name', function(req, res){
    //in the callback fn the first parameter is request and second is response
    console.log(req.params); //returns an object with all the request params matched
    let request = req.params.title; //var to store the params to send response
    res.send(`<h2>${request} has been selected!</h2>`); //sendig response as a h2 element

});

/*make sure this is the last route otherwise all routes will redirect to it
this route is redirected to when a user enters any url thatis not routed on your server*/
app.get('*', function(req, res){
    res.send('404', '<h1>What are  you doing</h1>');
    console.log('Wildcard route match');
});

app.listen('9090', function(){
    console.log('server running on port 9090');
});