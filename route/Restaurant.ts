import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import {RestaurantModel} from '../model/RestaurantModel';

class Restaurant {
    
    public Restaurant:RestaurantModel;
    
    constructor() {
        this.Restaurant = new RestaurantModel(); 
    }

    public registerRestaurantRoutes(router: express.Router) {
      this.routes(router);
  }

    private routes(router: express.Router): void {
        router.get('/restaurant', async (req, res) => {
            console.log('All restaurants');
            var restaurants = await this.Restaurant.retrieveAll(); 
            console.log(restaurants);
            res.status(200).send(restaurants);
          });
          
          router.get('/restaurant/:restaurantID', async (req, res) => {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            var restaurant = await this.Restaurant.retrieveRestaurantDetails({restaurantID: id}); 
            console.log(restaurant);
            res.status(200).send(restaurant);
          });
      
          router.put('/restaurant/:restaurantID', async (req, res) => {
            console.log('update restaurant');
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            var success = await this.Restaurant.updateRestaurant({restaurantID: id}, req.body);
            console.log('update restaurant: ' + success);
            res.status(200).send(success);
          });
      
          router.delete('/restaurant/:restaurantID', async (req, res) => {
            console.log('delete restaurant');
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            var success = await this.Restaurant.deleteRestaurant({restaurantID: id}); 
            console.log('delete restaurant: ' + success);
            res.status(200).send(success);
          });
      
          router.get('/search', async (req, res) => {
            var urlParts = url.parse(req.url, true);
            var query = urlParts.query;
            var msg = 'search for ' + query.var1;
            console.log(msg);
            var result = await this.Restaurant.getByKeyword(query);
            console.log('search restaurant: ' + result);
            res.status(200).send(result);
          });
    }

}
export {Restaurant};