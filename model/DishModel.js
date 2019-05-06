"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var Q = require('q');
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var DishModel = /** @class */ (function () {
    function DishModel() {
        this.createSchema();
        this.createModel();
    }
    DishModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            restaurantID: Number,
            dishes: [{
                    dishID: Number,
                    dishName: String,
                    dishDetails: String,
                    dishPrice: Number
                }]
        }, { collection: 'dish' });
    };
    DishModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Dish", this.schema);
    };
    DishModel.prototype.createDish = function (dish) {
        var deferred = Q.defer();
        var res = false;
        this.model(dish).save(function (err) {
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
    DishModel.prototype.retrieveAll = function () {
        var deferred = Q.defer();
        var query = this.model.find({});
        var dishs;
        query.exec(function (err, res) {
            if (err) {
                console.error(err);
            }
            else if (res.length > 0) {
                dishs = res;
            }
            else {
                console.log('no result');
            }
            deferred.resolve(dishs);
        });
        return deferred.promise;
    };
    DishModel.prototype.retrieveDishDetails = function (filter) {
        var deferred = Q.defer();
        var query = this.model.find(filter);
        var dish = null;
        query.exec(function (err, res) {
            if (err) {
                console.error(err);
            }
            else if (res.length == 1) {
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var r = res_1[_i];
                    dish = r;
                }
            }
            else {
                console.log('no result');
            }
            deferred.resolve(dish);
        });
        return deferred.promise;
    };
    DishModel.prototype.updateDish = function (filter, body) {
        var deferred = Q.defer();
        var res = false;
        this.model.findOneAndUpdate(filter, body, { "new": true }, function (err) {
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
    DishModel.prototype.deleteDish = function (filter) {
        var deferred = Q.defer();
        var res = false;
        this.model.remove(filter, function (err) {
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
    return DishModel;
}());
exports.DishModel = DishModel;
