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
            userID: Number,
            restaurantID: Number,
            restaurantName: {
                type: String,
                require: true
            },
            address: {
                type: String,
                require: true
            },
            phoneNum: {
                type: String,
                require: true
            },
            introductionContent: String,
            hours: {
                type: String,
                require: true
            },
            disklist: [{
                    diskID: Number
                }]
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
    RestaurantModel.prototype.updateRestaurant = function (response, filter, filter2, filter3, filter4, filter5, filter6) {
        var query = this.model.findOneAndUpdate({ restaurantID: { $gte: filter } }, { $set: { restaurantName: filter2, address: filter3,
                phoneNum: filter4, introductionContent: filter5, hours: filter6 } });
        query.exec(function (err, results) { console.log('updated doc'); });
    };
    return RestaurantModel;
}());
exports.RestaurantModel = RestaurantModel;
