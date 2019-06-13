"use strict";
exports.__esModule = true;
var RecommendationListModel_1 = require("../model/RecommendationListModel");
// Creates and configures an ExpressJS web server.
var RecommendationList = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function RecommendationList() {
        this.recommendationList = new RecommendationListModel_1.RecommendationListModel();
        this.idGenerator = 1000;
    }
    RecommendationList.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // Configure API endpoints.
    RecommendationList.prototype.routes = function (router) {
        var _this = this;
        //get by id
        router.get('/recommendationlist/:recommendationlistID', function (req, res) {
            var recommendationlistID = req.params.recommendationlistID;
            console.log('try to get listID:', recommendationlistID);
            _this.recommendationList.getrecommendationListByID(res, recommendationlistID);
        });
        //get by tagListid
        router.get('/recommendationlist/tagList/:tagListID', function (req, res) {
            var taglistID = req.params.tagListID;
            console.log('try to get taglistID:', taglistID);
            _this.recommendationList.getrecommendationListByTagListID(res, taglistID);
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
        router.put('/recommendationlist/tagList/:tagListID', function (req, res) {
            var tagListID = req.params.tagListID;
            console.log('try to update:', tagListID);
            var newrecommendationList = req.body;
            console.log('get list from service in route:', newrecommendationList);
            _this.recommendationList.updateRecommendationListByTagListID(res, tagListID, newrecommendationList);
        });
        router.post('/recommendationlist', function (req, res) {
            var newrecommendationList = req.body;
            newrecommendationList.recommendationlistID = _this.idGenerator + newrecommendationList.foodietaglistID;
            console.log('try to create:', newrecommendationList.recommendationlistID);
            _this.recommendationList.createRecommendationList(res, newrecommendationList);
        });
    };
    return RecommendationList;
}());
exports.RecommendationList = RecommendationList;
