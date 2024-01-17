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

import { createComplaint } from "../controller/ComplaintController/createComplaint.js";
import { getComplaint } from "../controller/ComplaintController/getComplaint.js"
// import { getMyProfile, login, logout, register } from "../controller/UserController/user.js";
import { getFIR, casesSolvedCounter, createFir, deleteFir, updateFir, getUserFIR, countFirs, getUserFIROld, getCrimeRateCount, getSingleFir, updateInvStage, getFIROld, setStatus } from "../controller/FirController/AllfirMain.js";
import { getFeedback, getFeedbackCount, createFeedback, getFeedbackOld } from "../controller/FeedbackController/AllFeedbackMain.js"
import { getMessageToSend } from "../controller/SMSController/twillioSend.js"
import { createPost, fetchFeed, likeUpdate, getSinglePost } from "../controller/SocialController/AllFeedMain.js";
import { renderMap } from "../controller/LocationController/callforhelpController.js"
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



// router.get("/me", isAuthenticated, getMyProfile);


router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
// router.get("/me", isAuthenticated, getMyProfile);


// FIR
router.get('/getfir', getFIR);
// <<<<<<< HEAD
// router.post('/createFir', verifyToken, createFir);   // Auth Needed here too
// router.delete('/:id', verifyToken, deleteFir);   // Authentication needed
// router.put('/:id', verifyToken, updateFir);      // Authentication needed

router.get('/getUserFIR', verifyToken, getUserFIR);
router.get('/getUserFIROld', verifyToken, getUserFIROld);
// =======
router.get('/getFIROld', getFIROld);
router.post('/setStatus', setStatus);
// Complaint
router.get('/getComplaint', getComplaint);
router.post('/createComplaint', createComplaint);

router.post('/createFir', verifyToken, createFir);   // Auth Needed here too
router.delete('/deleteFir/:id', verifyToken, deleteFir);   // Authentication needed
router.put('/:id', verifyToken, updateFir);      // Authentication needed
router.get('/getSingleFir/:id', verifyToken, getSingleFir);
router.put('/upInvStg/:id/:invStg', verifyToken, updateInvStage);
// FEEDBACK
router.get('/getFeedback', getFeedback);
router.get('/getFeedbackOld', getFeedbackOld);
router.post('/createFeedback', createFeedback);

// SOCIAL
//add post
router.post("/newPost", verifyToken, createPost);
// get feed
router.get("/fetchFeed", verifyToken, fetchFeed);
// like unlike

router.post("/updateLike", verifyToken, likeUpdate);
router.get('/singlePost/:id', getSinglePost);


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

// BULK SMS ROUTE
router.post('/getMessageToSend', getMessageToSend);

// Location
router.post('/calcDis', renderMap);
export default router;  