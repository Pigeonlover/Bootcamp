// JS Loops

// Structure

// For loops

// for (initialisation; condition; afterthought) {
//   action;
// }

// Initialisation --> initial value where our loop is going to start from (usually this value is a 0 or 1)

// Condition --> makes sure the loop will stop at a specific point. Makes sure it doesn't go on forever.

// Afterthought --> this will change the initial value so we will eventually reach the end value.

// Example

for (let i = 1; i < 6; i++) {
  console.log(`Message ${i}`);
}

// For loops with arrays

let colours = ["Red", "Blue", "Yellow", "Green", "Orange"];

for (let i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

// ------------------------------------------------

// Favourite animals

let favouriteAnimals = ["Pigeons", "Cats", "Dogs", "Horses", "Ants"];

for (let i = 0; i < favouriteAnimals.length; i++) {
  console.log(favouriteAnimals[i]);
}

for (let animal of favouriteAnimals) {
  console.log(animal);
}

// While loop
let i = 0;
while (i < favouriteAnimals.length) {
  console.log(favouriteAnimals[i]);
  i++;
}

// ForEach() loop --> it is a method, a JS default function
favouriteAnimals.forEach((animal) => console.log(animal));

//------------------------------------------------

// Favourite colours

let favouriteColours = ["Maroon", "Navy blue", "Green", "Black"];

for (let i = 0; i < favouriteColours.length; i++) {
  console.log(favouriteColours[i]);
}

for (let colour of favouriteColours) {
  console.log(colour);
}

// While loop
let x = 0;
while (x < favouriteColours.length) {
  console.log(favouriteColours[x]);
  x++;
}

// ForEach() loop --> it is a method, a JS default function
favouriteColours.forEach((colour) => console.log(colour));

//------------------------------------------------

// Favourite numbers

let favouriteNumbers = [5, 10, 50, 100, 500, 1000];

for (let i = 0; i < favouriteNumbers.length; i++) {
  console.log(favouriteNumbers[i]);
}

for (let number of favouriteNumbers) {
  console.log(number);
}

// While loop
let y = 0;
while (y < favouriteNumbers.length) {
  console.log(favouriteNumbers[y]);
  y++;
}

// ForEach() loop --> it is a method, a JS default function
favouriteNumbers.forEach((number) => console.log(number));
