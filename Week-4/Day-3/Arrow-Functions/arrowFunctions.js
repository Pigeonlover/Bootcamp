// Examples

// Regular syntax

function add(a, b) {
  return a + b;
}

// Ways to write them:

const add = (a, b) => {
  return a + b;
};

//

const add = (a, b) => a + b; //If return keyword is used, the curly brackets are needed. If you don't want the curly brackets, you can take away the return keyword (it is implied).

//
//
//
//
//
//
//

// Example 2 - callback function

const array = [1, 2, 3, 4, 5];

array.forEach(function (item) {
  console.log(item);
});

// Way to write it as an arrow function
array.forEach((item) => console.log(item));

//
//
//
//
//
//
//

// Preference: if the function has a name, write it as a regular function. For a callback/anonymous function, use an arrow function.
