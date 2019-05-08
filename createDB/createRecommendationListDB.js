// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("foodhunter")
db.createCollection("recommendationList")

//@todo: createDB here
recommendationListCollection = db.getCollection("recommendationList")
recommendationListCollection.remove({})
recommendationListCollection.insert(
    {
        recommendationlistID: 1,
        foodietaglistID: 1,
        restaurantList: [1,2]
    }
)
recommendationListCollection.insert(
    {
        recommendationlistID: 2,
        foodietaglistID: 2,
        restaurantList: [1,3]
    }
)
recommendationListCollection.insert(
    {
        recommendationlistID: 3,
        foodietaglistID: 3,
        restaurantList: [1,2,3]
    }
)