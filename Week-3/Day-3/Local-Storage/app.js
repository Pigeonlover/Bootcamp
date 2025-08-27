// LOCAL STORAGE

const pigeons = {
  pigeonBreed: "Modena",
  pigeonAge: 4,
  pigeonColour: "Ash red",
};

// Add data to local storage

// STEP 1: we need to turn this data into string

const strPigeons = JSON.stringify(pigeons);

// STEP 2: add the stringified data to local storage

localStorage.setItem("pigeons", strPigeons);

// STEP 3: read data from local storage
// Get the data from LS

const retrievedPigeons = localStorage.getItem("pigeons");

// Parse the stringified data to its original form

JSON.parse(retrievedPigeons);

// PS: if we don't stringify before saving to LS, the object won't be readable

//==========================================
////////////////////////////////////////////
// TO DELETE in LS

// localStorage.removeItem(strPigeons);

//
////////////////////////////////////////////
