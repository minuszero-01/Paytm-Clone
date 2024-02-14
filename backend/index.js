const express = require("express");
const mainRoute = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

const app = express();
const PORT = 3000;

// app.use() use to run middlewares or to route the request to ceratin substring
// Bootstrap application that all request from api/v1 go to mainRoute
app.use(cors());
app.use("/api/v1", mainRoute);

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("Listening to PORT", PORT);
});
