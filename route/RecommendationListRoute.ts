
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import { RecommendationListModel } from '../model/RecommendationListModel';
import { RestaurantTagListModel } from '../model/RestaurantTagListModel';
import { IRecommendationListModel } from '../interfaces/IRecommendationListModel';

// Creates and configures an ExpressJS web server.
class RecommendationList {

    public recommendationList: RecommendationListModel;
    public restaurantTagList: RestaurantTagListModel;
    private idGenerator: number;

    //Run configuration methods on the Express instance.
    constructor() {
        this.recommendationList = new RecommendationListModel();
        this.restaurantTagList = new RestaurantTagListModel();
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

        //get by tagListid
        router.get('/recommendationlist/tagList/:tagListID', (req, res) => {
            var taglistID = req.params.tagListID;
            console.log('try to get taglistID:', taglistID);
            this.recommendationList.getrecommendationListByTagListID(res, taglistID);
        });

        // get by 

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

        router.post('/recommendationlist/:tagList', (req, res) => {          
            // var ftagList = req.params.tagList;
            // var tagListID = ftagList.tagListID;
            // var tagList = ftagList.tagList;
            // var priorityList: number[] = [];
            // var recommendList: number[] = [];
            // var newrecommendationList: IRecommendationListModel;
            // var rTagList = this.restaurantTagList.retrieveAll(res);
            // var sorted = false;
            // var count = 0;
            // for (let i = 0; i < tagList.length; i++) {
            //     priorityList[tagList[i]] = i;

            // }
            // while (!sorted) {
            //     var maxVoteValue: number = 0;
            //     var maxRID: number = 0;
            //     for (let j = 0; j < rTagList.length; j++) {
            //         if (maxVoteValue < rTagList[j].rTagList[priorityList[count]]) {
            //             maxVoteValue = rTagList[j].rTagList[priorityList[count]];
            //             maxRID = rTagList[j]['restaurantID']
            //         } else if (maxVoteValue === rTagList[j].rTagList[priorityList[count]]) {
            //             recommendList.push(maxRID);
            //             maxVoteValue = rTagList[j].rTagList[priorityList[count]];
            //         }
            //     }
            //     count++;
            //     if (recommendList.length > 1 && !sorted) {
                    
            //     } else {
            //         sorted = true;
            //     }
            // }            
            // newrecommendationList = {
            //     recommendationlistID: this.idGenerator,
            //     foodietaglistID: tagListID,
            //     restaurantList: recommendList,
            // }
            // this.idGenerator ++;
            // console.log('try to create:', newrecommendationList['recommendationlistID']);
            // this.recommendationList.createRecommendationList(res, newrecommendationList);
        });
    }
}

export { RecommendationList };

