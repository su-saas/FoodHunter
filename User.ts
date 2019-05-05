import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

//connect to the model 
import {UserModel} from './model/UserModel'
import {DataAccess} from './DataAccess';
import {IUserModel } from './interfaces/IUserModel';

// Creates and configures an ExpressJS web server.
class User {

    // ref to Express instance
    public expressApp: express.Application;
    //public idGenerator:number;
    public Users: UserModel;

    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        //this.idGenerator = 100;
        this.Users = new UserModel();
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

        router.get('/users', async (req, res) => {
            console.log('get all users');
            var users = await this.Users.getAllUsers();
            console.log('get all users finished');
            res.status(200).send(users);
        });

        router.get('/users/get',async (req, res) => {
            var user = await this.Users.getUserByID(2);
            console.log('in route:', user);
            res.status(200).send(user);
        });

        router.get('/users/update',async (req, res) => {
            var user = UserModel.constructorFromData(2, "user007-new", "user007Pwd", "user007@gmail.com", 1);
            var successOrNot = await this.Users.updateUser(user);
            console.log('in route:', successOrNot);
            res.status(200).send(successOrNot);
        });

        router.get('/users/add', async (req, res) => {
            console.log('add one user');
            var user = UserModel.constructorFromData(7, "user007", "user007Pwd", "user007@gmail.com", 1);
            var successOrNot = await this.Users.createUser(user);
            res.status(200).send(successOrNot);
    });

        this.expressApp.use('/', router);

        this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
        this.expressApp.use('/images', express.static(__dirname+'/img'));
        this.expressApp.use('/', express.static(__dirname+'/pages'));
        
    }

}

export {User};