const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.log(`we cant connect to db
        ${error}`);
  }
};
module.exports = connectDB;
