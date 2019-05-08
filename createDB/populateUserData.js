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
    tagListID: 1,
    favoriteListID: 1
})

userCollection.insert(
{
    userID: 3,
    userName: "Daniel",
    userType: 1,
    password: "pwdOfDaniel",
    emailAddress: "daniel@gmail.com",
    reviewList: [2,4],
    tagListID: 2,
    favoriteListID: 2
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
