// EVENTS

//Interactive DOM element

const eventButton = document.getElementById("eventButton");

// Event handler: the action that will trigger when user interacts with the event
function handleClick() {
  console.log("Button was clicked!");
}

// Event listener: the action the user will do to trigger the handler (eg, click)
eventButton.addEventListener("click", handleClick); //--> Takes two arguments: the action needed, and the event handler (the function in this case)

//====================================

//Task: when the user clicks on the button, a paragraph appears on the page

const paragraphButton = document.getElementById("paragraphButton");

function handleCreatePar() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "Thanks for clicking.";
  //Append element to the DOM
  const paragraphContainer = document.getElementById("paragraph-container");
  paragraphContainer.appendChild(paragraph);
}

paragraphButton.addEventListener("click", handleCreatePar);

//==================================================

// WORKSHOP
