import Mongoose = require("mongoose");

interface IRecommendationListModel extends Mongoose.Document {
    recommendationlistID: number;
    foodietaglistID: number;
    restaurantList: number[];
}
export { IRecommendationListModel }