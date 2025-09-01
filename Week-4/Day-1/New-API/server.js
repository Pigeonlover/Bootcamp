//

import express from "express";

const app = express();

app.listen(8080, function () {
  console.log("Server is listening on port 8080!");
});

app.get("/", function (request, response) {
  response.send("Hello, this is the root route!");
});

app.get("/pigeons", function (request, response) {
  response.json({ message: "This is the pigeons route!" });
});

app.post("/pigeons", function (request, response) {
  response.json({ message: "You just sent a POST request to /pigeons!" });
});

app.use(express.json());
