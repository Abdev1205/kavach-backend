import passport from '../../utils/passportConfig.js';
import User from '../../models/user.js';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config({
  path: ".env"
});
let userData;
const googleAuth = (req, res, next) => {
  passport.authenticate('google', { scope: ['profile', 'email'] }, (err, user, info) => {
    if (err || !user) {
      console.log("1st error")
      return res.status(500).json({ success: false, message: 'Google authentication failed.' });
    }

    req.logIn(user, async (err) => {
      if (err) {
        console.log("2nd error", user)
        return res.status(500).json({ success: false, message: 'Google authentication failed.' });
      }
      console.log("no error", user)
      if (!user) {
        userData = await User.findOne({ googleId: req.user.googleId });
      }

      const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1h'
      });

      const redirectParam = req.query.redirect;
      const redirectURL = redirectParam
        ? `http://localhost:3000${redirectParam}?success=true`
        : `http://localhost:3000/dashboard?success=true`;

      res.cookie(String(user._id), token, {
        path: '/',
        expiresIn: new Date(Date.now() + 1000 * 60),
        httpOnly: true,
        sameSite: 'lax'
      });

      return res.redirect(redirectURL);
    });
  })(req, res, next);
};

export {
  googleAuth
}