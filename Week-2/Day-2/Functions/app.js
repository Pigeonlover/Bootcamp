// FUNCTIONS

// Task = I want to say "Hi"

// Structure -->

// function functionNameTask(optionalParameters) {
//   task;
// }

function sayHi(username) {
  console.log(`Hi ${username}!`);
}

// We need to call (invoke) the function for it to be executed

sayHi("Brave");

// Functions have a specific scope --> block scope/function scope

// If we want to take an element inside a function (with block scope) and make it accessible to the rest of the app (global scope), we can use return

function add(a, b) {
  return a + b;
}

console.log(add(5, 5));

// Another example
let c = 8;
let d = 5;

function subtract() {
  console.log(c - d);
}

subtract();
