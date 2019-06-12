import Mongoose = require("mongoose");
import { DataAccess } from '../DataAccess';
import { IReviewModel } from "../interfaces/IReviewModel";

var mongooseConnection = DataAccess.mongooseConnection;

class ReviewModel {
    public schema: any;
    public model: any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public static constructorFromData(reviewID: Number, userID: Number, restaurantID: Number, title: String, content: String, date: String) {
        let newObj = {
            reviewID: reviewID,
            userID: userID,
            restaurantID: restaurantID,
            title: title,
            content: content,
            date: date,
        }
        return newObj;
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                reviewID: {
                    type: Number,
                    required: true,
                    unique: true,
                    dropDups: true
                },
                userID: {
                    type: Number,
                    required: true
                },
                restaurantID: {
                    type: Number,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                content: {
                    type: String,
                    required: true
                },
                date: {
                    type: String,
                    required: true
                },
            }, { collection: 'review' }
        );
    }
    public createModel(): void {
        this.model = mongooseConnection.model<IReviewModel>("review", this.schema);
    }
    public createReview(review, response: any) {
        this.model(review).save((err) => {
            if (err) {
                console.error(err);
                response.json(0);
            }
            else {
                response.json(review.reviewID);
            }
        });
    }

    public deleteReviewByID(reviewID: Number, response: any) {
        var res = false;
        this.model.deleteOne({ reviewID: reviewID }, (err) => {
            if (err) {
                console.error(err);
                response.json(err);
            }
            else {
                response.json(res);
            }
        });
    }

    public updateReview(reviewID: Number, review, response: any) {
        var res = false;
        this.model.findOneAndUpdate({ reviewID: reviewID }, review, { new: true }, (err) => {
            if (err) {
                console.error(err);
                response.json(err);
            }
            else {
                response.json(res);
            }
        });
    }
    public getReviewByID(userID: Number, response: any) {
        var query = this.model.find({ userID: userID });
        query.exec((err, reviews) => {
            if (err) {
                response.json(err);
                console.error(err);
            }
            else {
                response.json(reviews);
            }
        });
    }

    public getAllReviews(response: any) {
        var query = this.model.find({});
        var reviews = null;
        query.exec((err, res) => {
            if (err) {
                console.error(err);
                response.json(err);
            }
            else if (res.length > 0) {
                reviews = res;
                response.json(reviews);
            }
            else {
                response.json(reviews);
                console.log('no result');
            }
        });
    }
}
export { ReviewModel };