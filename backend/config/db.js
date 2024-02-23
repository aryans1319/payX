const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://payx:payx1234@cluster0.oykmjf9.mongodb.net/");
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;