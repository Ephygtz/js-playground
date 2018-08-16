"use strict";
let faker = require('faker');


for(let i = 1; i <= 15; i++){
	console.log(`${i}. ${faker.commerce.productName()} : Ksh ${faker.commerce.price()}`);
}