"use strict";

function average(arr){
	//check if param is array
	if(Array.isArray(arr)){
		let ttl =  0;
		//sum all items
		arr.forEach(function(item){
			ttl += item;
		});
		//find average
		let avg = ttl / arr.length;
		//round off 
		return Math.round(avg);
	}
	return "Enter a valid array";
	

}

let nums = [56, 78, 90];
console.log( "is " + average(nums));

console.log(average([2, 2, 2]));
console.log(average(" "));
console.log(average([90, 98, 89, 100, 86, 94]));
console.log(average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]));

