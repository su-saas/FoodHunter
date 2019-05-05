import * as path from 'path';
import * as express from 'express';

//connect to the model 
import {ReviewModel} from './model/ReviewModel'

// Creates and configures an ExpressJS web server.
class Review {

    public Reviews: ReviewModel;

    //Run configuration methods on the Express instance.
    constructor() {
        this.Reviews = new ReviewModel();
    }

    public registerRoutes(router: express.Router) {
        this.routes(router);
    }

    // Configure API endpoints.
    private routes(router: express.Router): void {
        router.get('/review', async (req, res) => {
            console.log('get all reviews');
            var reviews = await this.Reviews.getAllReviews();
            console.log('get all reviews finished');
            res.status(200).send(reviews);
        });

        router.get('/review/:reviewID',async (req, res) => {
            var reviewID = req.params.reviewID;
            var review = await this.Reviews.getReviewByID(reviewID);
            console.log('in get route:', review);
            res.status(200).send(review);
        });

        router.delete('/review/:reviewID',async (req, res) => {
            var reviewID = req.params.reviewID;
            var review = await this.Reviews.deleteReviewByID(reviewID);
            console.log('in delete route:', review);
            res.status(200).send(review);
        });

        router.put('/review/:reviewID',async (req, res) => {
            var reviewID = req.params.reviewID;
            var reviewBody = req.body;
            var successOrNot = await this.Reviews.updateReview(reviewID, reviewBody);
            console.log('in update route:', successOrNot);
            res.status(200).send(successOrNot);
        });

        router.post('/review', async (req, res) => {
            var review = req.body;
            var successOrNot = await this.Reviews.createReview(review);
            console.log('in create route:', successOrNot);
            res.status(200).send(successOrNot);
        });
    }
}

export {Review};