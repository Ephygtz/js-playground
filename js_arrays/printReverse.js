/*
Write a function printReverse() that takes an array as an argument and 
prints out the elements in the array in reverse order
	> Don't actually reverse the array itself
*/
"use strict";
let numbers = [1,3,7,3,4,9];

function printReverse(arr){
	if(!Array.isArray(arr)){
		console.log("Enter an array");
	}
	for(let i = arr.length; i >=0; i--){
		console.log(arr[i]);
	}
}

printReverse(numbers);
printReverse(56);
printReverse(["mufasa", 34, "Izzo", 420]);