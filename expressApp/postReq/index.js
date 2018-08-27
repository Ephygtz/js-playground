"use strict";
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

//Array with current skills
let currentSkills = ["HTML", "CSS", "JS", "PHP", "JAVA"];

app.get("/", function(req, res){
    res.render("home", {skills: currentSkills});
});

app.post("/skills", function(req, res){
    let addSkill = req.body.newSkill;
    currentSkills.push(addSkill);
    res.redirect("/");
});




const port = "2021";
app.listen(port, function(){
    console.log(`Server running on ${port}`);
});
