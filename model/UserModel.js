"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
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
    UserModel.prototype.retrieveAllUsers = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
