// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("foodhunter")
/************ users **********/
db.createCollection("user")
userCollection = db.getCollection("user")
userCollection.remove({})
userCollection.insert(
    {
        userID: 1,
        name: "erica",
        password: "123",
        emailAddress: "erica@gmail.com",
        type: "restaurant owner"
    }
)

userCollection.insert(
    {
        userID: 2,
        name: "Mark",
        password: "123",
        emailAddress: "mark@gmail.com",
        type: "restaurant owner"
    }
)

userCollection.insert(
    {
        userID: 3,
        name: "Tom",
        password: "123",
        emailAddress: "tom@gmail.com",
        type: "restaurant owner"
    }
)

userCollection.insert(
    {
        userID: 4,
        name: "susan",
        password: "123",
        emailAddress: "susan@gmail.com",
        type: "foodie"
    }
)


/************ Restaurants **********/
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
        hours: "M-F 11:30am - 1:00am"
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
        hours: "M-F 11:30am - 9:00pm"
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
        hours: "M-F 11:00am - 8:00pm"
    }
)

/************ Dish **********/
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
            dishID: 1,
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
            dishID: 1,
            dishName: "Pad Thai",
            dishDetails: "Stir-fried Thai rice noodles",
            dishPrice: 9.95
        }
    }
)

/************ Tag **********/
db.createCollection("tag")
tagCollection = db.getCollection("tag")
tagCollection.remove({})
tagCollection.insert({
    tagID: 1,
    tagName: "Tasty"
   
})

tagCollection.insert({
    tagID: 2,
    tagName: "Great Service"
   
})

tagCollection.insert({
    tagID: 3,
    tagName: "Good Environment"
   
})

tagCollection.insert({
    tagID: 4,
    tagName: "Scenic View"
   
})

tagCollection.insert({
    tagID: 5,
    tagName: "Price under 30"
   
})

/************ Restaurant Tag List **********/
db.createCollection("rtaglist")
rtaglistCollection = db.getCollection("rtaglist")
rtaglistCollection.remove({})
rtaglistCollection.insert(
    {
        restaurantID: 3,
        rtaglist : [
            {
                tagID: 2
            },
            {
                tagID: 4
            }
        ]
    }
)
