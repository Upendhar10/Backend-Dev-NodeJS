import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// express initialization
const app = express();

// # middlewares
app.use(cors({ origin: process.env.CROSS_ORIGIN, credentials: true }));

// To Handle different types of data, here we are accepting only JSON data
app.use(express.json({ limit: "16kb" }));

// To Handle how the data is encoded in the url (either %20 or + for spaces)
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// To store assests that are public in our server
app.use(express.static("public"));

// To access cookies in browsers from the server to perfrom CRUD operations
app.use(cookieParser());

export default app;
