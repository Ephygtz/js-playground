"use strict";
// let colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 0, 255)",
// 	"rgb(0, 255, 255)",
// 	"rgb(255, 255, 255)",
// 	"rgb(255, 0, 255)",
// ];
let colors = function() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	return `rgb(${r},${g},${b})`;
}




let squares = document.querySelectorAll(".square");
let colorToGuess = document.querySelector("span");

// let selectColor = Math.floor(Math.random() * 5);
colorToGuess.textContent = colors();

for(let i = 0; i < squares.length; i++){
	//Set colors on squares
	// let randInt = Math.floor(Math.random() * 5);
	let rand = colors();
	squares[i].style.background = rand;

	//Event listener
	squares[i].addEventListener("click", function(){
		let clickedColor = squares[i].style.background;
		if(clickedColor === rand){
			alert("Perfect");
		} else {
			this.style.background = "#000";
		}
	});
}