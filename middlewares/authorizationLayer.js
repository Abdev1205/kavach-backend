import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config({
  path: ".env"
});

const authorizeUser = async (req, res, next, role) => {
  const cookies = req.headers.cookie;
  console.log(cookies)
  const token = cookies?.split("=")[1];
  let userId;

  if (!token) {
    return res.status(400).json({ auth: false, message: "You are not Authenticated" });
  }

  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ auth: false, message: "Authentication failed" });
    }
    req.id = user.id;
    userId = user.id;
  });

  try {
    const user = await User.findById(userId);
    if (user.role === role) {
      next();
    } else {
      res.status(400).json({ auth: false, message: `You are not Authorized as ${role}` });
    }
  } catch (error) {
    res.status(500).json({ auth: false, message: "Internal Server Error" });
  }
};

const userAuthorization = async (req, res, next) => {
  authorizeUser(req, res, next, "user");
};

const policeAuthorization = async (req, res, next) => {
  authorizeUser(req, res, next, "police");
};

const adminAuthorization = async (req, res, next) => {
  authorizeUser(req, res, next, "admin");
};

export {
  userAuthorization, policeAuthorization, adminAuthorization
};
