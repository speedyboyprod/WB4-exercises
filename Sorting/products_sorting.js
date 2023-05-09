"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.95 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Twix", price: 2.5 },
  { product: "Snickers", price: 1.95 },
  { product: "Hersheys kiss", price: 0.5 },
];

products.sort(function (a, b) {
  if (a.product < b.product) return -1;
  else if (a.product == b.product) return 0;
  else return 1;
});

for (let i = 0; i < products.length; i++) {
  console.log(products[i].product);
}

console.log("------");

products.sort(function (a, b) {
  return a.price - b.price;
});

for (let i = 0; i < products.length; i++) {
  console.log(products[i].price);
}
