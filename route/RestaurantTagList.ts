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
      router.get('/rtags/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.rTagList.retrieverTagListDetails(res, {restaurantID: id}); 
      });

      router.post('/rtags', (req, res) => {
        var body = req.body;
        this.rTagList.addNewrTagList(res, body); 
      });
  
      router.put('/rtags/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.rTagList.updateTagList(res, {restaurantID: id}, req.body);
      });
  
      router.delete('/rtags/:restaurantID', (req, res) => {
        var id = req.params.restaurantID;
        console.log('restaurant id:' + id);
        this.rTagList.deleteTagList(res, {restaurantID: id}); 
      });
    }
}
export {RestaurantTagList};