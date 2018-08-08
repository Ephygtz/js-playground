//using jquery to style html elements using their tag names and ids
$(document).ready(function(){ //this makes sure the js doesnt execute before page loads
    $("body").css("background-color", "pink");
    $("h1").addClass("header");//adds a class
    $("#btn4").clone().appendTo("#left-well");// clones an element and moves it
    $("button").css("color", "blue");//changes color
    $("#btn2").html("<em>myButton</em>");
    $("#btn5").html("<strong>Button</strong>");//places html inside element
    $("#btn4").text("JQuery"); //places text insode element
    $("#btn6").prop("disabled", true); //sets disabledproperty to true
    
});

//using js plain
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function(){
    alert("Button 1 Clicked");
});
//applying a class to html element
let h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function(){
    this.classList.toggle("header");
});

h1.addEventListener("mouseout", function(){
    this.classList.toggle("header");
});

