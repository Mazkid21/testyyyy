var passport = require("passport");
var express = require('express');
var request = require('request');
var router = express.Router();
var flash = require('connect-flash');

// GET /login
router.get('/', (request, response, next) => {
    response.render('userLogin', {
        message: "LOGIN MESSAGE"
    });
});

// POST /login
router.post('/', (request, response, next) => {
    var localLoginStrategy = passport.authenticate('local-login', {
        successRedirect: '/users',
        failureRedirect: '/user-signup',
        failureFlash: true
    });

    return localLoginStrategy(request, response, next);
});


module.exports = router;