// APIs

// TODO: get data from API

// STEPS

// 1) Connect with API to request data

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  console.log(response);

  // 2) Format response to JSON
  const data = await response.json();
  console.log(data);
}

getData();

// ==================================

// Asynchronous code = code is usually read top to bottom (synchronous code)
// However, code that requires a different timing to be executed, the browser will put it on a different priority stack)

// We need to tell the browser to wait until the asynchronous code finishes to execute it

// If we run async code in a sync way, we get a Promise (the browser acknowledges there is a request, but the response has not been sent yet, so we can't get the data)

// The browser will run it when it is ready.

// TIP: if you see a Promise in your console, check what code needs to be run asynchronously (async & await)
