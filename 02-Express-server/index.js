import express from "express";

const app = express();

const port = 8000;

// To accept data from frontend side
app.use(express.json()); // # Accepting data in JSON format

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}...`);
});

// # Building an simple Application to perform CRUD operations

let CoffeeDb = [];

let nextId = 1;

app.get("/", (req, res) => {
  res.send("Welcome to CoffeDb");
});

// # Adding elements to The COffee database
app.post("/coffees", (req, res) => {
  const { name, price } = req.body;
  // creating a object
  const newCoffee = {
    id: nextId++,
    name,
    price,
  };

  CoffeeDb.push(newCoffee);
  res.status(201).send(newCoffee);
});

// # Retrieving all elements from The Coffee database
app.get("/coffees", (req, res) => {
  res.status(200).send(CoffeeDb);
});

// # retrieving single element from The Coffee database, based on its Id

app.get("/coffees/:id", (req, res) => {
  const coffeeRequired = CoffeeDb.find((e) => e.id === parseInt(req.params.id)); // e : points to each element in the COffeeDb array
  if (!coffeeRequired) {
    return res.status(404).send("Coffee Not Found!");
  }

  // pararms.id is used to extract the id from the url.
  // Anything that comes from the Url is in the form of string by default.

  // coffeeRequired.name = req.body.name;
  // coffeeRequired.price = req.body.price;

  res.status(200).send(coffeeRequired);
});

// # updating existing elements with new values in the CoffeeDb array

app.put("coffees/:id", (req, res) => {
  const coffeeRequired = CoffeeDb.find((e) => e.id === parseInt(req.params.id));

  // If the element is not present in the CoffeeDb, return 404
  if (!coffeeRequired) {
    return res.status(404).send("Coffee Not Found!");
  }

  // If the element is present in the CoffeeDb, then specify the data that needs to be updated.
  const { name, price } = req.body;

  coffeeRequired.name = name;
  coffeeRequired.price = price;

  res.status(200).send(coffeeRequired);
});

// deleting a single existing element from the COffeeDb array

app.delete("coffees/:id", (req, res) => {
  const coffeeIndex = CoffeeDb.findIndex(
    (e) => e.id === parseInt(req.params.id)
  );

  if (coffeeIndex === -1) {
    return res.status(404).send("Coffee Not Found!");
  }

  CoffeeDb.splice(coffeeIndex, 1);
  return res.status(204).send("Coffee Deleted");
});
