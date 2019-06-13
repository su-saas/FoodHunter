"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var RestaurantTagListModel = /** @class */ (function () {
    function RestaurantTagListModel() {
        this.createSchema();
        this.createModel();
    }
    RestaurantTagListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            restaurantID: {
                type: Number,
                unique: true
            },
            rtaglistID: {
                type: Number,
                unique: true
            },
            rtagList: {
                type: [Number],
                required: true
            }
        }, { collection: 'rtaglist' });
    };
    RestaurantTagListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("RestaurantTagList", this.schema);
    };
    RestaurantTagListModel.prototype.addNewrTagList = function (response, tag) {
        this.model(tag).save(function (err, tag) {
            if (err) {
                response.send(err);
            }
            response.json(tag);
        });
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
    RestaurantTagListModel.prototype.updateTagList = function (response, filter, body) {
        this.model.findOneAndUpdate(filter, body, { "new": true }, function (err, tagList) {
            if (err) {
                response.send(err);
            }
            response.json(tagList);
        });
    };
    RestaurantTagListModel.prototype.deleteTagList = function (response, filter) {
        this.model.remove(filter, function (err, tagList) {
            if (err) {
                response.send(err);
            }
            response.json(tagList);
        });
    };
    return RestaurantTagListModel;
}());
exports.RestaurantTagListModel = RestaurantTagListModel;
