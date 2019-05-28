// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("foodhunter")
var dbname = 'foodhunter'


/************ Users **********/
db.createCollection('user')
var userCollection = db.getCollection('user')
userCollection.remove({})

// generate 3 foodie
userCollection.insert(
{
    userID: 1,
    userName: "Guest",
    userType: 1,
    password: null,
    emailAddress: null,
    reviewList: null,
    tagListID: null,
    favoriteListID: null
})

userCollection.insert(
{
    userID: 2,
    userName: "Helena",
    userType: 1,
    password: "pwdOfHelena",
    emailAddress: "helena@gmail.com",
    reviewList: [1,3],
    tagListID: 2,
    favoriteListID: 2
})

userCollection.insert(
{
    userID: 3,
    userName: "Daniel",
    userType: 1,
    password: "pwdOfDaniel",
    emailAddress: "daniel@gmail.com",
    reviewList: [2,4],
    tagListID: 3,
    favoriteListID: 3
})

userCollection.insert(
    {
        userID: 8,
        userName: "Amy Hanks",
        userType: 1,
        password: "pwdOfDaniel",
        emailAddress: "amyhanks@gmail.com",
        reviewList: [1,3],
        tagListID: 8,
        favoriteListID: 8
    })

// create three restaurant owner
userCollection.insert(
{
        userID: 4,
        userName: "Erica",
        userType: 2,
        password: "pwdOfErica",
        emailAddress: "erica@gmail.com",
})

userCollection.insert(
{
        userID: 5,
        userName: "Eric",
        userType: 2,
        password: "pwdOfEric",
        emailAddress: "eric@gmail.com",
})

userCollection.insert(
{
        userID: 6,
        userName: "Jack",
        userType: 2,
        password: "pwdOfJack",
        emailAddress: "jack@gmail.com",
})

// create one admin
userCollection.insert(
{
        userID: 7,
        userName: "Xing",
        userType: 3,
        password: "pwd",
        emailAddress: "Xing@gmail.com",
})


/************ Tags **********/
db.createCollection('tag')
var tagCollection = db.getCollection('tag')
tagCollection.remove({})

tagCollection.insert(
{
    tagID: 1,
	tagName: "Tasty",
})

tagCollection.insert(
{
    tagID: 2,
    tagName: "Great Service",
})

tagCollection.insert(
{
    tagID: 3,
    tagName: "Good Environment",
})

tagCollection.insert(
{
    tagID: 4,
    tagName: "Scenic View",
})

tagCollection.insert(
{
    tagID: 5,
    tagName: "Easy to park",
})

tagCollection.insert(
{
    tagID: 6,
    tagName: "Price under 30",
})

tagCollection.insert(
{
    tagID: 7,
    tagName: "Price between 30 and 60",
})

tagCollection.insert(
{
    tagID: 8,
    tagName: "Price over 60",
})

/************ Foodie Tag List **********/
db.createCollection('foodieTagList')
var foodieTagListCollection = db.getCollection('foodieTagList')
foodieTagListCollection.remove({})

foodieTagListCollection.insert(
{
    tagListID: 2,
    userID: 2,
    tagList: [3],
})

foodieTagListCollection.insert(
{
    tagListID: 3,
    userID: 3,
    tagList: [1, 3, 4, 7],       
})

foodieTagListCollection.insert(
{
    tagListID: 8,
    userID: 8,
    tagList: [8, 7, 2, 4, 6, 3, 1, 5],     
})




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
        averagePrice: 30
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
        averagePrice: 25
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
        averagePrice: 15
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

/************ Review **********/
db.createCollection('review')
var reviewCollection = db.getCollection('review')
reviewCollection.remove({})

reviewCollection.insert(
{
    reviewID: 1,
    userID: 1,
    restaurantID: 1,
    title: "Good experience",
    content: "I like the place very much",
    date: "2019-01-01T01:00:00",
})

reviewCollection.insert(
{
    reviewID: 2,
    userID: 2,
    restaurantID: 2,
    title: "Great food",
    content: "I like the food very much",
    date: "2019-01-02T01:00:00",
})

reviewCollection.insert(
{
    reviewID: 3,
    userID: 3,
    restaurantID: 3,
    title: "Beautiful view",
    content: "It's a great place",
    date: "2019-01-03T01:00:00",
})

reviewCollection.insert(
{
    reviewID: 4,
    userID: 1,
    restaurantID: 1,
    title: "Good service",
    content: "Wow",
    date: "2019-02-01T01:00:00",
})


/************ recommendationList **********/
db.createCollection("recommendationList")
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

/************ Favorite List **********/
db.createCollection('favoriteList')
var favoriteListCollection = db.getCollection('favoriteList')
favoriteListCollection.remove({})

favoriteListCollection.insert(
{
    favoriteListID: 2,
    userID: 2,
    restaurantIDList: [1],
})
favoriteListCollection.insert(
{
    favoriteListID: 3,
    userID: 3,
    restaurantIDList: [1,2],
})
favoriteListCollection.insert(
    {
        favoriteListID: 8,
        userID: 8,
        restaurantIDList: [1,2,3],
    })

/************ application form **********/
db.createCollection("applicationform")
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
