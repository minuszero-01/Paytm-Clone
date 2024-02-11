// All routes for api/v1/user/...
//  user/signin
//  user/login
//  user/profile

const express = require("express");
const zod = require("zod");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { authMiddleware } = require("../middleware");

// Why create a Router because we know every request will start from /api/v1/users
// OR /api/v1/user that why create a route
const router = express.Router();
router.use(bodyParser.json());

//Defining ZOD schema

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

const updateBody = zod.object({
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
  password: zod.string().optional(),
});

// To add a User...

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);

  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = User.findOne({
    username: req.body.username,
  });
  if (user._id) {
    return res.json({
      message: " Email Already Taken / Wrong Inputs",
    });
  }

  const dbUser = await User.create(req.body);

  const userId = dbUser._id;

  //-------- Create a Account -------

  Account.create({
    userId: userId,
    balance: Math.random() * 100000,
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );
  return res.json({
    message: "User created successfully",
    token: token,
  });
});

// To update a user

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  await User.updateOne(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    {
      _id: req.userId,
    }
  );

  return res.json({ message: "Successfully Updated" });
});

//difficult
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || " ";
  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    users: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
