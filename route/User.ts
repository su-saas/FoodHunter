import * as express from 'express';

//connect to the model 
import {UserModel} from '../model/UserModel'

// Creates and configures an ExpressJS web server.
class User {

    public Users: UserModel;
    private idGenerator: number;

    //Run configuration methods on the Express instance.
    constructor() {
        this.idGenerator = 1000;
        this.Users = new UserModel();
    }

    public registerRoutes(router: express.Router) {
        this.routes(router);
    }

    // Configure API endpoints.
    private routes(router: express.Router): void {
        router.get('/user', (req, res) => {
            this.Users.getAllUsers(res);
        });

        router.get('/user/:userID',(req, res) => {
            var userID = req.params.userID;
            var user = this.Users.getUserByID(userID, res);
        });

        router.delete('/user/:userID',(req, res) => {
            var userID = req.params.userID;
            this.Users.deleteUserByID(userID, res);
        });

        router.put('/user/:userID',(req, res) => {
            var userID = req.params.userID;
            var userBody = req.body;
            this.Users.updateUser(userID, userBody, res);
        });

        router.post('/user', (req, res) => {
            var user = req.body;
            user.userID = this.idGenerator;
            this.idGenerator ++;
            this.Users.createUser(user, res);
        });
    }
}

export {User};