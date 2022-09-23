const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, config.JWT_SECRET);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  req.user = decodedToken.user;
  return next();
};

module.exports = verifyToken;