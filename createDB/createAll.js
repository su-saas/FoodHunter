// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("foodhunter")

/************ Users **********/
db.createCollection('user')
var userCollection = db.getCollection(collectionName)
userCollection.remove({})

// generate 3 foodie
var usersList = ['user01', 'user02', 'user03']
for (i = 0, len = usersList.length; i < len; i ++){
    userCollection.insert(
        {
            userID: i + 1,
            userName: usersList[i],
            userType: 1,
            password: "pwdOf" + usersList[i],
            emailAddress: usersList[i]+"@gmail.com",
        }
    )
}

/************ Restaurants **********/
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
        AveragePrice: 30
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
        AveragePrice: 25
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
        AveragePrice: 15
    }
)

/************ Dish **********/
db.createCollection("dish")
dishCollection = db.getCollection("dish")
dishCollection.remove({})
dishCollection.insert(
    {
        restaurantID: 1,
        dishID: 1,
        dishName: "Fall Risotto",
        dishDetails: "butternut squash",
        dishPrice: 19
    }
)

dishCollection.insert(
    {
        restaurantID: 2,
        dishID: 2,
        dishName: "sushi set a",
        dishDetails: "tuna salmon, yellowtail",
        dishPrice: 9
    }
)

dishCollection.insert(
    {
        restaurantID: 2,
        dishID: 3,
        dishName: "curry",
        dishDetails: "Stir-fried Thai rice noodles",
        dishPrice: 9.95
    }
)

/************ Restaurant Tag List **********/
db.createCollection("rtaglist")
rtaglistCollection = db.getCollection("rtaglist")
rtaglistCollection.remove({})
rtaglistCollection.insert(
    {
        restaurantID: 1,
        rtaglistID: 1,
        rtagList : [3,5]
    }
)

rtaglistCollection.insert(
    {
        restaurantID: 2,
        rtaglistID: 2,
        rtagList : [1,2]
    }
)

rtaglistCollection.insert(
    {
        restaurantID: 3,
        rtaglistID: 3,
        rtagList : [4,6]
    }
)
