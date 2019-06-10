db = db.getSiblingDB("test")
db.createCollection("restaurant")
restaurantCollection = db.getCollection("restaurant")
restaurantCollection.remove({})

restaurantCollection.insert(
    {
        userID: 4,
        restaurantID: 1,
        restaurantName: "The Pink Door",
        address:"Downtown",
        phoneNum: "206-0000-0000",
        introductionContent: "Italian Restaurant",
        hours: "M-F 11:30am - 1:00am",
        averagePrice: 30,
        restaurantAvtar: "https://drive.google.com/uc?id=1mfkBy1sat-qL5LGumyp82S3CV5EeTXa8"
    }
)

restaurantCollection.insert(
    {
        userID: 5,
        restaurantID: 2,
        restaurantName: "Momiji",
        address:"Downtown",
        phoneNum: "206-0000-0001",
        introductionContent: "Japanese Restaurant",
        hours: "M-F 11:30am - 9:00pm",
        averagePrice: 25,
        restaurantAvtar: "https://drive.google.com/uc?id=1P-tt-lkaCWeNrinwzI5ImzpXtFDfxu42"
    }
)

restaurantCollection.insert(
    {
        userID: 6,
        restaurantID: 3,
        restaurantName: "Panwa Thai",
        address:"Downtown",
        phoneNum: "206-0000-0002",
        introductionContent: "Thai Restaurant",
        hours: "M-F 11:00am - 8:00pm",
        averagePrice: 15,
        restaurantAvtar: "https://drive.google.com/uc?id=1S0qUZBSYQitgwSHvopV-FwdK3xyYPCTL"
    }
)