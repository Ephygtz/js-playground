//an array that holds colors
let color = [
    colorGuess(),colorGuess(),colorGuess(),colorGuess(),colorGuess(),colorGuess()
];


//loop to populate color array. Has 1000 colors
// for(let i = 0; i <1000; i++){
//     let string = colorsGen();
//     color.push(string);
//     // console.log(typeof(color));
// }

//selecting html elements
let guess = document.querySelector("span");
let square = document.querySelectorAll(".square");

//generating random color index to test
let selectedColor = color[Math.floor(Math.random() * 5)];
// console.log(selectedColor+'is this!');

//setting the color to guess
guess.textContent = selectedColor;

//assigning colors to squares
for(let i = 0; i < 6; i ++){
    square[i].style.background = color[i];

//setting event listeners to squares
    square[i].addEventListener("click", function(){
        let shade = this.style.background;
        // console.log(shade +" is this!");
        if(shade === selectedColor){
            alert("Perfect!");
            win(selectedColor);
        }else{
            alert("Try Again!");
            this.style.background = "#000";
        }
    });
}
//function to generate 6 random colors
function colorGuess(){
    let rand1 =Math.floor(Math.random() * 255);
    let rand2=Math.floor(Math.random() * 255);
    let rand3 =Math.floor(Math.random() * 255);
    console.log( `rgb(${rand1}, ${rand2}, ${rand3})`);
    return `rgb(${rand1}, ${rand2}, ${rand3})`;

}
//function to set color of all sqaures to the correct color guess
function win(color){
    for(let i = 0; i < square.length; i++){
        square[i].style.background = color;
    }
}