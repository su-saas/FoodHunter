import * as Mongoose from "mongoose";

interface IReviewModel extends Mongoose.Document {
    reviewID: number;
    userID: number;
    restaurantID: number;
    title: string;
    content: string;
    date: string;
}
export {IReviewModel};