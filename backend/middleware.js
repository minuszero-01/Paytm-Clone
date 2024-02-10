const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken");
const express = require("express");

const authMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startswith("Bearer ")) {
    return res.send("You are not Authorized");
  }

  const token = authToken.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.json({
      message: "Authorization Failed",
    });
  }
};

module.exports = {
  authMiddleware,
};
