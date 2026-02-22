const express = require('express');
const router = express.Router();
const passport = require('passport');
const {savedRedirectUrl, isLoggedIn} = require('../middleware.js');
const userController = require('../controllers/user.js');


router.get("/check-username", userController.checkUsername);

// router.get("/userReview" , isLoggedIn , userController.userReveiew);

router
    .route("/userReview")
    .get(isLoggedIn , userController.userReveiew)
    .post(isLoggedIn , userController.saveUserReview);

// Register
router
    .route("/register")
    .get(userController.renderRegisterForm)
    .post(userController.registerUser);


// Login
router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(savedRedirectUrl , passport.authenticate("local", {
          failureRedirect: "/login"
          }),  userController.loginUser);
          

// logout
router.get("/logout" , userController.logoutUser)

module.exports = router;