import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

//connect to the model 
import {DataAccess} from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public idGenerator:number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.idGenerator = 100;
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger('dev'));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    router.get('/app/list/:listId/count', (req, res) => {
    });

    router.post('/app/list/', (req, res) => { //app => api 
    });

    router.get('/app/list/:listId', (req, res) => {
    });

    router.get('/app/list/', (req, res) => {
    });

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};