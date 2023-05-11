"use strict";

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

let sum = 0;

for (let i = 0; i < lunch.length; i++) {
  sum += lunch[i].price;
}

let tax = sum * 0.8;
let tip = sum * 0.18;
let subTotal = sum + tax + tip;
console.log(`My meal with the tip costs ${subTotal.toFixed(2)}`);
