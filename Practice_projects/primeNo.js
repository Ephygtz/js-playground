"use strict";
const checkForPrimeRange = new Array(200);
// console.log(checkForPrimeRange.length);

//function to check for prime in a range
function getPrimeRange(from, to){

	for(let i = from; i <= to; i++){
		if (i===2 || i===3){
            console.log(i);
		} else if((i%2===0) || (i%3===0) ){
		   continue;
	    }else{
		   console.log(i);
	   }
	}
}

getPrimeRange(1, 20);
getPrimeRange(100, 200);
//getPrimeRange(300, 1000);

// for(let i=2; i < 100; i++){
// 	if((i%2===0) || (i%3===0)){
// 		continue;
// 	}
// 		console.log(i);
// }