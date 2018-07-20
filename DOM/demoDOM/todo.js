//console.log("Connection!");

// let itemOne = document.querySelector("li"); //selects first list item
//console.log(itemOne);
//on mouse hover changes colour
// itemOne.addEventListener("mouseover", function(){
//     itemOne.style.color= "red";
// });
// //on mouse leave reverts back to original color
// itemOne.addEventListener("mouseout", function(){
//     itemOne.style.color= "black";
// });


//all lists
let lis = document.querySelectorAll("li");
// console.log(lis);

//loop to add and remove colour to list items on hover
for(let i = 0; i < lis.length; i++){
    //turns lists red
    lis[i].addEventListener("mouseover", function(){
        this.style.color="red";
    });
    //turns lists back to black
    lis[i].addEventListener("mouseout", function(){
        this.style.color="black";
    });

    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}