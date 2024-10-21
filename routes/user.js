const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

//!!!!!!!   MVC   !!!!!!!
const userController = require("../controllers/users");

//for rendering signup page AND //for saving user signup information
router.route("/signup")
    //for rendering signup page    
    .get(userController.renderSignupForm)
    //for saving user signup information
    .post(wrapAsync(userController.signup));


//for rendering login page AND //for login post route
router.route("/login")
    //for rendering login page
    .get(userController.renderLoginForm)

    //for login post route
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), userController.login);


//for logout route
router.get("/logout", userController.logout);


module.exports = router;