"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var Q = require('q');
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
    FavoriteListModel.prototype.createFavoriteList = function (favoriteList) {
        var deferred = Q.defer();
        var res = false;
        this.model(favoriteList).save(function (err) {
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
    FavoriteListModel.prototype.deleteFavoriteListByID = function (favoriteListID) {
        var deferred = Q.defer();
        var res = false;
        this.model.deleteOne({ favoriteListID: favoriteListID }, function (err) {
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
    FavoriteListModel.prototype.updateFavoriteList = function (favoriteListID, favoriteList) {
        var deferred = Q.defer();
        var res = false;
        this.model.findOneAndUpdate({ favoriteListID: favoriteListID }, favoriteList, { "new": true }, function (err) {
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
    FavoriteListModel.prototype.getFavoriteListByID = function (favoriteListID) {
        var deferred = Q.defer();
        var query = this.model.find({ favoriteListID: favoriteListID });
        var favoriteList = null;
        query.exec(function (err, favoriteLists) {
            if (err) {
                console.error(err);
            }
            else if (favoriteLists.length > 1) {
                console.error('Duplicate error in FavoriteList');
            }
            else if (favoriteLists.length == 1) {
                for (var _i = 0, favoriteLists_1 = favoriteLists; _i < favoriteLists_1.length; _i++) {
                    var u = favoriteLists_1[_i];
                    favoriteList = u;
                }
            }
            else {
                console.log('no result');
            }
            deferred.resolve(favoriteList);
        });
        return deferred.promise;
    };
    FavoriteListModel.prototype.getAllFavoriteLists = function () {
        var deferred = Q.defer();
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
            deferred.resolve(favoriteLists);
        });
        return deferred.promise;
    };
    return FavoriteListModel;
}());
exports.FavoriteListModel = FavoriteListModel;
