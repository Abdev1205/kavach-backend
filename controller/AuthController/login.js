import User from '../../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
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

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(400).json({ success: false, message: 'Invalid email or password.' });
    }

    res.clearCookie(`${existingUser.id}`);


    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h'
    })

    res.cookie(String(existingUser._id), token, {
      path: '/',
      expiresIn: new Date(Date.now() + 1000 * 60),
      httpOnly: true,
      sameSite: 'lax'
    })

    return res.status(200).json({ success: true, message: 'Login successful.', existingUser, token });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Invalid email or password.' });
  }
}

export {
  login
}