// WORKSHOP

let person = {
  name: "Hadrian",
  age: 30,
  favouriteColour: "Yellow",
};

console.log(person);

// To display as a table -->
console.table(person);

// Accessing properties
console.log(person.name); //--> Hadrian
console.log(person.age); //--> 30
console.log(person.favouriteColour); //--> Yellow

// To add properties -->
person.favouriteMusic = "Classical";

console.table(person); //--> the new property has been added

//====================================================

// EXAMPLE 2

let car = {
  make: "BMW",
  model: "X1",
  colour: "white",
};

console.log(
  `Buy our new ${car.make} ${car.model}, now available in ${car.colour} for a limited time only!\n`
);

//====================================================

// EXAMPLE 3

let book = {
  title: "Into The Wild",
  author: "Erin Hunter",
  pageNumber: 250,
};

console.log(
  `The newest publication from the New York Times bestseller ${book.author} has just hit bookstores around the world! "${book.title}" is ${book.pageNumber} pages full of drama, mystery and intrigue. Don't miss out - get your copy now!\n`
);

//====================================================

// Complex objects

let blogPost = {
  title: "My Christmas Party",
  author: {
    name: "Hadrian",
    age: 30,
    favouriteColour: "Yellow",
  },
  tags: ["party", "festive", "christmas", "event"],
  content: "This is my blog post on how my Christmas party went!",
};

console.log(blogPost);

// Accessing properties in complex objects -->

console.log(blogPost.author.favouriteColour); //--> Yellow

console.log(blogPost.tags[2]); //--> christmas

// Loop to print out all the tags

for (let tag of blogPost.tags) {
  console.log(tag);
}
