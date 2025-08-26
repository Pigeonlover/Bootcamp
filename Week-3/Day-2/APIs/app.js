// TODO: get images from an API and render them on the DOM

// 1) Get images from the API

async function getFoxes() {
  const response = await fetch("https://randomfox.ca/floof/");
  const data = await response.json();
  // console.log(data);

  // Filtering data to the properties we need (eg, for this we only need the images). --> data wrangling
  const wrangledData = data.image;
  console.log(wrangledData);

  return wrangledData; // Makes it available outside of function scope
}

// 2) Render images on DOM

function createFoxImage(foxUrl) {
  const foxesContainer = document.getElementById("foxes-container");
  const foxImage = document.createElement("img");
  foxImage.src = foxUrl;
  foxImage.alt = "A randomly-generated fox image.";
  foxesContainer.appendChild(foxImage);
}

// TODO: put the data and image together

async function addFoxDataToImage() {
  // A control function
  const foxesData = await getFoxes();
  createFoxImage(foxesData);
}

addFoxDataToImage();
