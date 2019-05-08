import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import {RestaurantTagListModel} from '../model/RestaurantTagListModel';

class RestaurantTagList {
    
    public rTagList:RestaurantTagListModel;
    
    constructor() {
        this.rTagList = new RestaurantTagListModel();
    }

    public registerrTagListRoutes(router: express.Router) {
      this.routes(router);
    }
    
    private routes(router: express.Router): void {
        router.get('/tags/:restaurantID', async (req, res) => {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            var rtaglist = await this.rTagList.retrieverTagListDetails({restaurantID: id}); 
            console.log('restaurant tags: ' + rtaglist);
            res.status(200).send(rtaglist);
          });
      
          router.put('/tags/:restaurantID', async (req, res) => {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            var success = await this.rTagList.updaterTagList({restaurantID: id}, req.body);
            console.log('update dish: ' + success);
            res.status(200).send(success);
          });
      
          router.delete('/tags/:restaurantID', async (req, res) => {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            var success = await this.rTagList.deleterTagList({restaurantID: id}); 
            console.log('delete dish: ' + success);
            res.status(200).send(success);
          });
    }
}
export {RestaurantTagList};