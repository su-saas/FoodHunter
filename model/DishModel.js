"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
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
    DishModel.prototype.retrieveAll = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    DishModel.prototype.retrieveDishDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return DishModel;
}());
exports.DishModel = DishModel;
