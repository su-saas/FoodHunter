
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import { RecommendationListModel } from '../model/RecommendationListModel';

// Creates and configures an ExpressJS web server.
class RecommendationListRoute {

    public recommendationList: RecommendationListModel;

    //Run configuration methods on the Express instance.
    constructor() {
        this.recommendationList = new RecommendationListModel();
    }

    public registerRoutes(router: express.Router) {
        this.routes(router);
    }

    // Configure API endpoints.
    private routes(router: express.Router): void {
        //get by id
        router.get('/recommendationlist/:recommendationlistID', (req, res) => {
            console.log('try to get listID:', recommendationlistID);
            var recommendationlistID = req.params.recommendationlistID;
            this.recommendationList.getrecommendationListByID(res, recommendationlistID);
            

        });

        router.delete('/recommendationlist/:recommendationlistID', (req, res) => {
            console.log('try to delete listID:', recommendationlistID);
            var recommendationlistID = req.params.recommendationlistID;
            this.recommendationList.deleteRecommendationList(res, recommendationlistID);
        });

        router.put('/recommendationlist/:recommendationlistID', (req, res) => {
            console.log('try to update:', recommendationlistID);
            var recommendationlistID = req.params.recommendationlistID;
            var newrecommendationList = req.body;
            this.recommendationList.updateRecommendationList(res, recommendationlistID, newrecommendationList);
        });

        router.post('/recommendationlist', (req, res) => {
            console.log('try to create:', req.params.recommendationlistID);
            var newrecommendationList = req.body;
            this.recommendationList.createRecommendationList(res, newrecommendationList);
        });
    }
}

export { RecommendationListRoute };

