import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import {DishModel} from '../model/DishModel';

class Menu {
    public Dish:DishModel;
    constructor() {
        this.Dish = new DishModel();
    }
    public registerDishRoutes(router: express.Router) {
      this.routes(router);
  }
    private routes(router: express.Router): void {
      router.get('/menu/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.Dish.retrieveDishDetails(res, {restaurantID: id}); 
      });

      router.post('/menu', (req, res) => {
        var body = req.body;
        this.Dish.addNewDish(res, body); 
      });
  
      router.put('/menu/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.Dish.updateDish(res, {restaurantID: id}, req.body);
      });
  
      router.delete('/menu/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.Dish.deleteDish(res, {restaurantID: id}); 
      });
    }
}
export {Menu};