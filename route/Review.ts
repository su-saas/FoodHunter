import * as path from 'path';
import * as express from 'express';

//connect to the model 
import {ReviewModel} from '../model/ReviewModel'

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
        router.get('/review', (req, res) => {
            this.Reviews.getAllReviews(res);
        });

        router.get('/review/:reviewID',(req, res) => {
            var reviewID = req.params.reviewID;
            this.Reviews.getReviewByID(reviewID, res);
        });

        router.delete('/review/:reviewID',(req, res) => {
            var reviewID = req.params.reviewID;
            this.Reviews.deleteReviewByID(reviewID, res);
        });

        router.put('/review/:reviewID',(req, res) => {
            var reviewID = req.params.reviewID;
            var reviewBody = req.body;
            this.Reviews.updateReview(reviewID, reviewBody, res);
        });

        router.post('/review', (req, res) => {
            var review = req.body;
            this.Reviews.createReview(review, res);
        });
    }
}

export {Review};