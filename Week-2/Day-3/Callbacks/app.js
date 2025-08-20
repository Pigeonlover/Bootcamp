// Callback functions

let pigeons = ["Archangel", "Modena", "Chinese Owl"];

pigeons.forEach(function (item) {
  console.log(item);
});

// In callback functions, they don't need a name like regular functions. They are 'anonymous' when inline

// Callback functions are not called/invoked afterwards like regular functions are

//====================================================

// More complex example = give user following messages
// 1) Welcome message
// 2) Their username
// 3) Number of missed messages

// -->
// Object to store user's data
// Functions - one per task

function welcomeUser(user) {
  console.log(`Welcome ${user}!`);
}

function sayUsername(username) {
  console.log(`Your username is ${username}.`);
}

function missedMessages(numOfMessages) {
  console.log(`You have ${numOfMessages} missed message/s.`);
}

function enterWebsite(welcome, username, missedMessages) {
  welcome();
  username();
  missedMessages();
}

enterWebsite(welcomeUser, sayUsername, missedMessages);
