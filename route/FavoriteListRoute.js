"use strict";
exports.__esModule = true;
//connect to the model 
var FavoriteListModel_1 = require("../model/FavoriteListModel");
// Creates and configures an ExpressJS web server.
var FavoriteList = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function FavoriteList() {
        this.idGenerator = 10000;
        this.FavoriteLists = new FavoriteListModel_1.FavoriteListModel();
    }
    FavoriteList.prototype.registerRoutes = function (router) {
        this.routes(router);
    };
    // Configure API endpoints.
    FavoriteList.prototype.routes = function (router) {
        var _this = this;
        router.get('/favoriteList', function (req, res) {
            _this.FavoriteLists.getAllFavoriteLists(res);
        });
        router.get('/favoriteList/:favoriteListID', function (req, res) {
            var favoriteListID = req.params.favoriteListID;
            _this.FavoriteLists.getFavoriteListByID(favoriteListID, res);
        });
        router.get('/favoriteList/user/:userID', function (req, res) {
            var userID = req.params.userID;
            _this.FavoriteLists.getFavoriteListByUserID(userID, res);
        });
        router["delete"]('/favoriteList/:favoriteListID', function (req, res) {
            var favoriteListID = req.params.favoriteListID;
            _this.FavoriteLists.deleteFavoriteListByID(favoriteListID, res);
        });
        router.put('/favoriteList/:favoriteListID', function (req, res) {
            var favoriteListID = req.params.favoriteListID;
            var favoriteListBody = req.body;
            _this.FavoriteLists.updateFavoriteList(favoriteListID, favoriteListBody, res);
        });
        router.post('/favoriteList', function (req, res) {
            var favoriteList = req.body;
            favoriteList.favoriteListID = _this.idGenerator;
            _this.idGenerator++;
            _this.FavoriteLists.createFavoriteList(favoriteList, res);
        });
    };
    return FavoriteList;
}());
exports.FavoriteList = FavoriteList;
