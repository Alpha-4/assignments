const { JWT_SECRET } = require("../config/config");
const jwt = require("jsonwebtoken");

const { User } = require("../db/user");

const verifyToken = (req, res, next) => {
  const nonSecurePaths = ["/", "/api/v1/user/signin", "/api/v1/user/signup"];
  if (nonSecurePaths.includes(req.path)) return next();

  let reqToken = req.headers?.authorization;
  if (!reqToken.includes("Bearer")) {
    return res.status(402).json({
      message: "Invalid token",
    });
  }
  reqToken = reqToken.substring("Bearer ".length);
  const decoded = jwt.verify(reqToken, JWT_SECRET);

  if (decoded?.id) next();
  else
    return res.status(402).json({
      message: "Invalid token",
    });
};

module.exports = {
  verifyToken,
};
