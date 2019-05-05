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
    UserModel.prototype.createSchema = function () {
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
        }, { collection: 'user' });
    };
    UserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("user", this.schema);
    };
    UserModel.prototype.createUser = function (user) {
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
    UserModel.prototype.deleteUserByID = function (id) {
        var deferred = Q.defer();
        var res = false;
        this.model.deleteOne({ userID: id }, function (err) {
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
