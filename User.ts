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

// Creates and configures an ExpressJS web server.
class User {

    public Users: UserModel;

    //Run configuration methods on the Express instance.
    constructor() {
        this.Users = new UserModel();
    }

    public addRoutes(router: express.Router) {
        this.routes(router);
    }

    // Configure API endpoints.
    private routes(router: express.Router): void {
        router.get('/users', async (req, res) => {
            console.log('get all users');
            var users = await this.Users.getAllUsers();
            console.log('get all users finished');
            res.status(200).send(users);
        });

        router.get('/users/get',async (req, res) => {
            var user = await this.Users.getUserByID(2);
            console.log('in get route:', user);
            res.status(200).send(user);
        });

        router.get('/users/del',async (req, res) => {
            var user = await this.Users.deleteUserByID(2);
            console.log('in delete route:', user);
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
    }
}

export {User};