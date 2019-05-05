"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var Q = require('q');
var ReviewModel = /** @class */ (function () {
    function ReviewModel() {
        this.createSchema();
        this.createModel();
    }
    ReviewModel.constructorFromData = function (reviewID, userID, restaurantID, title, content, date) {
        var newObj = {
            reviewID: reviewID,
            userID: userID,
            restaurantID: restaurantID,
            title: title,
            content: content,
            date: date
        };
        return newObj;
    };
    /* private checkUserProperty(user: any): boolean{
        if(("reviewID" in user) == false){
            return false;
        }
        if(("userID" in user) == false){
            return false;
        }
        if(("restaurantID" in user) == false){
            return false;
        }
        if(("title" in user) == false){
            return false;
        }
        if(("content" in user) == false){
            return false;
        }
        if(("date" in user) == false){
            return false;
        }
        return true;
    } */
    ReviewModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            reviewID: {
                type: Number,
                required: true,
                unique: true,
                dropDups: true
            },
            userID: {
                type: Number,
                required: true
            },
            restaurantID: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            }
        }, { collection: 'review' });
        this.schema.index({ reviewID: 1 }, { unique: true });
    };
    ReviewModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("review", this.schema);
    };
    ReviewModel.prototype.createReview = function (review) {
        var deferred = Q.defer();
        var res = false;
        this.model(review).save(function (err) {
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
    ReviewModel.prototype.deleteReviewByID = function (reviewID) {
        var deferred = Q.defer();
        var res = false;
        this.model.deleteOne({ reviewID: reviewID }, function (err) {
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
    ReviewModel.prototype.updateReview = function (review) {
        var deferred = Q.defer();
        var res = false;
        this.model.findOneAndUpdate({ reviewID: review.reviewID }, review, { "new": true }, function (err) {
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
    ReviewModel.prototype.getReviewByID = function (reviewID) {
        var deferred = Q.defer();
        var query = this.model.find({ reviewID: reviewID });
        var review = null;
        query.exec(function (err, reviews) {
            if (err) {
                console.error(err);
            }
            else if (reviews.length > 1) {
                console.error('Duplicate error in Review');
            }
            else if (reviews.length == 1) {
                for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
                    var u = reviews_1[_i];
                    review = u;
                }
            }
            else {
                console.log('no result');
            }
            deferred.resolve(review);
        });
        return deferred.promise;
    };
    ReviewModel.prototype.getAllReviews = function () {
        var deferred = Q.defer();
        var query = this.model.find({});
        var reviews = null;
        query.exec(function (err, res) {
            if (err) {
                console.error(err);
            }
            else if (res.length > 0) {
                reviews = res;
            }
            else {
                console.log('no result');
            }
            deferred.resolve(reviews);
        });
        return deferred.promise;
    };
    return ReviewModel;
}());
exports.ReviewModel = ReviewModel;
