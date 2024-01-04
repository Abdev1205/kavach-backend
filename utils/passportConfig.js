// utils/passportConfig.js
import passport from 'passport';
import { Strategy as OAuth2Strategy } from 'passport-google-oauth20';
import User from '../models/user.js';
import { config } from "dotenv";
config({
  path: ".env"
});

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {

        let user = await User.findOne({ googleId: profile.id });
        console.log("user data", user)

        if (!user) {
          // If the user doesn't exist, check if the email is already registered
          const existingUserWithEmail = await User.findOne({ email: profile.emails[0].value });

          console.log("data", existingUserWithEmail);
          if (existingUserWithEmail && existingUserWithEmail.email === profile.emails[0].value) {
            console.log(" i am done", existingUserWithEmail.email == profile.emails[0].value)
            // If the email is registered, return an error (you can handle this case accordingly)
            return done(null, { existingUserWithEmail });
          }
          else {
            console.log('i am in user create')
            user = new User({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
            });

            await user.save();
          }
        }
        return done(null, { user, accessToken, refreshToken });
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

function generateAccessToken(user) {
  // Implement your JWT token generation logic here
}

function generateRefreshToken(user) {
  // Implement your refresh token generation logic here
}

export default passport;
