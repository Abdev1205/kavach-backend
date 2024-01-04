import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config({
  path: ".env"
});

const logout = async (req, res, next) => {
  const cookies = req.headers.cookie;
  console.log(cookies)
  const token = cookies.split("=")[1];
  if (!token) {
    res.status(400).json({ message: "Canot find token" })
  }
  jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      response.status(403).json({ message: "Authentication failed" })
    }
    res.clearCookie(`${user.id}`);
    req.cookies[`${user.id}`] = "";
  })
  return res.status(200).json({ message: "User Logged out Suceesfully" })
}

export {
  logout
}