"use strict";
exports.__esModule = true;
var FoodieTagListModel_1 = require("../model/FoodieTagListModel");
// creates and configures an ExpressJS web server.
var FoodieTagListRoute = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function FoodieTagListRoute() {
        this.TagList = new FoodieTagListModel_1.FoodieTagListModel();
    }
    FoodieTagListRoute.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // configure API endpoints.
    FoodieTagListRoute.prototype.routes = function (router) {
        var _this = this;
        // create TagList
        router.post("/tagList", function (req, res) {
            var list = req.body;
            console.log(list);
            _this.TagList.createTagList(res, list);
        });
        // get all list
        router.get("/tagList", function (res) {
            console.log("get all tags");
            _this.TagList.getAllTagLists(res);
        });
        // get list by userId
        router.get("/tagList/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("get foodieTagList by userId:", userId);
            _this.TagList.getTagListByFoodieID(res, userId);
        });
        // get list by listId
        router.get("/tagList/:listId", function (req, res) {
            var listId = req.params.tagListID;
            console.log("get foodieTagList by listId:", listId);
            _this.TagList.getTagListByListID(res, listId);
        });
        // update list by userId
        router.put("/tagList/:userID", function (req, res) {
            var userId = req.params.userID;
            var listBody = req.body;
            console.log("update taglist by userID:", userId);
            _this.TagList.updateTagListByFoodieID(res, userId, listBody);
        });
        // delete list by userId
        router["delete"]("/tagList/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("delete tagList by userID:", userId);
            _this.TagList.deleteTagListByFoodieID(res, userId);
        });
    };
    return FoodieTagListRoute;
}());
exports.FoodieTagListRoute = FoodieTagListRoute;
