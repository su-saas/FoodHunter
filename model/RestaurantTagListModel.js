"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var RestaurantTagListModel = /** @class */ (function () {
    function RestaurantTagListModel() {
        this.createSchema();
        this.createModel();
    }
    RestaurantTagListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            restaurantID: Number,
            rtaglist: [{
                    tagID: Number
                }]
        }, { collection: 'rtaglist' });
    };
    RestaurantTagListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("RestaurantTagList", this.schema);
    };
    RestaurantTagListModel.prototype.retrieveAll = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    RestaurantTagListModel.prototype.retrieverTagListDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return RestaurantTagListModel;
}());
exports.RestaurantTagListModel = RestaurantTagListModel;
