// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("foodhunter")
db.createCollection("recommendationList")

//@todo: createDB here
recommendationListCollection = db.getCollection("recommendationList")
recommendationListCollection.remove({})
recommendationListCollection.insert(
    {
        recommendationlistId: "1",
        foodietaglistId: "1",
        restaurantList: [{ restaurantId: 1 }, { restaurantId: 2}]
    }
)
recommendationListCollection.insert(
    {
        recommendationlistId: "2",
        foodietaglistId: "2",
        restaurantList: [{ restaurantId: 1 }, { restaurantId: 3 }]
    }
)
recommendationListCollection.insert(
    {
        recommendationlistId: "3",
        foodietaglistId: "3",
        restaurantList: [{ restaurantId: 2 }, { restaurantId: 3 }]
    }
)