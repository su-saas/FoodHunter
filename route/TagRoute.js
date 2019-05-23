"use strict";
exports.__esModule = true;
var TagModel_1 = require("../model/TagModel");
// creates and configures an ExpressJS web server.
var TagRoute = /** @class */ (function () {
    // run configuration methods on the Express instance.
    function TagRoute() {
        this.Tag = new TagModel_1.TagModel();
    }
    TagRoute.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // configure API endpoints.
    TagRoute.prototype.routes = function (router) {
        var _this = this;
        // create Tag
        router.post("/tag", function (req, res) {
            console.log(req.body);
            var tag = req.body;
            _this.Tag.createTag(res, tag);
        });
        // get all tags
        router.get("/tag", function (req, res) {
            console.log("get all tags");
            _this.Tag.getAllTags(res);
        });
        // get tag by id
        router.get("/tag/:tagID", function (req, res) {
            var tagId = req.params.tagID;
            console.log("get tag by tagID:", tagId);
            _this.Tag.getTagByTagID(res, tagId);
        });
        // update tag by tagId
        router.put("/tag/:tagID", function (req, res) {
            var tagId = req.params.tagID;
            var tagBody = req.body;
            console.log("update tag by tagID:", tagId);
            _this.Tag.updateTagByTagID(res, tagId, tagBody);
        });
        // delete tag by tagId
        router["delete"]("/tag/:tagID", function (req, res) {
            var tagId = req.params.tagID;
            console.log("delete tag by tagID:", tagId);
            _this.Tag.deleteTagByTagID(res, tagId);
        });
    };
    return TagRoute;
}());
exports.TagRoute = TagRoute;
