// Workshop

let person = {
  name: "Hadrian",
  age: 30,
  favouriteColour: "Yellow",
  sayHello: function (name) {
    console.log(`Hello ${this.name}!`);
  },
};

person.sayHello();

//====================================================

// Example 1

let car = {
  make: "BMW",
  model: "X1",
  colour: "white",
  advert: function () {
    console.log(
      `Buy our new ${car.make} ${car.model}, now available in ${car.colour} for a limited time only!\n`
    );
  },
};

car.advert();

//====================================================

// Example 2

let book = {
  title: "Into The Wild",
  author: "Erin Hunter",
  pageNumber: 250,
  advert: function () {
    console.log(
      `The newest publication from the New York Times bestseller ${book.author} has just hit bookstores around the world! "${book.title}" is ${book.pageNumber} pages full of drama, mystery and intrigue. Don't miss out - get your copy now!\n`
    );
  },
};

book.advert();
