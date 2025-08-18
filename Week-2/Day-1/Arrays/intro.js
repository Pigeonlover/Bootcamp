// Arrays

// First, store the array in a variable

let pigeonBreeds = [
  "Archangel",
  "Modena",
  "Chinese Owl",
  "Fantail",
  "Frillback",
];

// An array can have multiple data types stored in one

let exampleArray = ["nature", 10, null];

// Length = total amount of items in an array
// For example, the length of pigeonBrreds is 5

console.log(pigeonBreeds.length);

// Index = a number value that represents in which position an item is in the array

// Index values start counting at 0, so the first item will be assigned index 0

pigeonBreeds[0]; // --> Archangel
pigeonBreeds[3]; // --> Fantail

// To target the last item in an array, we can use -1. It gives you the index number value
console.log(pigeonBreeds.length - 1); // --> 4

// To give the actual item in the last index value:
console.log(pigeonBreeds[pigeonBreeds.length - 1]); // --> Frillback
