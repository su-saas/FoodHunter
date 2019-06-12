import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import {DishModel} from '../model/DishModel';

class Dish {
    public Dish:DishModel;
    private idGenerator: number;
    constructor() {
        this.Dish = new DishModel();
        this.idGenerator = 1000;
    }
    public registerDishRoutes(router: express.Router) {
      this.routes(router);
  }
    private routes(router: express.Router): void {
      router.get('/menu/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.Dish.retrieveAllForOneRestaurant(res, {restaurantID: id}); 
      });

      router.get('/menu/dish/:dishID', (req, res) => {
        var id = req.params.dishID;
        console.log('restaurant id:' + id);
        this.Dish.retrieveDishDetails(res, {dishID: id}); 
      });

      router.post('/menu/dish', (req, res) => {
        var body = req.body;
        body.dishID = this.idGenerator;
        this.idGenerator ++;
        console.log('successfully create a dish'); 
        this.Dish.addNewDish(res, body); 
      });
  
      router.put('/menu/dish/:dishID', (req, res) => {
        var id = req.params.dishID;
        console.log('restaurant id:' + id);
        this.Dish.updateDish(res, {dishID: id}, req.body);
      });
  
      router.delete('/menu/dish/:dishID', (req, res) => {
        var id = req.params.dishID;
        console.log('restaurant id:' + id);
        this.Dish.deleteDish(res, {dishID: id}); 
      });
    }
}
export {Dish};