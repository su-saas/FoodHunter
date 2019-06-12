"use strict";
exports.__esModule = true;
var FoodieTagListModel_1 = require("../model/FoodieTagListModel");
// creates and configures an ExpressJS web server.
var FoodieTagList = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function FoodieTagList() {
        this.TagList = new FoodieTagListModel_1.FoodieTagListModel();
        this.idGenerator = 1000;
    }
    FoodieTagList.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // configure API endpoints.
    FoodieTagList.prototype.routes = function (router) {
        var _this = this;
        // create TagList
        router.post("/tagList", function (req, res) {
            var list = req.body;
            list.tagListID = _this.idGenerator;
            _this.idGenerator++;
            console.log(list);
            _this.TagList.createTagList(res, list);
        });
        // get all list
        router.get("/tagList", function (req, res) {
            console.log("get all tags");
            _this.TagList.getAllTagLists(res);
        });
        // get list by userId
        router.get("/tagList/:userID", function (req, res) {
            var userId = req.params.userID;
            console.log("get foodieTagList by userId:", userId);
            _this.TagList.getTagListByFoodieID(res, userId);
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
    return FoodieTagList;
}());
exports.FoodieTagList = FoodieTagList;
