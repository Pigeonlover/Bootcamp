// TIMERS

//TODO: Timeout

// A countdown - after an amount of time, a task will happen ONCE.

// Structure - with a callback function
// setTimeout(function () {
//   task
// }, delay in milliseconds);

// Example
// setTimeout(function () {
//   console.log("Pigeons!");
// }, 5000);

// TODO: Intervals
// A task performed repeatedly after a specific amount of time --> we need to stop it or it will run infinitely.

//Structure

// setInterval(function () {
//    Task
// }, delay);

// Example
// setInterval(function () {
// console.log("More pigeons!");
// }, 2000);

//==================================

// To stop the interval
// What if we used a timeout to stop an interval?

// const robotInterval = setInterval(function () {
//   console.log("Will I ever stop...?");
// }, 2000);

// function stopInterval() {
//   setTimeout(function () {
//     clearInterval(robotInterval);
//   }, 14000);
// }

// stopInterval();

// TODO = when a button is clicked, a message appears on the page. After 5 seconds, that message disappears.

const timerButton = document.getElementById("timer-button");
timerButton.addEventListener("click", showMessage);

function showMessage() {
  const messageContainer = document.getElementById("message-container");
  const message = document.createElement("p");
  message.textContent = "Did you know pigeons are beautiful?";
  messageContainer.appendChild(message);
  setTimeout(function (showMessage) {
    message.style.visibility = "hidden";
  }, 5000);
}
