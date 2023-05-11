"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

// Which candies costs less than $4.00?
for (let i = 0; i < products.length; i++) {
  if (products[i].price <= 4.0) {
    console.log(`These cost less than $4.00: ${products[i].product}`);
  }
}

console.log(" ");

// Which candies has "M&M" its name?
for (let i = 0; i < products.length; i++) {
  if (products[i].product.indexOf("M&Ms") != -1)
    console.log(
      `The products that have "M&M" in it are "${products[i].product}"`
    );
}
// Do we carry "Swedish Fish"?
for (let i = 0; i < products.length; i++) {
    if (products[i].product)
}