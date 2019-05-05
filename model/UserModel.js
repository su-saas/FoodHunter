"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
//let mongooseObj = DataAccess.mongooseInstance;
var Q = require('q');
var UserModel = /** @class */ (function () {
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
    UserModel.prototype.checkUserProperty = function (user) {
        if (("userID" in user) == false) {
            //console.log(1);
            return false;
        }
        if (("userName" in user) == false) {
            //console.log(2);
            return false;
        }
        if (("password" in user) == false) {
            //console.log(3);
            return false;
        }
        if (("emailAddress" in user) == false) {
            //console.log(4);
            return false;
        }
        if (("userType" in user) == false) {
            //console.log(5);
            return false;
        }
        return true;
    };
    UserModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userID: Number,
            userName: String,
            password: String,
            emailAddress: String,
            userType: Number
        }, { collection: 'user' });
        this.schema.index({ userID: 1 }, { unique: true });
    };
    UserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("user", this.schema);
    };
    UserModel.prototype.createUser = function (user) {
        if (!this.checkUserProperty(user)) {
            console.error("Something of the user you want to create is missing");
            return;
        }
        var deferred = Q.defer();
        var res = false;
        this.model(user).save(function (err) {
            if (err) {
                console.error(err);
            }
            else {
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    };
    UserModel.prototype.updateUser = function (user) {
        console.log('in updateUser:', user);
        if (!this.checkUserProperty(user)) {
            console.error("Something of the user you want to update is missing");
            return;
        }
        var deferred = Q.defer();
        var res = false;
        this.model.findOneAndUpdate({ userID: user.userID }, user, { "new": true }, function (err) {
            if (err) {
                console.error(err);
            }
            else {
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    };
    UserModel.prototype.getUserByID = function (id) {
        var deferred = Q.defer();
        var query = this.model.find({ userID: id });
        var user = null;
        query.exec(function (err, users) {
            if (err) {
                console.error(err);
            }
            else if (users.length > 1) {
                console.error('Duplicate error in User');
            }
            else if (users.length == 1) {
                for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                    var u = users_1[_i];
                    user = u;
                }
            }
            else {
                console.log('no result');
            }
            deferred.resolve(user);
        });
        return deferred.promise;
    };
    UserModel.prototype.getAllUsers = function () {
        var deferred = Q.defer();
        var query = this.model.find({});
        var users;
        query.exec(function (err, res) {
            if (err) {
                console.error(err);
            }
            else if (res.length > 0) {
                users = res;
            }
            else {
                console.log('no result');
            }
            deferred.resolve(users);
        });
        return deferred.promise;
    };
    return UserModel;
}());
exports.UserModel = UserModel;
