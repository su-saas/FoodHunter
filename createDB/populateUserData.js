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
    reviewList: [1, 4],
})

userCollection.insert(
{
    userID: 2,
    userName: "Helena",
    userType: 1,
    password: "pwdOfHelena",
    emailAddress: "helena@gmail.com",
    reviewList: [2],
})

userCollection.insert(
{
    userID: 3,
    userName: "Daniel",
    userType: 1,
    password: "pwdOfDaniel",
    emailAddress: "daniel@gmail.com",
    reviewList: [3],
})

// create one restaurant owner
userCollection.insert(
{
        userID: 4,
        userName: "Xing",
        userType: 2,
        password: "pwdOfXing",
        emailAddress: "Xing@gmail.com",
})

// create one admin
userCollection.insert(
{
        userID: 5,
        userName: "Mike",
        userType: 3,
        password: "pwd",
        emailAddress: "Mike@gmail.com",
})
