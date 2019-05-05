"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var Q = require('q');
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RestaurantModel = /** @class */ (function () {
    function RestaurantModel() {
        this.createSchema();
        this.createModel();
    }
    RestaurantModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userID: Number,
            restaurantID: Number,
            restaurantName: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            phoneNum: {
                type: String,
                required: true
            },
            introductionContent: String,
            hours: {
                type: String,
                required: true
            }
        }, { collection: 'restaurant' });
    };
    RestaurantModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Restaurant", this.schema);
    };
    RestaurantModel.prototype.createRestaurant = function (restaurant) {
        var deferred = Q.defer();
        var res = false;
        this.model(restaurant).save(function (err) {
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
    RestaurantModel.prototype.retrieveAll = function () {
        var deferred = Q.defer();
        var query = this.model.find({});
        var restaurants;
        query.exec(function (err, res) {
            if (err) {
                console.error(err);
            }
            else if (res.length > 0) {
                restaurants = res;
            }
            else {
                console.log('no result');
            }
            deferred.resolve(restaurants);
        });
        return deferred.promise;
    };
    RestaurantModel.prototype.retrieveRestaurantDetails = function (filter) {
        var deferred = Q.defer();
        var query = this.model.find(filter);
        var restaurant = null;
        query.exec(function (err, res) {
            if (err) {
                console.error(err);
            }
            else if (res.length == 1) {
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var r = res_1[_i];
                    restaurant = r;
                }
            }
            else {
                console.log('no result');
            }
            deferred.resolve(restaurant);
        });
        return deferred.promise;
    };
    RestaurantModel.prototype.updateRestaurant = function (filter, body) {
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
    RestaurantModel.prototype.deleteRestaurant = function (filter) {
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
    //combine getByRestaurantName and getBykeyWord 
    RestaurantModel.prototype.getByKeyword = function (filter) {
        var deferred = Q.defer();
        var query = this.model.find(filter);
        var restaurant = null;
        query.exec(function (err, restaurants) {
            if (err) {
                console.error(err);
            }
            else if (restaurants.length > 1) {
                console.error('error in find restaurant');
            }
            else if (restaurants.length == 1) {
                for (var _i = 0, restaurants_1 = restaurants; _i < restaurants_1.length; _i++) {
                    var r = restaurants_1[_i];
                    restaurant = r;
                }
            }
            else {
                console.log('no result');
            }
            deferred.resolve(restaurant);
        });
        return deferred.promise;
    };
    return RestaurantModel;
}());
exports.RestaurantModel = RestaurantModel;
