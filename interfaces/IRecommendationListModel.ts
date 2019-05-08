import Mongoose = require("mongoose");

interface IRecommendationListModel extends Mongoose.Document {
    recommendationlistId: Number,
    foodietaglistId: Number,
    restaurantList: [{ restaurantID: Number }],
}
export { IRecommendationListModel }