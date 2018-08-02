"use strict";
let colors = [
	randomColors(), 
	randomColors(), 
	randomColors(), 
	randomColors(), 
	randomColors(), 
	randomColors()
];

let squares = document.querySelectorAll(".square");
let colorToGuess = document.querySelector("span");
let display = document.querySelector(".display");
let picked = colors[Math.floor(Math.random() * colors.length)];
console.log(picked);
// let selectColor = Math.floor(Math.random() * 5);
colorToGuess.textContent = picked;
// console.log(squares);

for(let i = 0; i < squares.length; i++){
	//Set colors on squares
	squares[i].style.background = colors[i];
	// let randInt = Math.floor(Math.random() * 5);

	// Event listener
	squares[i].addEventListener("click", function(){
		let clickedColor = squares[i].style.backgroundColor;
		console.log(clickedColor);
		if(clickedColor === picked){
			changeColorOnCorrectGuess(clickedColor);
			display.style.background = clickedColor;
		} else {
			this.style.background = "#000";
		}
	});
}

function randomColors() {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
	// return colors[r];
}

function changeColorOnCorrectGuess(color){
	for(let j = 0; j < squares.length; j++){
		squares[j].style.background = color;
	}
}