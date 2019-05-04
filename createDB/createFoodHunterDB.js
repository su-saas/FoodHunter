// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("foodhunter")
db.createCollection("user")




db.createCollection("dish")
dishCollection = db.getCollection("dish")
dishCollection.remove({})

dishCollection.insert(
    {
        restaurantID: "",
        dishName: "Fall Risotto",
        dishDetails: "butternut squash",
        dishPrice: 19
    }
)

db.createCollection("restaurant")
restaurantCollection = db.getCollection("restaurant")
restaurantCollection.remove({})

restaurantCollection.insert(
    {
        userID: String,
        restaurantName: "The Pink Door",
        address:"Downtown",
        phoneNum: "206-0000-0000",
        introductionContent: "Italian Restaurant",
        hours: "M-F 11:30am - 1:00am",
        disklist: [{
            diskID: String
        }]
    }
)

