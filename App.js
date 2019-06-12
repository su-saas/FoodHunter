"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");
var UserRoute_1 = require("./route/UserRoute");
var FoodieTagListRoute_1 = require("./route/FoodieTagListRoute");
var TagRoute_1 = require("./route/TagRoute");
var ReviewRoute_1 = require("./route/ReviewRoute");
var FavoriteListRoute_1 = require("./route/FavoriteListRoute");
var RestaurantRoute_1 = require("./route/RestaurantRoute");
var DishRoute_1 = require("./route/DishRoute");
var RestaurantTagListRoute_1 = require("./route/RestaurantTagListRoute");
var ApplicationFormRoute_1 = require("./route/ApplicationFormRoute");
var RecommendationListRoute_1 = require("./route/RecommendationListRoute");
var GooglePassport_1 = require("./GooglePassport");
var passport = require('passport');
var newReq = require('request');
var logout = require('express-passport-logout');
// creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.googlePassportObj = new GooglePassport_1["default"]();
    }
    // configure Express middleware.
    App.prototype.middleware = function () {
        var allowCrossDomain = function (req, res, next) {
            res.header('Access-Control-Allow-Origin', "*");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        };
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(session({ secret: 'keyboard cat' }));
        this.expressApp.use(allowCrossDomain);
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    };
    //////////////////////////////////////////////////
    //*************** google login ******************/
    App.prototype.validateAuth = function (req, res, next) {
        // && req.cookies.user_sid  => not allow the user log in two different account in the same browser
        if (req.isAuthenticated()) {
            console.log("user is authenticated");
            console.log("validate user id: " + req.user.id);
            console.log("validate email: " + req.user.emails[0].value);
            return next();
        }
        console.log("user is not authenticated");
        res.redirect('/');
    };
    // configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));
        router.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/#/profile', failureRedirect: '/' }));
        router.get('/auth/user', this.validateAuth, function (req, res) {
            var email = _this.googlePassportObj.email;
            newReq.get(req.protocol + "://" + req.get('host') + "/login/" + email, {}, function (err, resp, body) {
                res.send(body);
            });
        });
        router.get('/logout', function (req, res) {
            _this.googlePassportObj.email = "";
            logout();
            return res.redirect("/#/login");
        });
        router.get('/loggedIn', function (req, res) {
            if (_this.googlePassportObj.email != null && _this.googlePassportObj.email != "") {
                res.send("true");
            }
            else {
                res.send("false");
            }
        });
        //////////////////////////////////////////////////
        //*************** google login end ***************/
        // add routes
        this.addRoutes(router);
        this.expressApp.use('/', router);
        this.expressApp.use('/', express.static(__dirname + '/angularDist'));
    };
    App.prototype.addRoutes = function (router) {
        var review = new ReviewRoute_1.Review();
        review.registerRoutes(router);
        var favoriteList = new FavoriteListRoute_1.FavoriteList();
        favoriteList.registerRoutes(router);
        var rest = new RestaurantRoute_1.Restaurant();
        rest.registerRestaurantRoutes(router);
        var dish = new DishRoute_1.Dish();
        dish.registerDishRoutes(router);
        var rtaglist = new RestaurantTagListRoute_1.RestaurantTagList();
        rtaglist.registerrTagListRoutes(router);
        var foodie = new UserRoute_1.Foodie();
        foodie.registerRoutes(router);
        var admin = new UserRoute_1.Admin();
        admin.registerRoutes(router);
        var restaurantOwner = new UserRoute_1.RestaurantOwner();
        restaurantOwner.registerRoutes(router);
        var tag = new TagRoute_1.Tag();
        tag.registerRoutes(router);
        var foodieTagList = new FoodieTagListRoute_1.FoodieTagList();
        foodieTagList.registerRoutes(router);
        var appForm = new ApplicationFormRoute_1.ApplicationForm();
        appForm.registerRoutes(router);
        var recm = new RecommendationListRoute_1.RecommendationList();
        recm.registerRoutes(router);
    };
    return App;
}());
exports.App = App;
