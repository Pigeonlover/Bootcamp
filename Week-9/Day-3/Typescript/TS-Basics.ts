//
// File extension is .ts
// Next file extension is .tsx

// ==================================

// VARIABLES

// TS will infer the data type you store in a variable, AND it will enforce it --> type inference
// TS has a type system --> guidelines of types, based on the shape of types
let myAge = 25; //integer, number

// myAge = "Brave"; // Error

// Type annotation = how we tell TS what type of variable we will store

let myBetterAge: number = 25;

// Data types in TS are similar to the ones in JS --> primitive and complex data types

let myName: string = "Bravefoot";

let isRaining: boolean = false;

// In complex data types, we also need to specify the types of the inner items

let favColours: string[] = ["Maroon", "Blue", "Green"];

let favFoods: Array<string> = ["Rice", "Yogurt", "Lamb"];

// What if we have an array with different data types in it?

let favThings: (number | string | boolean)[] = ["sun", 7, "nintendo", true];

let favThingsTwo: Array<string | number | boolean> = ["water", false, 50];

// Objects

let staff: { staffName: string; location: string; role: string } = {
  staffName: "Bertie",
  location: "secret",
  role: "TA",
};

// If we have to re-use some data annotations, we could declare it separately as a type

type staffType = {
  staffName: string;
  location: string;
  role: string;
  contract?: string;
};

// Now give this type to any other object that needs it
let staffTwo: staffType = {
  staffName: "Joe",
  location: "unknown",
  role: "TA",
};

// ?: Optional chaining = if we want to have a property in our declared type that may or may not be part of an object, we could make it 'optional'. The optional chaining operator can only be used with objects!

// ===============================

// FUNCTIONS

let myVariable: any = null; // can be anything! It is dangerous to overuse it.

function add(a: number, b: number) {
  return a + b;
}

// When we declare an empty variable, the type is 'undefined'.

let randomVar;

randomVar = 10;
randomVar = true;
randomVar = "Hello";
randomVar = null;

// ==================================

// UNION TYPES
// Custom types that you create to have more control over your data

type schoolSubjects = "maths" | "english" | "science" | "art";

let mySubjects: schoolSubjects = "art";

//

type menu = {
  menuItem: "food" | "drink" | "snack";
  price: number;
  period: "morning" | "afternoon" | "eveninf";
  reviews?: string; // optional property
};

const myBreakfast: menu = {
  menuItem: "food",
  price: 5,
  period: "morning",
};
