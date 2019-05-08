"use strict";
exports.__esModule = true;
var RecommendationListModel_1 = require("../model/RecommendationListModel");
// Creates and configures an ExpressJS web server.
var RecommendationListRoute = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function RecommendationListRoute() {
        this.recommendationList = new RecommendationListModel_1.RecommendationListModel();
    }
    RecommendationListRoute.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // Configure API endpoints.
    RecommendationListRoute.prototype.routes = function (router) {
        var _this = this;
        //get by id
        router.get('/recommendationlist/:recommendationlistID', function (req, res) {
            var recommendationlistID = req.params.recommendationlistID;
            console.log('try to get listID:', recommendationlistID);
            _this.recommendationList.getrecommendationListByID(res, recommendationlistID);
        });
        router["delete"]('/recommendationlist/:recommendationlistID', function (req, res) {
            var recommendationlistID = req.params.recommendationlistID;
            console.log('try to delete listID:', recommendationlistID);
            _this.recommendationList.deleteRecommendationList(res, recommendationlistID);
        });
        router.put('/recommendationlist/:recommendationlistID', function (req, res) {
            var recommendationlistID = req.params.recommendationlistID;
            console.log('try to update:', recommendationlistID);
            var newrecommendationList = req.body;
            _this.recommendationList.updateRecommendationList(res, recommendationlistID, newrecommendationList);
        });
        router.post('/recommendationlist', function (req, res) {
            var newrecommendationList = req.body;
            console.log('try to create:', req.params.recommendationlistID);
            _this.recommendationList.createRecommendationList(res, newrecommendationList);
        });
    };
    return RecommendationListRoute;
}());
exports.RecommendationListRoute = RecommendationListRoute;
