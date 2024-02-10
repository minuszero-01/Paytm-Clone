// All routes for api/v1/...

const express = require("express");
const userRoute = require("./user");
const accRoute = require("./account");

// Why create a Router because we know every request will start from /api/v1/users
// OR /api/v1/admins that why create a route
const router = express.Router();

router.use("/user", userRoute);
router.use("/account", accRoute);

module.exports = router;
