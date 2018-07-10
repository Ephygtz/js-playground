let books = ["book1","book2","book3","book4"];

function reverse(array){
    if(!Array.isArray(array)){console.log("Enter array!");}else{
    let counter = books.length;
    while(counter >=0){
        console.log(books[counter]);
        counter--;
    }
}
}

// reverse(books);
reverse("yea");