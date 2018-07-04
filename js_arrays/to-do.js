// console.log("Working");

let toDos = [];

//ask the user for input
let input = prompt("What do you want to do?\n 1. quit \n 2. list \n 3. new");
let sum = 1;
while(input !== "1"){
	//check users input
	if(input === "2"){
		// console.log(toDos);
		
		toDos.forEach(function(i){
			console.log(sum +" " + i);
			sum++;
		});
	} else if(input ==="3"){
		let toDo = prompt("Enter a new toDo");
		toDos.push(toDo);
	} 
		//
		input = prompt("What do you want to do next????? \n 1. quit \n 2. list \n 3. new");
	
}
console.log("Good bye");






