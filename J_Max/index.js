//require all packages
const express = require('express');

//initialize express app
const app = express()

const request = require('request');
// const ejs = require('ejs');

//using ejs render engine
app.set("view engine", "ejs");

//routing the home page url
app.get('/', (req, res) => {
    //rendering home from home.ejs
    res.render("home");
    console.log(`request made from home page`)
});

//routing result page url
app.get('/result', (req, res) =>{
    //the search form sends data to req.query. Use the name attribute to identify the input data eg title
    //get user input from the search form
    let userInput = req.query.title;

    //setting the user input to the endpoint
    let url = `http://www.omdbapi.com/?&apikey=7368f28e&s=${userInput}`;

    //make a request to OMDb to search (s-parameter in endpoint) avengers movies
    request(url, (err, response, body) =>{
        if(!err && response.statusCode == 200){
            
            //converting the json body to an object
            let resultBody = JSON.parse(body);

            //rendering result.ajs accepts 2 arguments. file name and data to pass to it
            res.render("result", {data: resultBody});

            // console.log(resultBody["Search"][0]["Title"]);
            //printing out all avengers movies titles but learning point is done on ejs
            // resultBody["Search"].forEach((item) => {
            //     console.log(item["Title"]);
            // }); 
        }
    });

    console.log(`request made from result page`)
});

const port = "3030";
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});