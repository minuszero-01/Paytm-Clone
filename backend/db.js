import mongoose, { Schema } from "mongoose";

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

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
