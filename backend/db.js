const mongoose = require("mongoose");
require('dotenv').config()
const uri = process.env.MONGO_URI;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(uri);

    console.log("Connection Successfully");
  } catch (error) {
    console.log(error)
    console.log("Connection Error");
  }
};

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  confirmPassword: String,
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  balance: {
    type: Number,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);
connectToMongoDB();

module.exports = { User, Account };
