"use strict";
exports.__esModule = true;
var UserModel_1 = require("../model/UserModel");
// creates and configures an ExpressJS web server.
var Foodie = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function Foodie() {
        this.Foodie = new UserModel_1.FoodieModel();
        this.idGenerator = 10;
    }
    Foodie.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // configure API endpoints.
    Foodie.prototype.routes = function (router) {
        var _this = this;
        // create foodie
        router.post("/foodie", function (req, res) {
            console.log(req.body);
            var user = req.body;
            user.userID = _this.idGenerator;
            _this.idGenerator++;
            _this.Foodie.createUser(res, user);
        });
        // get foodie by email
        router.get("/login/:emailAddress", function (req, res) {
            var emailAddress = req.params.emailAddress;
            _this.Foodie.getUserByemailAddress(res, emailAddress);
        });
        // get foodie by id
        router.get("/foodie/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Query single user with id: ", userId);
            if (isNaN(userId)) {
                console.log("it is a NaN");
            }
            else {
                _this.Foodie.getUserByID(res, userId);
            }
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
    return Foodie;
}());
exports.Foodie = Foodie;
var RestaurantOwner = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function RestaurantOwner() {
        this.Owner = new UserModel_1.RestaurantOwnerModel();
        this.idGenerator = 1000;
    }
    RestaurantOwner.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // configure API endpoints.
    RestaurantOwner.prototype.routes = function (router) {
        var _this = this;
        // create restaurantOwner
        router.post("/restaurantOwner", function (req, res) {
            console.log(req.body);
            var user = req.body;
            user.userID = _this.idGenerator;
            _this.idGenerator++;
            _this.Owner.createUser(res, user);
        });
        // // get login page
        // router.get("/login", (req, res) => {
        //     var userPayload: any = req;
        //     console.log("login with userID: ", userPayload.userID);
        //     console.log("login with userPassword: ", userPayload.password);
        //     this.Owner.logInByIDAndPassword(res, userPayload);
        // });
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
    return RestaurantOwner;
}());
exports.RestaurantOwner = RestaurantOwner;
var Admin = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function Admin() {
        this.Admin = new UserModel_1.AdminModel();
        this.idGenerator = 2000;
    }
    Admin.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // configure API endpoints.
    Admin.prototype.routes = function (router) {
        var _this = this;
        // create admin
        router.post("/admin", function (req, res) {
            console.log(req.body);
            var user = req.body;
            user.userID = _this.idGenerator;
            _this.idGenerator++;
            _this.Admin.createUser(res, user);
        });
        // // get login page
        // router.get("/login", (req, res) => {
        //     var userPayload: any = req;
        //     console.log("login with userID: ", userPayload.userID);
        //     console.log("login with userPassword: ", userPayload.password);
        //     this.Admin.logInByIDAndPassword(res, userPayload);
        // });
        // get foodie by id
        router.get("/admin/foodies/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Query single foodie with id: ", userId);
            _this.Admin.getUserByID(res, userId);
        });
        // get all users by userType:
        // userType can be: restaurantOwners, admin, foodie ,user(all types)
        router.get("/admin/users/:userType", function (req, res) {
            var userType = req.params.userType;
            if (userType === "restaurantOwners") {
                console.log("Get all restaurantOwners: ", userType);
                _this.Admin.getAllRestaurantOwners(res);
            }
            else if (userType === "admin") {
                console.log("Get all admins: ", userType);
                _this.Admin.getAllAdmins(res);
            }
            else if (userType === "foodie") {
                console.log("Get all foodies: ", userType);
                _this.Admin.getAllFoodies(res, userType);
            }
            else if (userType === "user") {
                console.log("get all users");
                _this.Admin.getAllUsers(res);
            }
            else {
                console.log("unknown user type");
                res.json("unkown user type");
            }
        });
        // get restaurantOwner by id
        router.get("/admin/restaurantOwners/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("Query single restaurantOwner with id: ", userId);
            _this.Admin.getUserByID(res, userId);
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
    return Admin;
}());
exports.Admin = Admin;
