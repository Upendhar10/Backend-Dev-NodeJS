/*
    Two ways to start building a server in Node
    1. using import syntax  ->   "type": "module",
    2. using require syntax 
*/

// const express = require('express');

// # Express Initialization:
import express from "express";

const app = express();
// console.log(typeof app); // function

// # Defining the port number
const port = 8000;

// # Server configuration : Starts the server and listens for connections on the specified port.
app.listen(port, () => {
  console.log(`Server is listening on port : ${port}...`);
});

/*
# Simple router calls :
    - getting response using 'get' command

*/

// # Define a routes for the root path
app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/about", (req, res) => {
  res.send("About page");
});
app.get("/projects", (req, res) => {
  res.send("Projects page");
});
