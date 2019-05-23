"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RestaurantModel = /** @class */ (function () {
    function RestaurantModel() {
        this.createSchema();
        this.createModel();
    }
    RestaurantModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            userID: {
                type: Number,
                required: true
            },
            restaurantID: {
                type: Number,
                unique: true
            },
            restaurantName: {
                type: String,
                required: true,
                unique: true
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
            },
            averagePrice: {
                type: Number,
                required: true
            }
        }, { collection: 'restaurant' });
    };
    RestaurantModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Restaurant", this.schema);
    };
    RestaurantModel.prototype.retrieveAll = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RestaurantModel.prototype.retrieveRestaurantDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RestaurantModel.prototype.addNewRestaurant = function (response, restaurant) {
        this.model(restaurant).save(function (err, restaurant) {
            if (err) {
                response.send(err);
            }
            response.json(restaurant);
        });
    };
    RestaurantModel.prototype.updateRestaurant = function (response, filter, body) {
        this.model.findOneAndUpdate(filter, body, { "new": true }, function (err, restaurant) {
            if (err) {
                response.send(err);
            }
            response.json(restaurant);
        });
    };
    RestaurantModel.prototype.deleteRestaurant = function (response, filter) {
        this.model.remove(filter, function (err, restaurant) {
            if (err) {
                response.send(err);
            }
            response.json(restaurant);
        });
    };
    //combine getByRestaurantName and getBykeyWord 
    RestaurantModel.prototype.getByKeyword = function (response, filter) {
        this.model.find(filter, function (err, restaurant) {
            if (err) {
                response.send(err);
            }
            response.json(restaurant);
        });
    };
    return RestaurantModel;
}());
exports.RestaurantModel = RestaurantModel;
