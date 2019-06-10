"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var UserModel = /** @class */ (function () {
    // the constructor of the model
    function UserModel() {
        this.createSchema();
        this.createModel();
    }
    UserModel.constructorFromData = function (id, name, pwd, email, typ) {
        var newObj = {
            userID: id,
            userName: name,
            password: pwd,
            emailAddress: email,
            userType: typ
        };
        return newObj;
    };
    // create user by user information
    // assumption: each user can only create themselves (type check)
    UserModel.prototype.createUser = function (response, user) {
        this.model(user).save(function (err, newUser) {
            if (err) {
                response.send(err);
            }
            response.json(newUser);
        });
    };
    // for each user they need to provide userID and password to LOGIN
    // payload: userID
    //          password
    UserModel.prototype.logInByIDAndPassword = function (response, payload) {
        if (payload.userID === 1) {
            console.error("Please sign up at first");
        }
        else {
            var query = this.model.findOne({ userID: payload.userID }, { password: payload.password });
            query.exec(function (err, user) {
                if (err) {
                    response.send(err);
                }
                response.json(user);
            });
        }
    };
    // todo: log out*************************************
    // for each user they need to provide their userID to GET themselves
    // for admin he needs to provide user's userID to GET user
    UserModel.prototype.getUserByID = function (response, userId) {
        var query = this.model.findOne({ userID: userId });
        query.exec(function (err, tag) {
            if (err) {
                response.send(err);
            }
            response.json(tag);
        });
    };
    UserModel.prototype.getUserByemailAddress = function (response, emailAddress) {
        var query = this.model.findOne({ emailAddress: emailAddress });
        query.exec(function (err, tag) {
            if (err) {
                response.send(err);
            }
            response.json(tag);
        });
    };
    // for each user they need to provide their userID and the updated body to UPDATE themselves
    UserModel.prototype.updateUserByID = function (response, userId, body) {
        this.model.findOneAndUpdate({ userID: userId }, body, { "new": true }, function (err, newUser) {
            if (err) {
                response.send(err);
            }
            response.json(newUser);
        });
    };
    // for each user they need to provide their userID to DELETE themselves
    // for admin he needs to provide user's userID to DELETE user
    UserModel.prototype.deleteUserByID = function (response, userId) {
        this.model.remove({ userID: userId }, function (err) {
            if (err) {
                response.send(err);
            }
            response.json({ message: "Successfully deleted " + userId });
        });
    };
    return UserModel;
}());
var FoodieModel = /** @class */ (function (_super) {
    __extends(FoodieModel, _super);
    // the constructor of the model
    function FoodieModel() {
        return _super.call(this) || this;
    }
    FoodieModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userID: {
                type: Number,
                required: true,
                unique: true,
                dropDups: true
            },
            userName: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            emailAddress: {
                type: String,
                required: true
            },
            userType: {
                type: Number,
                required: true
            },
            tagListID: {
                type: Number
            },
            favoriteListID: {
                type: Number
<<<<<<< HEAD
            },
            avatar: {
                type: String
=======
>>>>>>> add js
            }
        }, { collection: "user" });
        this.schema.index({ userID: 1 }, { password: null }, { emailAddress: null }, { unique: true });
    };
    FoodieModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("foodie", this.schema);
    };
    return FoodieModel;
}(UserModel));
exports.FoodieModel = FoodieModel;
var RestaurantOwnerModel = /** @class */ (function (_super) {
    __extends(RestaurantOwnerModel, _super);
    // the constructor of the model
    function RestaurantOwnerModel() {
        return _super.call(this) || this;
    }
    RestaurantOwnerModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userID: {
                type: Number,
                required: true,
                unique: true,
                dropDups: true
            },
            userName: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            emailAddress: {
                type: String,
                required: true
            },
            userType: {
                type: Number,
                required: true
            }
        }, { collection: "user" });
    };
    RestaurantOwnerModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("rOwner", this.schema);
    };
    return RestaurantOwnerModel;
}(UserModel));
exports.RestaurantOwnerModel = RestaurantOwnerModel;
var AdminModel = /** @class */ (function (_super) {
    __extends(AdminModel, _super);
    // the constructor of the model
    function AdminModel() {
        return _super.call(this) || this;
    }
    AdminModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userID: {
                type: Number,
                required: true,
                unique: true,
                dropDups: true
            },
            userName: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            emailAddress: {
                type: String,
                required: true
            },
            userType: {
                type: Number,
                required: true
            }
        }, { collection: "user" });
    };
    AdminModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("admin", this.schema);
    };
    AdminModel.prototype.getAllUsers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, userList) {
            response.json(userList);
        });
    };
    AdminModel.prototype.getAllFoodies = function (response, foodieType) {
        var query = this.model.find({ userType: 1 });
        query.exec(function (err, foodieList) {
            response.json(foodieList);
        });
    };
    AdminModel.prototype.getAllRestaurantOwners = function (response) {
        var query = this.model.find({ userType: 2 });
        query.exec(function (err, ownerList) {
            response.json(ownerList);
        });
    };
    AdminModel.prototype.getAllAdmins = function (response) {
        var query = this.model.find({ userType: 3 });
        query.exec(function (err, adminList) {
            response.json(adminList);
        });
    };
    return AdminModel;
}(UserModel));
exports.AdminModel = AdminModel;
