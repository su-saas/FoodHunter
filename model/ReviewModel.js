"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
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
    };
    ReviewModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("review", this.schema);
    };
    ReviewModel.prototype.createReview = function (review, response) {
        var res = false;
        this.model(review).save(function (err) {
            if (err) {
                console.error(err);
            }
            else {
                res = true;
            }
            response.json(review.reviewID);
        });
    };
    ReviewModel.prototype.deleteReviewByID = function (reviewID, response) {
        var res = false;
        this.model.deleteOne({ reviewID: reviewID }, function (err) {
            if (err) {
                console.error(err);
            }
            else {
                res = true;
            }
            response.json(res);
        });
    };
    ReviewModel.prototype.updateReview = function (reviewID, review, response) {
        var res = false;
        this.model.findOneAndUpdate({ reviewID: reviewID }, review, { "new": true }, function (err) {
            if (err) {
                console.error(err);
            }
            else {
                res = true;
            }
            response.json(res);
        });
    };
    ReviewModel.prototype.getReviewByID = function (userID, response) {
        var query = this.model.find({ userID: userID });
        query.exec(function (err, reviews) {
            if (err) {
                console.error(err);
            }
            response.json(reviews);
        });
    };
    ReviewModel.prototype.getAllReviews = function (response) {
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
            response.json(reviews);
        });
    };
    return ReviewModel;
}());
exports.ReviewModel = ReviewModel;
