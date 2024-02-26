const express = require("express");
const mainRoute = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const { User } = require("./db");

const app = express();
const PORT = 3000;

// app.use() use to run middlewares or to route the request to ceratin substring
// Bootstrap application that all request from api/v1 go to mainRoute
app.use(cors());
app.use("/api/v1", mainRoute);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const authToken = req.headers.authorization;
  console.log(authToken);

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.json({ message: "Failed" });
  }

  const token = authToken.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    console.log(decoded.userId);

    const Name = User.findOne();
    return res.json({
      message: "Success",
      info: decoded.userId,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Failed",
    });
  }
});

app.listen(PORT, () => {
  console.log("Listening to PORT", PORT);
});
