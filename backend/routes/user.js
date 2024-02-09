// All routes for api/v1/user/...
//  user/signin
//  user/login
//  user/profile

const express = require("express");
const zod = require("zod");
const User = require("../db");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");

// Why create a Router because we know every request will start from /api/v1/users
// OR /api/v1/user that why create a route
const router = express.ROUTER();

//Defining ZOD schema
const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(body);

  if (!success) {
    return res.json({
      message: " Email Already Taken / Wrong Inputs",
    });
  }

  const user = User.findOne({
    username: body.username,
  });
  if (user._id) {
    return res.json({
      message: " Email Already Taken / Wrong Inputs",
    });
  }

  const dbUser = await User.createOne(body);

  const user_id = dbUser._id;
  const token = jwt.sign(
    {
      user_id,
    },
    JWT_SECRET
  );
  return res.json({
    message: "User created successfully",
    token: token,
  });
});

module.exports = router;
