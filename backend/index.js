const express = require("express");
const apiRoutes = require("./routes/index")
const connectDB = require("./config/db");
const app = express();

connectDB();

const PORT = 5000;

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.send('Server chal rha guys!')
})

app.listen(PORT, console.log(`Server running on ${PORT}.`))