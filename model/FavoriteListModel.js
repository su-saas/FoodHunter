"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var FavoriteListModel = /** @class */ (function () {
    function FavoriteListModel() {
        this.createSchema();
        this.createModel();
    }
    FavoriteListModel.constructorFromData = function (favoriteListID, userID, restaurantIDList) {
        var newObj = {
            favoriteListID: favoriteListID,
            userID: userID,
            restaurantIDList: restaurantIDList
        };
        return newObj;
    };
    FavoriteListModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            favoriteListID: {
                type: Number,
                required: true,
                unique: true,
                dropDups: true
            },
            userID: {
                type: Number,
                required: true
            },
            restaurantIDList: {
                type: [Number],
                required: true
            }
        }, { collection: 'favoriteList' });
    };
    FavoriteListModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("favoriteList", this.schema);
    };
    FavoriteListModel.prototype.createFavoriteList = function (favoriteList, response) {
        var res = false;
        this.model(favoriteList).save(function (err) {
            if (err) {
                console.error(err);
            }
            else {
                res = true;
            }
            response.json(favoriteList.favoriteListID);
        });
    };
    FavoriteListModel.prototype.deleteFavoriteListByID = function (favoriteListID, response) {
        var res = false;
        this.model.deleteOne({ favoriteListID: favoriteListID }, function (err) {
            if (err) {
                console.error(err);
            }
            else {
                res = true;
            }
            response.json(res);
        });
    };
    FavoriteListModel.prototype.updateFavoriteList = function (favoriteListID, favoriteList, response) {
        var res = false;
        this.model.findOneAndUpdate({ favoriteListID: favoriteListID }, favoriteList, { "new": true }, function (err) {
            if (err) {
                console.error(err);
            }
            else {
                res = true;
            }
            response.json(res);
        });
    };
    FavoriteListModel.prototype.getFavoriteListByID = function (favoriteListID, response) {
        var query = this.model.find({ favoriteListID: favoriteListID });
        query.exec(function (err, favoriteLists) {
            if (err) {
                console.error(err);
                response.json(favoriteLists);
            }
            else {
                response.json(favoriteLists);
            }
        });
    };
    FavoriteListModel.prototype.getFavoriteListByUserID = function (userID, response) {
        var query = this.model.find({ userID: userID });
        query.exec(function (err, favoriteLists) {
            if (err) {
                console.error(err);
                response.json(favoriteLists);
            }
            else {
                response.json(favoriteLists);
            }
        });
    };
    FavoriteListModel.prototype.getAllFavoriteLists = function (response) {
        var query = this.model.find({});
        var favoriteLists = null;
        query.exec(function (err, res) {
            if (err) {
                console.error(err);
            }
            else if (res.length > 0) {
                favoriteLists = res;
            }
            else {
                console.log('no result');
            }
            response.json(favoriteLists);
        });
    };
    return FavoriteListModel;
}());
exports.FavoriteListModel = FavoriteListModel;
