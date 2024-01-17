import express from "express";

import { LoginInitiate } from "../controller/AuthController/loginInitiate.js";
import { roleIntiate } from "../controller/AuthController/roleInitiate.js";
import getUserDataUsingEmail from "../controller/UserController/getUserDataUsingEmail.js";
import { register } from "../controller/AuthController/register.js"
import { login } from "../controller/AuthController/login.js"
import { verifyToken } from "../middlewares/verifyToken.js"
import { getUserData } from "../controller/UserController/getUserData.js";
import { refreshToken } from "../controller/AuthController/refreshToken.js";
import { logout } from "../controller/AuthController/logout.js";
import passport from '../utils/passportConfig.js';
import { googleAuth } from "../controller/AuthController/googleAuth.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js"


import { getMyProfile } from "../controller/UserController/user.js";

// import { getFeedback } from "../controller/FeedbackController/AllFeedbackMain.js"


// import { getMyProfile, login, logout, register } from "../controller/UserController/user.js";
import { getFIR, casesSolvedCounter, createFir, deleteFir, updateFir, countFirs, getCrimeRateCount } from "../controller/FirController/AllfirMain.js";
import { getFeedback, getFeedbackCount, createFeedback } from "../controller/FeedbackController/AllFeedbackMain.js"

import { createPost, fetchFeed, likeUpdate } from "../controller/SocialController/AllFeedMain.js";

// Comment import
import { addComment, postComments, deleteComment } from "../controller/SocialController/comments/comment.js";
import { newsfeed } from "../controller/SocialController/Police/fetchNews.js";
import { createNewsChip } from "../controller/SocialController/Police/news.js"


const router = express.Router();
router.get('/', (req, res) => res.send('Welcome to Kavach Backend Api Layer'))


router.get('/', (req, res) => res.send('Welcome to Kavach Backend Api Layer'))

router.post('/register', register);
router.post('/login', login);
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', googleAuth);
router.get('/user', verifyToken, getUserData)
router.get('/refresh', refreshToken, verifyToken, getUserData)
router.get('/logout', logout);

router.post('/login/init', LoginInitiate)
router.post('/role/init', roleIntiate)
router.get('/user', verifyToken, getUserData)
router.get('/getdata', getUserDataUsingEmail)
router.get('/refresh', refreshToken, verifyToken, getUserData)
router.get('/logout', logout);



router.get("/me", isAuthenticated, getMyProfile);


router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
// router.get("/me", isAuthenticated, getMyProfile);


// FIR
router.get('/getfir', getFIR);
router.post('/createFir', verifyToken, createFir);   // Auth Needed here too
router.delete('/:id', verifyToken, deleteFir);   // Authentication needed
router.put('/:id', verifyToken, updateFir);      // Authentication needed

// FEEDBACK
router.get('/getFeedback', getFeedback);
router.post('/createFeedback', createFeedback);

// SOCIAL
//add post
router.post("/newPost", verifyToken, createPost);
// get feed
router.get("/fetchFeed", verifyToken, fetchFeed);
// like unlike

router.post("/updateLike", verifyToken, likeUpdate);


// Comment
router.post('/addComment', verifyToken, addComment)
router.delete('/deleteComment', verifyToken, deleteComment)
router.get('/postComments', verifyToken, postComments)

// SOCIAL POLICE COMMANDS
router.get('/fetchNewsChips', newsfeed)
router.post('/createNewsChips', verifyToken, createNewsChip)

// Chip routes 
router.get('/totalFirCount', countFirs);
router.get('/getSolvedCaseCount', casesSolvedCounter);
router.get('/getFeedbackCount', getFeedbackCount);
router.get('/getCrimeRateCount', getCrimeRateCount);
export default router;