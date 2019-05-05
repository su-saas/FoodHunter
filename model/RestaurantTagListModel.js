"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var Q = require('q');
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
    RestaurantTagListModel.prototype.createrTagList = function (rTagList) {
        var deferred = Q.defer();
        var res = false;
        this.model(rTagList).save(function (err) {
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
    RestaurantTagListModel.prototype.retrieveAll = function () {
        var deferred = Q.defer();
        var query = this.model.find({});
        var rTagLists;
        query.exec(function (err, res) {
            if (err) {
                console.error(err);
            }
            else if (res.length > 0) {
                rTagLists = res;
            }
            else {
                console.log('no result');
            }
            deferred.resolve(rTagLists);
        });
        return deferred.promise;
    };
    RestaurantTagListModel.prototype.retrieverTagListDetails = function (filter) {
        var deferred = Q.defer();
        var query = this.model.find(filter);
        var rTagList = null;
        query.exec(function (err, res) {
            if (err) {
                console.error(err);
            }
            else if (res.length == 1) {
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var r = res_1[_i];
                    rTagList = r;
                }
            }
            else {
                console.log('no result');
            }
            deferred.resolve(rTagList);
        });
        return deferred.promise;
    };
    RestaurantTagListModel.prototype.updaterTagList = function (filter, body) {
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
    RestaurantTagListModel.prototype.deleterTagList = function (filter) {
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
    return RestaurantTagListModel;
}());
exports.RestaurantTagListModel = RestaurantTagListModel;
