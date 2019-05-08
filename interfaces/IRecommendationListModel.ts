<<<<<<< HEAD
import Mongoose = require("mongoose");

interface IRecommendationListModel extends Mongoose.Document {
    recommendationlistID: number,
    foodietaglistID: number,
    restaurantList: number[],
}
=======
import Mongoose = require("mongoose");

interface IRecommendationListModel extends Mongoose.Document {
    recommendationlistID: number,
    foodietaglistID: number,
    restaurantList: number[],
}
>>>>>>> 1a8e7c4dc1a81f1efeb527d16fb5184e11c632f6
export { IRecommendationListModel }