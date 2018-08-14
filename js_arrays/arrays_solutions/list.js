//checking if js is working
//console.log('connected')

//initializing an empty array
let lists = [];
//console.log(lists);

//capturing user input
let userInput = prompt("What do you want to do?\n1. new\n2. list\n3. delete \n4. quit");

//create a variable to store the numbering value
//let numbering = 1;

//a loop to keep prompting users for input
while(userInput !== "4"){

    //check if user input is "list" then lists all the items in todo list.
    if (userInput === "2"){ //using === checks for datatype and type of datatype similarities
        //a foreach loop to place numbering to objectives on lists array and prints them one after the other
        lists.forEach(function(item,index){//.forEach accepts a callback function
            console.log(index + " :: " + item);
        });
    }

    //check if user input is "new".
    else if( userInput === "1"){
    //prompt user for new objective 
    let objective = prompt("Enter new objective.");

    // adding the new objective to the array lists
    lists.push(objective);
    }

    //deleting todo items
     else if(userInput === "3"){
        lists.forEach(function(item,index = prompt("Delete todo item index?")){
            lists.splice(item,index);
            //console.log(lists);
            
        });
        
    }
    //reset the user input to accept new input
    userInput = prompt("What do you want to do next?\n1. new\n2. list\n3. delete \n4. quit");
}

console.log("Good bye");
