// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("foodhunter")
db.createCollection("applicationform")

//@todo: mock data
formCollection = db.getCollection("applicationform")
formCollection.remove({})
formCollection.insert(
    {
        formID: 1,
        restaurantID: 1,
        userID: 1,
        status: "Pending",
        date: "December 17, 1995 03:24:00"
    }
)
formCollection.insert(
    {
        formID: 2,
        restaurantID: 2,
        userID: 2,
        status: "Approved",
        date: "December 18, 1995 05:24:00"
    }
)
formCollection.insert(
    {
        formID: 3,
        restaurantID: 3,
        userID: 3,
        status: "Declined",
        date: "December 18, 1999 03:24:00"
    }
)


