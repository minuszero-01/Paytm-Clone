const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Authorization Failed" });
  }

  const token = authToken.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;

    next();
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Authorization Failed",
    });
  }
};

module.exports = {
  authMiddleware,
};
