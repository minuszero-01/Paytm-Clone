const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:Boomboom%40123@cluster0.5yshnow.mongodb.net/Paytm"
    );

    console.log("Connection Successfully");
  } catch (error) {
    console.log("Connection Error");
  }
};

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);
connectToMongoDB();

module.exports = { User };
