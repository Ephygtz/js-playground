//select element to manipulate
let background = document.querySelector("button");
//console.log(background);
//set an event listener
// background.addEventListener("click",function(){
//     document.body.style.backgroundColor="pink";

// });
let isPink = true;
background.addEventListener("click", function(){
    if(isPink){
        document.body.style.backgroundColor="purple";
    }else{
        document.body.style.backgroundColor="pink";
    }
    isPink = !isPink;
});
