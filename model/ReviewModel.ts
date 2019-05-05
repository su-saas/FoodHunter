import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import { IReviewModel } from "../interfaces/IReviewModel";

var mongooseConnection = DataAccess.mongooseConnection;
var Q = require('q');

class ReviewModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public static constructorFromData(reviewID: Number, userID: Number, restaurantID: Number, title: String, content: String, date: String){
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
                    unique : true, 
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
            }, {collection: 'review'}
        );
        this.schema.index({reviewID: 1}, {unique: true});
    }
    public createModel(): void {
        this.model = mongooseConnection.model<IReviewModel>("review", this.schema);
    }
    public createReview(review: any): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model(review).save(function (err){
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    public deleteReviewByID(reviewID: Number): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model.deleteOne({reviewID: reviewID}, function(err){
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    public updateReview(review: any): boolean {
        var deferred = Q.defer();
        var res = false;
        this.model.findOneAndUpdate({reviewID: review.reviewID}, review, { new: true } , function (err){
            if(err){
                console.error(err);
            }
            else{
                res = true;
            }
            deferred.resolve(res);
        });
        return deferred.promise;
    }
    public getReviewByID(reviewID: Number): any{
        var deferred = Q.defer();
        var query = this.model.find({reviewID: reviewID});
        var review = null;
        query.exec((err, reviews) => {
            if(err){
                console.error(err);
            }
            else if(reviews.length > 1){
                console.error('Duplicate error in Review');
            }
            else if(reviews.length == 1){
                for (let u of reviews){
                    review = u;
                }
            }
            else{
                console.log('no result');
            }
            deferred.resolve(review);
        });
        return deferred.promise;
    }

    public getAllReviews(): any {
        var deferred = Q.defer();
        var query = this.model.find({});
        var reviews = null;
        query.exec((err, res) => {
            if(err){
                console.error(err);
            }
            else if(res.length > 0){
                reviews = res;
            }
            else{
                console.log('no result');
            }
            deferred.resolve(reviews);
        });
        return deferred.promise;
    }
}
export {ReviewModel};