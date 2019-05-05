var dbname = 'foodhunter'
var collectionName = 'user'

var db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
var userCollection = db.getCollection(collectionName)
userCollection.remove({})

// generate 3 foodie
userCollection.insert(
{
    userID: 1,
    userName: "Erica",
    userType: 1,
    password: "pwdOfErica",
    emailAddress: "erica@gmail.com",
    reviewList: [{
        reviewID: 1,
        restaurantID: 1,
    }],
})

userCollection.insert(
{
    userID: 2,
    userName: "Helena",
    userType: 1,
    password: "pwdOfHelena",
    emailAddress: "helena@gmail.com",
    reviewList: [{
        reviewID: 2,
        restaurantID: 2,
    }],
})

userCollection.insert(
{
    userID: 3,
    userName: "Daniel",
    userType: 1,
    password: "pwdOfDaniel",
    emailAddress: "daniel@gmail.com",
    reviewList: [{
        reviewID: 3,
        restaurantID: 3,
    }],
})
