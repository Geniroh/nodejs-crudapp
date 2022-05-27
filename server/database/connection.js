const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connect string
    // const con = await mongoose.connect(process.env.MONGO_URI)
    const con = await mongoose.connect(
      "mongodb+srv://admin:Johnny19@cluster0.h3sti.mongodb.net/users?retryWrites=true&w=majority"
    );

    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
