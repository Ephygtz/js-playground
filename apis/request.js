//request package is used to make http requests

//require request
const request = require('request');

//making a request to google
//request accepts 2 params the endpoint and a callback fn that accepts 3 params error response and body
//the body is always a JSON. JSON are strings so they have to be parsed to be accessed
request("http://www.google.com", (err, response, body) =>{
    //a response is sent by the request if the request was successful and an error when not
    //chech for an error and if response is ok
    if(!err && response.statusCode == 200){
        // console.log(typeof body);  //the JSON body is a string
        // console.log(typeof response);
        console.log(`${response.statusCode} - ${response.statusMessage}`);
    }else{
        console.log(err);
    }
});

