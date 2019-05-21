"use strict";
exports.__esModule = true;
var UserModel_1 = require("../model/UserModel");
// creates and configures an ExpressJS web server.
var FoodieRoute = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function FoodieRoute() {
        this.Foodie = new UserModel_1.FoodieModel();
    }
    FoodieRoute.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // configure API endpoints.
    FoodieRoute.prototype.routes = function (router) {
        var _this = this;
        // create foodie
        router.post("/foodie", function (req, res) {
            console.log(req.body);
            var user = req.body;
            _this.Foodie.createUser(res, user);
        });
        // get login page
        router.get("/login", function (req, res) {
            var userPayload = req;
            console.log("login with userID: ", userPayload.userID);
            console.log("login with userPassword: ", userPayload.password);
            _this.Foodie.logInByIDAndPassword(res, userPayload);
        });
        // get foodie by id
        router.get("/foodie/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Query single user with id: ", userId);
            _this.Foodie.getUserByID(res, userId);
        });
        // update foodie by id
        router.put("/foodie/:userID", function (req, res) {
            var userId = req.params.userID;
            var userBody = req.body;
            console.log("update user: ", userId);
            _this.Foodie.updateUserByID(res, userId, userBody);
        });
        // delete foodie by id
        router["delete"]("/foodie/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Delete user:", userId);
            _this.Foodie.deleteUserByID(res, userId);
        });
    };
    return FoodieRoute;
}());
exports.FoodieRoute = FoodieRoute;
var RestaurantOwnerRoute = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function RestaurantOwnerRoute() {
        this.Owner = new UserModel_1.RestaurantOwnerModel();
    }
    RestaurantOwnerRoute.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // configure API endpoints.
    RestaurantOwnerRoute.prototype.routes = function (router) {
        var _this = this;
        // create restaurantOwner
        router.post("/restaurantOwner", function (req, res) {
            console.log(req.body);
            var user = req.body;
            _this.Owner.createUser(res, user);
        });
        // get login page
        router.get("/login", function (req, res) {
            var userPayload = req;
            console.log("login with userID: ", userPayload.userID);
            console.log("login with userPassword: ", userPayload.password);
            _this.Owner.logInByIDAndPassword(res, userPayload);
        });
        // get restaurantOwner by id
        router.get("/restaurantOwner/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Query single user with id: ", userId);
            _this.Owner.getUserByID(res, userId);
        });
        // update restaurantOwner by id
        router.put("/restaurantOwner/:userID", function (req, res) {
            var userId = req.params.userID;
            var userBody = req.body;
            console.log("update user: ", userId);
            _this.Owner.updateUserByID(res, userId, userBody);
        });
        // delete restaurantOwner by id
        router["delete"]("/restaurantOwner/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Delete user:", userId);
            _this.Owner.deleteUserByID(res, userId);
        });
    };
    return RestaurantOwnerRoute;
}());
exports.RestaurantOwnerRoute = RestaurantOwnerRoute;
var AdminRoute = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function AdminRoute() {
        this.Admin = new UserModel_1.AdminModel();
    }
    AdminRoute.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // configure API endpoints.
    AdminRoute.prototype.routes = function (router) {
        var _this = this;
        // create admin
        router.post("/admin", function (req, res) {
            console.log(req.body);
            var user = req.body;
            _this.Admin.createUser(res, user);
        });
        // get login page
        router.get("/login", function (req, res) {
            var userPayload = req;
            console.log("login with userID: ", userPayload.userID);
            console.log("login with userPassword: ", userPayload.password);
            _this.Admin.logInByIDAndPassword(res, userPayload);
        });
        // get all users
        router.get("/admin/users", function (req, res) {
            console.log("get all users");
            _this.Admin.getAllUsers(res);
        });
        // get all foodies
        router.get("/admin/foodies", function (req, res) {
            var userType = req.params.userType;
            console.log("Get all foodies: ", userType);
            _this.Admin.getAllFoodies(res, userType);
        });
        // get foodie by id
        router.get("/admin/foodies/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Query single foodie with id: ", userId);
            _this.Admin.getUserByID(res, userId);
        });
        // get all restaurantOwners
        router.get("/admin/restaurantOwners", function (req, res) {
            var userType = req.params.userType;
            console.log("Get all restaurantOwners: ", userType);
            _this.Admin.getAllRestaurantOwners(res, userType);
        });
        // get restaurantOwner by id
        router.get("/admin/restaurantOwners/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Query single restaurantOwner with id: ", userId);
            _this.Admin.getUserByID(res, userId);
        });
        // get all admins
        router.get("/admin/admins", function (req, res) {
            var userType = req.params.userType;
            console.log("Get all admins: ", userType);
            _this.Admin.getAllAdmins(res, userType);
        });
        // get admin by id
        router.get("/admin/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Query single admin with id: ", userId);
            _this.Admin.getUserByID(res, userId);
        });
        // update admin by id
        router.put("/admin/:userID", function (req, res) {
            var userId = req.params.userID;
            var userBody = req.body;
            console.log("update user: ", userId);
            _this.Admin.updateUserByID(res, userId, userBody);
        });
        // delete admin by id
        router["delete"]("/admin/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Delete user:", userId);
            _this.Admin.deleteUserByID(res, userId);
        });
    };
    return AdminRoute;
}());
exports.AdminRoute = AdminRoute;
