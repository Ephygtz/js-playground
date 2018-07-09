/* 
* Write a function isUniform() which takes an array as an argument and 
  returns true if all the elements in the array are identical.
	> e.g `isUniform([23,23,23,23]) //true` 
	`isUniform([23,23,10,23]) //false`
*/

"use strict";
function isUniform(arr){
	let first = arr[0];
	//Trying using a forEach
	// arr.forEach(function(item){
	// 	if(item !== uniform){
	// 		return false;
	// 	}
	// 	return true;
	// });
	//Using a for loop
	for(let i = 1; i <= arr.length; i++){
		if(arr[i] !== first){
			console.log("Not uniform");
			return false;
		}
	}
	return true;
	console.log("uniform array");
}

isUniform([1,1,1,1,1]);
// isUniform(["me", "me", "me"]);
// isUniform([45, "45", "no"]);