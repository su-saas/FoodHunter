
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

    //Run configuration methods on the Express instance.
    constructor() {
        this.applicationForm = new ApplicationFormModel();
    }

    public registerRoutes(router: express.Router) {
        this.routes(router);
    }

    // Configure API endpoints.
    private routes(router: express.Router): void {
        //get by id
        router.get('/applicationForm/:applicationFormID', (req, res) => {
            console.log('try to get applicationFormID:', applicationFormID);
            var applicationFormID = req.params.applicationFormID;
            this.applicationForm.getApplicationFormByID(res, applicationFormID);
        });

        router.delete('/applicationForm/:applicationFormID', (req, res) => {
            console.log('try to delete applicationFormID:', applicationFormID);
            var applicationFormID = req.params.applicationFormID;
            this.applicationForm.deleteApplicationForm(res, applicationFormID);
        });

        router.put('/applicationForm/:applicationFormID', (req, res) => {
            console.log('try to update applicationFormID:', applicationFormID);
            var applicationFormID = req.params.applicationFormID;
            var newapplicationForm = req.body;
            this.applicationForm.updateApplicationForm(res, applicationFormID, newapplicationForm);
        });

        router.post('/applicationForm', (req, res) => {
            console.log('try to create:', newapplicationForm);
            var newapplicationForm = req.body;
            this.applicationForm.createApplicationForm(res, newapplicationForm);
        });
    }
}
export { ApplicationFormRoute };

