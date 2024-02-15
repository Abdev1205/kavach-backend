import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config({
  path: ".env"
});

const verifyToken = async (req, res, next) => {
  const cookies = req.headers.cookie;
  var token = req.query.token;
  // console.log("mybody in verify token", mybody)
  console.log("this is cookies value", cookies);
  const tokenCookie = cookies?.split(";").find(cookie => cookie.trim().startsWith("accessToken="));
  // if (!tokenCookie) {
  //   return res.status(404).json({ message: "No accessToken cookie found" });
  // }
  const token2 = tokenCookie?.split("=")[1];
  console.log("this is token value", token, token2);
  if (token2.length == 0 || token2 == undefined) {
    token = token;
  }
  else {
    token = token2;
  }
  if (!token) {
    return res.status(404).json({ message: "No token found in the accessToken cookie" });
  }

  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Invalid Token" });
    }
    console.log("user id from jwt decode", decoded._id, decoded);
    req.id = decoded._id;
    next();
  });
};


export {
  verifyToken
};

