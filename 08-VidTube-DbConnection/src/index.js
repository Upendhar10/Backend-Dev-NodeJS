/*
    scripts : nodemon -r dotenv/config --experimental-json-modules src/index.js
*/

import dotenv from "dotenv";
import connectDB from "./database/index.database.js";
import app from "./app.js";

dotenv.config({ path: "./env" });

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("MongoDB Connected!");
      console.log(`Server is running on port ${PORT}`);
    });
    app.on("error", (err) => {
      console.log("Server Error : ", err);
    });
  })
  .catch((error) => {
    console.log("MONGODB Connection Failed : ", error);
  });
