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
    UserModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userID: Number,
            userName: String,
            password: String,
            emailAddress: String,
            userType: Number
        }, { collection: 'user' });
    };
    UserModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("user", this.schema);
    };
    UserModel.prototype.createUser = function () {
        this.model({ userID: 100 }).save(function (err) {
            if (err) {
                console.error(err);
                return false;
            }
        });
        return true;
    };
    UserModel.prototype.getByUserID = function (id) {
        var deferred = Q.defer();
        var query = this.model.find({ userID: id });
        var user;
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
                    console.log('in model: ', user);
                    deferred.resolve(user);
                }
            }
            else {
                console.log('no result');
            }
        });
        return deferred.promise;
    };
    UserModel.prototype.retrieveAllUsers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
