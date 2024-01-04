import express from "express";
import { register } from "../controller/AuthController/register.js"
import { login } from "../controller/AuthController/login.js"
import { verifyToken } from "../middlewares/verifyToken.js"
import { getUserData } from "../controller/UserController/getUserData.js";
import { refreshToken } from "../controller/AuthController/refreshToken.js";
import { logout } from "../controller/AuthController/logout.js";
import passport from '../utils/passportConfig.js';
import { googleAuth } from "../controller/AuthController/googleAuth.js";

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Kavach Backend Api Layer'))

router.post('/register', register);
router.post('/login', login);
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', googleAuth);
router.get('/user', verifyToken, getUserData)
router.get('/refresh', refreshToken, verifyToken, getUserData)
router.get('/logout', logout);

export default router;