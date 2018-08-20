//require request
const request = require("request");

//making a request to yahoo weather api to get current weather in San Diego
request("https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
(err, response, body) => {
    //checking if there is an error
    if(!err && response.statusCode == 200){
        // console.log(typeof body);
        //convert the JSON body to an object
        let res = JSON.parse(body);
        // console.log(res);
        let condition = res["query"]["results"]["channel"]["item"]["condition"]["text"];
        console.log(`The weather in San Diego currently is ${condition}.`);
    }else{
        console.log(err);
    }
});