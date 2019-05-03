import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

class App {

    public app: express.Application;
    public mongoDBConnection:string = 'mongodb://localhost:27017/classSample';
    public dbConnection: any = null; //store db connection 

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();   
    }

    // Configure Express middleware.
    private middleware(): void {
        this.app.use(logger('dev'));

        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }


    // Configure API endpoints.
    private routes(): void {
    }
}

export {App};    // correlate to the import statement in sever.ts