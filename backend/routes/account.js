const express = require("express");
const { Account } = require("../db");
const bodyParser = require("body-parser");
const { authMiddleware } = require("../middleware");
const mongoose = require("mongoose");

const router = express.Router();
router.use(bodyParser.json());

router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const acc = await Account.findOne({
      userId: req.userId,
    });
    console.log(acc.userId);

    return res.json({
      balance: acc.balance,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "No Such Account Exist",
    });
  }
});

// New Methods for Banking Applications use TRANSACTIONS IN MONGOOSE

router.post("/transfer", authMiddleware, async (req, res) => {
  const userSession = await mongoose.startSession();

  userSession.startTransaction();
  const { amount, to } = req.body;

  //Fetch account details
  const account = await Account.findOne({
    userId: req.userId,
  }).session(userSession);

  if (!account || account.balance < amount) {
    await userSession.abortTransaction();
    return res.status(400).json({
      message: "Insufficent Balance / Account Not Found",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  }).session(userSession);

  if (!toAccount) {
    await userSession.abortTransaction();
    return res.status(400).json({
      message: "Account Not Found",
    });
  }

  //perform the transfer

  await Account.updateOne(
    {
      userId: req.userId,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(userSession);

  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  ).session(userSession);

  //Commit the Change ....

  await userSession.commitTransaction();
  res.json({
    message: "Transaction Successfully",
  });
});

module.exports = router;
