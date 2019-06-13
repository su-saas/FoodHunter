"use strict";
exports.__esModule = true;
var ReviewModel_1 = require("../model/ReviewModel");
// Creates and configures an ExpressJS web server.
var Review = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function Review() {
        this.idGenerator = 1000;
        this.Reviews = new ReviewModel_1.ReviewModel();
    }
    Review.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // Configure API endpoints.
    Review.prototype.routes = function (router) {
        var _this = this;
        router.get('/review', function (req, res) {
            _this.Reviews.getAllReviews(res);
        });
        router.get('/review/:reviewID', function (req, res) {
            var reviewID = req.params.reviewID;
            _this.Reviews.getReviewByID(reviewID, res);
        });
        router["delete"]('/review/:reviewID', function (req, res) {
            var reviewID = req.params.reviewID;
            _this.Reviews.deleteReviewByID(reviewID, res);
        });
        router.put('/review/:reviewID', function (req, res) {
            var reviewID = req.params.reviewID;
            var reviewBody = req.body;
            _this.Reviews.updateReview(reviewID, reviewBody, res);
        });
        router.post('/review', function (req, res) {
            var review = req.body;
            review.reviewID = _this.idGenerator;
            _this.idGenerator++;
            _this.Reviews.createReview(review, res);
        });
    };
    return Review;
}());
exports.Review = Review;
