import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config({
  path: ".env"
});

const authenticationLayer = async (req, res, next) => {
  const cookies = req.headers.cookie;
  console.log(cookies);

  const token = cookies?.split("=")[1];
  if (!token) {
    return res.status(400).json({ auth: false, message: "You are not Authenticated" });
  }

  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ auth: false, message: "Authentication failed" });
    }
    req.id = user.id;
  });

  next();
};

export {
  authenticationLayer
};
