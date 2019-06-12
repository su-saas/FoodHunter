import * as path from 'path';
import * as express from 'express';
import * as url from 'url';
import {RestaurantModel} from '../model/RestaurantModel';

class Restaurant {
    
    public Restaurant:RestaurantModel;
    private idGenerator: number;
    
    constructor() {
        this.Restaurant = new RestaurantModel(); 
        this.idGenerator = 1000;
    }

    public registerRestaurantRoutes(router: express.Router) {
      this.routes(router);
  }

    private routes(router: express.Router): void {
      router.get('/restaurant', (req, res) => {
        console.log('All restaurants');
        this.Restaurant.retrieveAll(res); 
      });
      
      router.get('/restaurant/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.Restaurant.retrieveRestaurantDetails(res, {restaurantID: id}); 
      });

      router.post('/restaurant', (req, res) => {
        var body = req.body;
        body.restaurantID = this.idGenerator;
        this.idGenerator ++;
        this.Restaurant.addNewRestaurant(res, body); 
      });
  
      router.put('/restaurant/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.Restaurant.updateRestaurant(res, {restaurantID: id}, req.body);
      });
  
      router.delete('/restaurant/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.Restaurant.deleteRestaurant(res, {restaurantID: id}); 
      });

      router.get('/search', (req, res) => {       
        var urlParts = url.parse(req.url, true);
        var query = urlParts.query;
        var msg = 'search for ' + query.var1;
        console.log(msg);
        this.Restaurant.getByKeyword(res, query);
      });
    }

}
export {Restaurant};