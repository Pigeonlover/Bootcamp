// OBJECTS

// Structure

let city = {
  cityName: "Hull",
  population: 200000, //--> key-value pairs
  diameter: 5,
  hasTrainStation: true,
};

// To only see the city name
console.log(city.cityName); // Using dot notation
// --> "Hull"

// To add a new propert of Country
city.country = "United Kingdom";
console.log(city);

let newCity = {
  cityName: "London",
  population: 1000000,
  hasTrainStation: true,
  coffeeShops: ["Planet Coffee", "Costa", "Brew"],
  companies: [
    { companyName: "Tesco", location: "Some street" },
    { companyName: "Asda", location: "Another street" },
  ],
};

// Access item in array
console.log(newCity.coffeeShops[1]); //--> Costa

// More specific access
console.log(newCity.companies[0].companyName); // --> Tesco
