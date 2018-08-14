//faker generates huge amounts of random data on the browser or js
let fake = require("faker"); //requires package faker from node_module
// let randomName = fake.name.findName(); //generating random name
// console.log(randomName); //display the name

// let product = fake.commerce.productName();
// console.log(product);2

// let currency = fake.finance.currencySymbol();
// console.log(currency);

// let pic = fake.image.avatar();
// console.log(pic);

// let email = fake.internet.email();
// console.log(email);

//excersise 3
for(let i =1; i <= 15; i++){
    let productName = fake.commerce.productName(); //generating a random product
    let cost = fake.commerce.price(); //generating a random cost
    console.log(`${productName} : Ksh ${cost}`); //output both product and cost
}
