const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

const PORT = 5000;

app.listen(PORT, console.log(`Server running on ${PORT}.`))