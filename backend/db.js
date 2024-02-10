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
