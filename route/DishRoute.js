"use strict";
exports.__esModule = true;
var DishModel_1 = require("../model/DishModel");
var Dish = /** @class */ (function () {
    function Dish() {
        this.Dish = new DishModel_1.DishModel();
        this.idGenerator = 10;
    }
    Dish.prototype.registerDishRoutes = function (router) {
        this.routes(router);
    };
    Dish.prototype.routes = function (router) {
        var _this = this;
        router.get('/menu/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.Dish.retrieveAllForOneRestaurant(res, { restaurantID: id });
        });
        router.get('/menu/dish/:dishID', function (req, res) {
            var id = req.params.dishID;
            console.log('restaurant id:' + id);
            _this.Dish.retrieveDishDetails(res, { dishID: id });
        });
        router.post('/menu/dish', function (req, res) {
            var body = req.body;
            body.dishID = _this.idGenerator;
            _this.idGenerator++;
            console.log('successfully create a dish');
            _this.Dish.addNewDish(res, body);
        });
        router.put('/menu/dish/:dishID', function (req, res) {
            var id = req.params.dishID;
            console.log('restaurant id:' + id);
            _this.Dish.updateDish(res, { dishID: id }, req.body);
        });
        router["delete"]('/menu/dish/:dishID', function (req, res) {
            var id = req.params.dishID;
            console.log('restaurant id:' + id);
            _this.Dish.deleteDish(res, { dishID: id });
        });
    };
    return Dish;
}());
exports.Dish = Dish;
