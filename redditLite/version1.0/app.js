//require express package
const express = require("express");

//initializing the express app
const app = express();

//require body-parser
const bodyParser =require("body-parser");

//using body-parser
app.use(bodyParser.urlencoded({extended : false}));

//using ejs rendering engine
app.set("view engine", "ejs");

//route to the home page
app.get("/", (req, res) => {
    res.render("home");
});


//port for app to listen to
const port = "7080";
app.listen(port, () => {
    console.log(`server running on port ${port}.`)
});


