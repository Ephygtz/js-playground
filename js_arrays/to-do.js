// console.log("Working");

let toDos = [];

//ask the user for input
let input = prompt("What do you want to do?\n 1. quit \n 2. list \n 3. new \n 4. delete");
// let sum = 1;
while(input !== "1"){
	//check users input
	if(input === "2"){
		listTodos();
	} else if(input ==="3"){
		addTodo();
	} else if(input === "4"){
		deleteToDo();
	}
		//
		input = prompt("What do you want to do next????? \n 1. quit \n 2. list \n 3. new \n 4. delete");
}
function listTodos(){
	// console.log(toDos);
	toDos.forEach(function(item, index){
		console.log(index +" :: " + item);
	});
}
function addTodo(){
	let toDo = prompt("Enter a new toDo");
		toDos.push(toDo);
		console.log("Added");
}

function deleteToDo(){
	let indexToDelete = prompt("Enter index to delete");
	toDos.splice(indexToDelete, 1);
	console.log("deleted");
}
console.log("Good bye");






