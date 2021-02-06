const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

const transactions = require("./routes/transactions");

// app.get("/", (req, res) => res.send("Hello"));
app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server started in enviroment: ${process.env.NODE_ENV},on port ${PORT}!`
      .yellow.bold
  );
});
