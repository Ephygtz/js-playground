"use strict";
//Select
let lis = document.querySelectorAll("li");

for(let i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
		this.style.color = "red";
	});
	lis[i].addEventListener("mouseout", function(){
		this.style.color = "green";
	});
	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});

}
// lis.addEventListener("mouseover", function() {
// 	lis.style.color = "red";
// })

// lis.addEventListener("mouseout", function() {
// 	lis.style.color = "#000";
// })

