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
      router.get('/menu/:restaurantID', async (req, res) => {
          var id = req.params.restaurantID;
          console.log('restaurant id:' + id);
          var dish = await this.Dish.retrieveDishDetails({restaurantID: id}); 
          console.log('Dish: ' + dish);
          res.status(200).send(dish);
        });
    
        router.put('/menu/:restaurantID', async (req, res) => {
          var id = req.params.restaurantID;
          console.log('restaurant id:' + id);
          var success = await this.Dish.updateDish({restaurantID: id}, req.body);
          console.log('update dish: ' + success);
          res.status(200).send(success);
        });
    
        router.delete('/menu/:restaurantID', async (req, res) => {
          var id = req.params.restaurantID;
          console.log('restaurant id:' + id);
          var success = await this.Dish.deleteDish({restaurantID: id}); 
          console.log('delete dish: ' + success);
          res.status(200).send(success);
        });
    }
}
export {Menu};