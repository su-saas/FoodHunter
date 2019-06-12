"use strict";
exports.__esModule = true;
var RestaurantTagListModel_1 = require("../model/RestaurantTagListModel");
var RestaurantTagList = /** @class */ (function () {
    function RestaurantTagList() {
        this.rTagList = new RestaurantTagListModel_1.RestaurantTagListModel();
        this.idGenerator = 1000;
    }
    RestaurantTagList.prototype.registerrTagListRoutes = function (router) {
        this.routes(router);
    };
    RestaurantTagList.prototype.routes = function (router) {
        var _this = this;
        router.get('/rtags', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.rTagList.retrieveAll(res);
        });
        router.get('/rtags/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.rTagList.retrieverTagListDetails(res, { restaurantID: id });
        });
        router.post('/rtags', function (req, res) {
            var body = req.body;
            body.rtaglistID = _this.idGenerator;
            _this.idGenerator++;
            _this.rTagList.addNewrTagList(res, body);
        });
        router.put('/rtags/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.rTagList.updateTagList(res, { restaurantID: id }, req.body);
        });
        router["delete"]('/rtags/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.rTagList.deleteTagList(res, { restaurantID: id });
        });
    };
    return RestaurantTagList;
}());
exports.RestaurantTagList = RestaurantTagList;
