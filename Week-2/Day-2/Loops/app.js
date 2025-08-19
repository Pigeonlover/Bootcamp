// TASK: render 3 images on the page

// 1) I need a container for the images
// 2) I need a loop to perform the repetitive task
// 3) I need the img source and alt text
// 4) I need to store the image data
// 5) I need to create and add the images to the DOM

// --------------------------------------------------

// 4)

let imgLinks = [];

let imgAlts = ["Poppies", "Branch", "Mushroom"];

// --------------------------------------------------

// 2)

const imageContainer = document.querySelector(".container");
for (let i = 0; i <= imgAlts.length; i++) {
  const pTag = document.createElement("p");
  pTag.textContent = imgAlts[i];
  imageContainer.appendChild(pTag);
}

// --------------------------------------------------
