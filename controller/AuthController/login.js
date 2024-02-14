import User from '../../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
import { sendCookie } from '../../utils/features.js';

config({
  path: ".env"
});

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    console.log(existingUser)

    if (!existingUser) {
      return res.status(400).json({ success: false, message: 'Invalid email or password.' });
    }

    const matchPassword = bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(400).json({ success: false, message: 'Invalid email or password.' });
    }
    // const tokenPayload = {
    //   id: existingUser._id,
    //   // Include any other necessary information in the payload
    // };
    // console.log("this is token payload ", tokenPayload)
    // const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, {
    //   expiresIn: '1h'
    // });
    // res.cookie("accessToken", token, {
    //   expiresIn: new Date(Date.now() + 1000 * 60),
    // });
    // sendCookie(existingUser,)
    const token = jwt.sign({ _id: existingUser._id }, process.env.JWT_SECRET_KEY)
    res.cookie("accessToken", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 15 * 60 * 1000,
    })

    var redirectParam = req.query.redirect;
    if (!existingUser.role || existingUser.role.trim() === "") {
      redirectParam = "/role";
    } else {
      redirectParam = `/${existingUser.role}`;
    }
    const redirectURL = redirectParam

    console.log("redirect url", redirectURL, "rediect param", redirectParam, "token value", token);

    console.log(" i am before rediect return brefore")

    return res.json({ success: true, redirectURL, existingUser, token });

  } catch (error) {
    return res.status(500).json({ success: false, message: 'Invalid email or password.' });
  }
}

export {
  login
}