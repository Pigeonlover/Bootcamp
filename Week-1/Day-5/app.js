console.log("Hello world!");

// This is a string
let firstName = "Flavia";

// -----------------------------------

// This is a number
let myNumber = 5;
let otherNumber = 15;

console.log(myNumber + otherNumber);

// -----------------------------------

//These are booleans
let isWarm = true;
let isRaining = false;

// -----------------------------------

//Template literals
console.log(`My name is ${firstName} and my lucky number is ${myNumber}.`);

// -----------------------------------

//Check type of a variable
console.log(typeof myNumber);

// -----------------------------------

//Undefined
let newVar;
console.log(typeof newVar);

// -----------------------------------

// We can compare values of different variables as such.
let a = 5;
let b = 8;
let compare = a > b;
console.log(compare);

// -----------------------------------

let x = 10;
let y = "10";
let equalCompare = x == y;
console.log(equalCompare); //--> true

let equalCompareTwo = x === y;
console.log(equalCompareTwo); // --> fasle

// == only compares the value. === compares for value AND data type.

// -----------------------------------

let myEmptyVar = null;
console.log(myEmptyVar);
