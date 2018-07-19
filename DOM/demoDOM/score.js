
let gameOver = false;
let winningScore = 7;
let disp1 = document.querySelector("#ply1");
let disp2 = document.querySelector("#ply2");
let ply1 = document.querySelector("#btn1");
let ply2 = document.querySelector("#btn2");
let reset = document.querySelector("#reset");

let counter = 0;
ply1.addEventListener("click",function(){
    if(!gameOver){
        counter++;
        disp1.innerText=counter;
        if(counter === winningScore){
            gameOver = true;
        }
    }
});

let count = 0;
ply2.addEventListener("click",function(){
    if(!gameOver){
        count++;
        disp2.innerText=count;
        if(count === winningScore){
            gameOver = true;
        }
    }
});

reset.addEventListener("click",function(){
    //resetting displays
    disp1.innerText=0;
    disp2.innerText=0;
    //resetting the counters to prevent score board from continuing after reset
    count = 0;
    counter = 0;
    //resetting game state
    gameOver = false;
});

