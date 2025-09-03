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

//
//
//
//
//
//
//

// WORKSHOP

//
//
// REGULAR
function handleHobbySubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(hobbyForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
}

// ARROW FUNCTION --->
const handleHobbySubmit = (event) => event.preventDefault();
const formDataTemplate = new FormData(hobbyForm);
const formValues = Object.fromEntries(formDataTemplate);
console.log(formValues);
//
//
//

// REGULAR
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

// ARROW FUNCTION --->
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};
//
//
//

// REGULAR
function greet(name) {
  return `Hello ${name}`;
}

// ARROW FUNCTION --->
const greet = (name) => `Hello ${name}`;
//
//
//

// REGULAR
function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });
}

// ARROW FUNCTION --->
const handleSubmit = (event) => event.preventDefault();
const username = event.target.username.value;
const message = event.target.message.value;

console.log({ username: username, message: message });
//
//
//
