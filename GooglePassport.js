"use strict";
exports.__esModule = true;
var googleOauth2_1 = require("./googleOauth2");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var newReq = require('request');
// Creates a Passport configuration for Google
var GooglePassport = /** @class */ (function () {
    function GooglePassport() {
        var _this = this;
        this.clientId = googleOauth2_1["default"].id;
        this.secretId = googleOauth2_1["default"].secret;
        passport.use(new GoogleStrategy({
            clientID: this.clientId,
            clientSecret: this.secretId,
            callbackURL: "/auth/google/callback",
            profileFields: ['id', 'displayName', 'emails']
        }, function (accessToken, refreshToken, profile, done) {
            process.nextTick(function () {
                _this.userId = profile.id;
                _this.displayName = profile.displayName;
                _this.email = profile.emails[0].value;
                var newUser = {
                    emailAddress: profile.emails[0].value,
                    userName: profile.displayName,
                    password: "null",
                    userType: 1
                };
                newReq.get("http://localhost:8080/login/" + newUser.emailAddress, {}, function (err, resp, body) {
                    if (body == "null") {
                        console.log("not find, now create a user");
                        newReq.post("http://localhost:8080/foodie", {
                            json: newUser
                        }, function (err1, resp1, body1) {
                            console.log("create: " + resp1.statusCode);
                        });
                    }
                    return done(null, profile);
                });
            });
        }));
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
    return GooglePassport;
}());
exports["default"] = GooglePassport;
