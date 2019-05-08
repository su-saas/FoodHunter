
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import { ApplicationFormModel } from '../model/ApplicationFormModel';

// Creates and configures an ExpressJS web server.
class ApplicationFormRoute {

    public applicationForm: ApplicationFormModel;
    private idGenerator: number;

    //Run configuration methods on the Express instance.
    constructor() {
        this.idGenerator = 10;
        this.applicationForm = new ApplicationFormModel();
    }

    public registerRoutes(router: express.Router) {
        this.routes(router);
    }

    // Configure API endpoints.
    private routes(router: express.Router): void {
        //get by id
        router.get('/applicationForm/:applicationFormID', (req, res) => {
            var applicationFormID = req.params.applicationFormID;
            console.log('try to get applicationFormID:', applicationFormID);
            this.applicationForm.getApplicationFormByID(res, applicationFormID);
        });

        //get all
        router.get('/applicationForm', (req, res) => {
            var applicationFormID = req.params.applicationFormID;
            console.log('try to get all applicationForm');
            this.applicationForm.getAllApplicationForm(res);
        });

        //delete
        router.delete('/applicationForm/:applicationFormID', (req, res) => {
            var applicationFormID = req.params.applicationFormID;
            console.log('try to delete applicationFormID:', applicationFormID);
            this.applicationForm.deleteApplicationForm(res, applicationFormID);
        });

        //update
        router.put('/applicationForm/:applicationFormID', (req, res) => {
            var applicationFormID = req.params.applicationFormID;
            console.log('try to update applicationFormID:', applicationFormID);
            var newapplicationForm = req.body;
            this.applicationForm.updateApplicationForm(res, applicationFormID, newapplicationForm);
        });

        //create
        router.post('/applicationForm', (req, res) => {
            var newapplicationForm = req.body;
            newapplicationForm.formID = this.idGenerator;
            this.idGenerator ++; 
            console.log('try to create:', newapplicationForm);
            this.applicationForm.createApplicationForm(res, newapplicationForm);
        });
    }
}
export { ApplicationFormRoute };

