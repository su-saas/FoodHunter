
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
    private idGenerator: number;

    //Run configuration methods on the Express instance.
    constructor() {
        this.recommendationList = new RecommendationListModel();
        this.idGenerator = 10;
    }

    public registerRoutes(router: express.Router) {
        this.routes(router);
    }

    // Configure API endpoints.
    private routes(router: express.Router): void {
        //get by id
        router.get('/recommendationlist/:recommendationlistID', (req, res) => {
            var recommendationlistID = req.params.recommendationlistID;
            console.log('try to get listID:', recommendationlistID);
            this.recommendationList.getrecommendationListByID(res, recommendationlistID);
        });

        router.delete('/recommendationlist/:recommendationlistID', (req, res) => {         
            var recommendationlistID = req.params.recommendationlistID;
            console.log('try to delete listID:', recommendationlistID);
            this.recommendationList.deleteRecommendationList(res, recommendationlistID);
        });

        router.put('/recommendationlist/:recommendationlistID', (req, res) => {            
            var recommendationlistID = req.params.recommendationlistID;
            console.log('try to update:', recommendationlistID);
            var newrecommendationList = req.body;
            this.recommendationList.updateRecommendationList(res, recommendationlistID, newrecommendationList);
        });

        router.post('/recommendationlist', (req, res) => {          
            var newrecommendationList = req.body;
            newrecommendationList.tagListID = this.idGenerator;
            this.idGenerator ++;
            console.log('try to create:', req.params.recommendationlistID);
            this.recommendationList.createRecommendationList(res, newrecommendationList);
        });
    }
}

export { RecommendationListRoute };

