// Conditionals

// if (condition) {
//   action;
// } //--> If condition is met, action will happen. If condition is not met, action will not happen.

// Example

if (5 > 2) {
  console.log("5 is bigger than 2");
}

// Another example

let apples = 5;
let pears = 3;

if (apples < pears) {
  console.log("You need more apples.");
} else if (pears < apples) {
  console.log("You need more pears.");
} else {
  console.log("Check your fruit bowl.");
} //--> Else still gives the user some feedback for any other conditions we haven't thought of/coded for.

// Example - checking age for movies

let age = 7;

if (age >= 18) {
  console.log("You can watch any movie!");
} else if (age < 18 && age >= 15) {
  console.log("You can only watch 15, 12, PG and U rated movies!");
} else if (age < 15 && age >= 12) {
  console.log("You can only watch 12, PG and U rated movies!");
} else if (age < 12 && age >= 8) {
  console.log("You can only watch PG and U movies!");
} else if (age < 8) {
  console.log("You can only watch U rated movies!");
} else {
  console.log("Please check with a staff member.");
}
