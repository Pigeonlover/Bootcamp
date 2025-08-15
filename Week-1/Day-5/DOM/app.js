// To examine the object
console.log(document);

//How to manipulate the DOM

//STEP 1 : select element

const myh2 = document.getElementById("subtitle"); //--> specifically for ID elements
console.log(myh2);

// querySelector will select HTML elements by ID, class or element name.

const mainContainer = document.querySelector(".container");

//----------------------------------------

//STEP 2 : make changes to the selected element

myh2.textContent = "This is new text!";

//----------------------------------------

//To create a new element

const newImage = document.createElement("img");
newImage.src =
  "https://cdn.pixabay.com/photo/2022/12/11/01/18/bird-7648024_1280.jpg";
newImage.alt = "A picture of a beautiful pigeon.";
newImage.width = "500";

//STEP 3: appending element to DOM

mainContainer.appendChild(newImage);

// document.body.style.fontFamily = "monospace";

// document.body.style.backgroundColor = "beige";

//----------------------------------------

// Removing elements
const myH1 = document.querySelector("h1");
myH1.remove();
