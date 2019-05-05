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
        router.get('/reviews', async (req, res) => {
            console.log('get all reviews');
            var reviews = await this.Reviews.getAllReviews();
            console.log('get all reviews finished');
            res.status(200).send(reviews);
        });

        router.get('/reviews/:reviewID',async (req, res) => {
            var reviewID = req.params.reviewID;
            var review = await this.Reviews.getReviewByID(reviewID);
            console.log('in get route:', review);
            res.status(200).send(review);
        });

        router.delete('/reviews/:reviewID',async (req, res) => {
            var reviewID = req.params.reviewID;
            var review = await this.Reviews.deleteReviewByID(reviewID);
            console.log('in delete route:', review);
            res.status(200).send(review);
        });

        router.post('/reviews',async (req, res) => {
            var review = ReviewModel.constructorFromData(1, 1, 1, "review007-new", "review007Content", "2019-11-02T01:00:00");
            var successOrNot = await this.Reviews.updateReview(review);
            console.log('in update route:', successOrNot);
            res.status(200).send(successOrNot);
        });

        router.put('/reviews', async (req, res) => {
            console.log('add one review');
            var review = ReviewModel.constructorFromData(7, 1, 1, "review-7-title", "review-7-Content", "2019-12-02T01:00:00");;
            var successOrNot = await this.Reviews.createReview(review);
            console.log('in create route:', successOrNot);
            res.status(200).send(successOrNot);
        });
    }
}

export {Review};