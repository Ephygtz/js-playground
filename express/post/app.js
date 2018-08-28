//requiring all paackages
const express = require("express");

//initialize the express app
const app = express();

const bodyParser = require("body-parser");

//setting view engine
app.set("view engine", "ejs");

//using body-parser
app.use(bodyParser.urlencoded({extended : false}));

//array with current skills
let skills = ["JavaScript", "Python", "Java"];


//routing the home page
app.get("/", (req, res) => {
    res.render("home", {mySkills : skills});
    console.log(`request made from home page`);
});


//routing the post method
app.post("/skills", (req, res) => {
    //capturing user input
    let newSkill = req.body.skill;

    //adding new skill from form to array of skills
    skills.push(newSkill);

    //redirecting to the homepage which will have an updated list of skills
    res.redirect("/");
    console.log(`redirected`);
});


//setting the port to listen to
const port = "9090";
app.listen(port, () => {
    console.log(`server running in port ${port}`);
})