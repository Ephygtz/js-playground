//function to generate colors
// let colorsGen = function(){
//     let x = Math.floor(Math.random() * 255);
//     let y = Math.floor(Math.random() * 255);
//     let z = Math.floor(Math.random() * 255);
// // return `rgb(${x}, ${y}, ${z})`;     
// }

//an array that holds colors
let color = ['rgb(255, 0, 0)',
            'rgb(255, 255, 0)',
            'rgb(255, 255, 255)',
            'rgb(0, 255, 0)',
            'rgb(0, 255, 255)',
            'rgb(0, 0, 255)'];


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
let selectedColor = Math.floor(Math.random() * 5);

//setting the color to guess
guess.textContent = color[selectedColor];

//assigning colors to squares
for(let i = 0; i < 6; i ++){
    square[i].style.background = color[i];

//setting event listeners to squares
    square[i].addEventListener("click", function(){
        if(square[i].style.background === color[selectedColor]){
            alert("Perfect!");
        }else{
            alert("Try Again!");
            this.style.background = "#000";
        }
    });
}


