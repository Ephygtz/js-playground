//require the express module
const express = require('express');

//initializing the express app
const app = express();

//route for welcome page
app.get('/', function(req, res){
    //response for homepage
    res.send(`<h1>Welcome to Home Page</h1>`);
    //consoling amessage
    console.log('request made from home page');

});

//route 1
app.get('/speak/:name', function(req, res){
    //consoling request parameters
    // console.log(req.params);
    //variable animal to store request parameter
    let animal = req.params.name;

    if(animal === 'pig'){
        res.send(`<h1>${animal} says 'Oink'</h1>`);
    }else if(animal === 'dog'){
        res.send(`<h1>${animal} says 'Woof'</h1>`);
    }else if(animal === 'cat'){
        res.send(`<h1>${animal} says 'Meow'</h1>`);
    }else{
        res.send(`<h1>${animal} does not exist!</h1>`);
        }
        console.log('request made from /speak/:');
});

//route 2
app.get('/repeat/:mes/:count', function(req, res){
    //variables to store request parameters
    let name = req.params.mes;
    let count = req.params.count;
    if(count <= 0){
        res.send('<h2>What are you doing?!</h2>');
    }else{
        //repeat string using es6 function repeat
        res.send(`${name} `.repeat(count));
        
        //consoling a message
        console.log('request made from /repeat/:/:');
    }
});

/*always the last route. It returns a 404 when the url requested for is not on server */
app.get('*', function(req, res){
    //sending a response to client
    res.status(404).send('<h1>Check your url. Are you high?!</h1>');
    //consoling a message
    console.log('404 error!');
});

//setting the port the app will listen to
app.listen('6000', function(){
    //consoling a connection message
    console.log('server running on port 6000!'); //optional
}); 