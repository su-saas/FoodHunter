import Mongoose = require("mongoose");

interface IReviewModel extends Mongoose.Document {
    userID: string;
    restaurantID: string;
    reviewContent: string;
    data: string;
}
export {IReviewModel};