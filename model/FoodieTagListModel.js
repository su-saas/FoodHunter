"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var FoodieTagListModel = /** @class */ (function () {
    function FoodieTagListModel() {
        this.createSchema();
        this.createModel();
    }
    FoodieTagListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            tagListID: {
                type: Number,
                required: true,
                unique: true
            },
            userID: {
                type: Number,
                required: true,
                unique: true
            },
            tagList: {
                type: [Number],
                required: true
            }
        }, { collection: "foodieTagList" });
    };
    FoodieTagListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("foodieTagList", this.schema);
    };
    FoodieTagListModel.prototype.createTagList = function (response, tagList) {
        this.model(tagList).save(function (err, newTagList) {
            if (err) {
                response.send(err);
            }
            else {
                response.json(newTagList);
            }
        });
    };
    FoodieTagListModel.prototype.getAllTagLists = function (response) {
        var query = this.model.find({});
        query.exec(function (err, tagLists) {
            if (err) {
                response.send(err);
            }
            else {
                response.json(tagLists);
            }
        });
    };
    FoodieTagListModel.prototype.getTagListByFoodieID = function (response, userId) {
        var query = this.model.findOne({ userID: userId });
        query.exec(function (err, tag) {
            if (err) {
                response.send(err);
            }
            else {
                response.json(tag);
            }
        });
    };
    FoodieTagListModel.prototype.updateTagListByFoodieID = function (response, userId, tagList) {
        this.model.findOneAndUpdate({ userID: userId }, tagList, { "new": true }, function (err, newTagList) {
            if (err) {
                response.send(err);
            }
            else {
                response.json(newTagList);
            }
        });
    };
    FoodieTagListModel.prototype.deleteTagListByFoodieID = function (response, foodieId) {
        this.model.remove({ userID: foodieId }, function (err) {
            if (err) {
                response.send(err);
            }
            else {
                response.json({ message: "Successfully deleted " + foodieId + "'s tagList" });
            }
        });
    };
    return FoodieTagListModel;
}());
exports.FoodieTagListModel = FoodieTagListModel;
