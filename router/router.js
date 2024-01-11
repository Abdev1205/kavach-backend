import express from "express";
import { register } from "../controller/AuthController/register.js"
import { login } from "../controller/AuthController/login.js"
import { verifyToken } from "../middlewares/verifyToken.js"
import { getUserData } from "../controller/UserController/getUserData.js";
import { refreshToken } from "../controller/AuthController/refreshToken.js";
import { logout } from "../controller/AuthController/logout.js";
import passport from '../utils/passportConfig.js';
import { googleAuth } from "../controller/AuthController/googleAuth.js";
<<<<<<< HEAD
import { LoginInitiate } from "../controller/AuthController/loginInitiate.js";
import { roleIntiate } from "../controller/AuthController/roleInitiate.js";
import getUserDataUsingEmail from "../controller/UserController/getUserDataUsingEmail.js";
=======
import { getFIR, casesSolvedCounter} from "../controller/FirController/firMain.js";
import {getFeedback} from "../controller/FeedbackController/feedbackMain.js"
>>>>>>> 3819abef10b8d706271e6b909dbd54efefff0eab

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Kavach Backend Api Layer'))

router.post('/register', register);
router.post('/login', login);
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', googleAuth);
router.post('/login/init', LoginInitiate)
router.post('/role/init', roleIntiate)
router.get('/user', verifyToken, getUserData)
router.get('/getdata', getUserDataUsingEmail)
router.get('/refresh', refreshToken, verifyToken, getUserData)
router.get('/logout', logout);

// FIR
router.get('/getfir', getFIR);
router.get('/getSolvedCaseCount', casesSolvedCounter);

// FEEDBACK
router.get('/getFeedback', getFeedback);

export default router;