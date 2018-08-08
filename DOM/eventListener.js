//Select element to manipulate
let button = document.querySelector("#btn");

	var isRed = false;
//Add an event listener
button.addEventListener("click", function(){
	if(!isRed){
		//Manipulate
		document.body.style.background = "red";
	} else {
		document.body.style.background = "blue";
	}
	isRed = !isRed;
	// document.body.classList.toggle("tog");
	
});


//Select elements
let playerOne = document.querySelector("#p1");
let playerTwo = document.querySelector("#p2");
let reset = document.querySelector("#reset");
let playerOneDisplay = document.querySelector(".p1d");
let playerTwoDisplay = document.querySelector(".p2d");
let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 7;
let gameOver = false;

//Ad listeners and manipulate
playerOne.addEventListener("click", function(){
	if(!gameOver){
		playerOneScore++;
		playerOneDisplay.innerText = playerOneScore;
		if(playerOneScore === winningScore){
			gameOver = true;
		}
	}

});

playerTwo.addEventListener("click", function(){
	if(!gameOver){
		playerTwoScore++;
		playerTwoDisplay.innerText = playerTwoScore;
		if(playerTwoScore === winningScore){
			gameOver = true;
		}
	}

});

reset.addEventListener("click", function(){
	playerOneDisplay.innerText = 0;
	playerTwoDisplay.innerText = 0;
	playerOneScore = 0;
	playerTwoScore = 0;
	gameOver = false;

});