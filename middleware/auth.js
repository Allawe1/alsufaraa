import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const requireAuth = (req, res, next) => {
  // let token = req.get("Access-Token");
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
  });
  req.userId = decoded.id;
  next();

  res.status(400).json("Token not valid");

  res.status(403).json("Unauthorize user");
};

module.exports = requireAuth;
