db = db.getSiblingDB("foodhunter")
db.createCollection("restaurant")
restaurantCollection = db.getCollection("restaurant")
restaurantCollection.remove({})

restaurantCollection.insert(
    {
        userID: 1,
        restaurantID: 1,
        restaurantName: "The Pink Door",
        address:"Downtown",
        phoneNum: "206-0000-0000",
        introductionContent: "Italian Restaurant",
        hours: "M-F 11:30am - 1:00am",
        AveragePrice: 30
    }
)

restaurantCollection.insert(
    {
        userID: 2,
        restaurantID: 2,
        restaurantName: "Momiji",
        address:"Downtown",
        phoneNum: "206-0000-0001",
        introductionContent: "Japanese Restaurant",
        hours: "M-F 11:30am - 9:00pm",
        AveragePrice: 25
    }
)

restaurantCollection.insert(
    {
        userID: 3,
        restaurantID: 3,
        restaurantName: "Panwa Thai",
        address:"Downtown",
        phoneNum: "206-0000-0002",
        introductionContent: "Thai Restaurant",
        hours: "M-F 11:00am - 8:00pm",
        AveragePrice: 15
    }
)