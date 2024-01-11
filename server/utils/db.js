require("dotenv").config();
const mongoose = require("mongoose");

//const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Successfully connected to DB!");
  } catch (error) {
    console.error("Connection failed!");
    process.exit(0);
  }
};

module.exports = connectDb;
