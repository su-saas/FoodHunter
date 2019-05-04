db = db.getSiblingDB("dishes")
db.createCollection("dish")
dishCollection = db.getCollection("dish")
dishCollection.remove({})
dishCollection.insert(
    {
        restaurantID: 1,
        dishes : [
            {
                dishID: 1,
                dishName: "Fall Risotto",
                dishDetails: "butternut squash",
                dishPrice: 19
            }
        ]

    }
)

dishCollection.insert(
    {
        restaurantID: 2,
        dishes : {
            dishID: 2,
            dishName: "sushi set a",
            dishDetails: "tuna salmon, yellowtail",
            dishPrice: 9
        }
    }
)

dishCollection.insert(
    {
        restaurantID: 3,
        dishes : {
            dishID: 3,
            dishName: "Pad Thai",
            dishDetails: "Stir-fried Thai rice noodles",
            dishPrice: 9.95
        }
    }
)