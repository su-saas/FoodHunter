"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var url = require("url");
var RestaurantModel_1 = require("../model/RestaurantModel");
var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.Restaurant = new RestaurantModel_1.RestaurantModel();
    }
    Restaurant.prototype.registerRestaurantRoutes = function (router) {
        this.routes(router);
    };
    Restaurant.prototype.routes = function (router) {
        var _this = this;
        router.get('/restaurant', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var restaurants;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('All restaurants');
                        return [4 /*yield*/, this.Restaurant.retrieveAll()];
                    case 1:
                        restaurants = _a.sent();
                        console.log(restaurants);
                        res.status(200).send(restaurants);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/restaurant/:restaurantID', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, restaurant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.restaurantID;
                        console.log('restaurant id:' + id);
                        return [4 /*yield*/, this.Restaurant.retrieveRestaurantDetails({ restaurantID: id })];
                    case 1:
                        restaurant = _a.sent();
                        console.log(restaurant);
                        res.status(200).send(restaurant);
                        return [2 /*return*/];
                }
            });
        }); });
        router.put('/restaurant/:restaurantID', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('update restaurant');
                        id = req.params.restaurantID;
                        console.log('restaurant id:' + id);
                        return [4 /*yield*/, this.Restaurant.updateRestaurant({ restaurantID: id }, req.body)];
                    case 1:
                        success = _a.sent();
                        console.log('update restaurant: ' + success);
                        res.status(200).send(success);
                        return [2 /*return*/];
                }
            });
        }); });
        router["delete"]('/restaurant/:restaurantID', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, success;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('delete restaurant');
                        id = req.params.restaurantID;
                        console.log('restaurant id:' + id);
                        return [4 /*yield*/, this.Restaurant.deleteRestaurant({ restaurantID: id })];
                    case 1:
                        success = _a.sent();
                        console.log('delete restaurant: ' + success);
                        res.status(200).send(success);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get('/search', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var urlParts, query, msg, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlParts = url.parse(req.url, true);
                        query = urlParts.query;
                        msg = 'search for ' + query.var1;
                        console.log(msg);
                        return [4 /*yield*/, this.Restaurant.getByKeyword(query)];
                    case 1:
                        result = _a.sent();
                        console.log('search restaurant: ' + result);
                        res.status(200).send(result);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
