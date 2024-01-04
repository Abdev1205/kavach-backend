import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config({
  path: ".env"
});

const verifyToken = async (req, res, next) => {
  const cookies = req.headers.cookie;
  console.log(cookies);
  const token = cookies?.split("=")[1];
  console.log(token);

  if (!token) {
    return res.status(404).json({ message: "No token Found" });
  }

  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "invalid Token" });
    }

    console.log(user?.id);
    req.id = user?.id;
    next();
  });
};

export {
  verifyToken
};
