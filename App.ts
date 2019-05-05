import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {User} from './User';

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public expressApp: express.Application;
    public user: User;

    //Run configuration methods on the Express instance.
    constructor() {
        this.user = new User();
        this.expressApp = express();
        this.middleware();
        this.routes();
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

        this.user.addRoutes(router);

        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
        this.expressApp.use('/images', express.static(__dirname+'/img'));
        this.expressApp.use('/', express.static(__dirname+'/pages'));
    }

}

export {App};