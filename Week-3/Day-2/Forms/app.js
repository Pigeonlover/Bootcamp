// FORMS

// TODO: add an event to the form submission
// Event listener

const form = document.getElementById("user-form");
form.addEventListener("submit", handleSubmit);

// Event handler

// TODO: handle the form data

function handleSubmit(event) {
  // Prevent default behaviour of the submit (which adds the data to the URL)
  event.preventDefault();

  // Create an element to store our data --> object template
  const formDataTemplate = new FormData(form);

  // Add the user input values to the object template
  const formValues = Object.fromEntries(formDataTemplate);

  console.log(formValues);
}

// NEXT STEPS: sending values to a server.

// TODO: display the hobby form inputs on the console.

const hobbyForm = document.getElementById("hobby-form");
hobbyForm.addEventListener("submit", handleHobbySubmit);

function handleHobbySubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(hobbyForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
}
