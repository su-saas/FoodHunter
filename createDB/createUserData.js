var dbname = 'test'
var collectionName = 'user'

var db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
var userCollection = db.getCollection(collectionName)

// generate 3 foodie


userCollection.insert(
{
    userID: 77,
    userName: "Helena Wang",
    userType: 1,
    password: "pwdOfHelena",
    emailAddress: "helena@gmail.com",
    tagListID: 1,
    favoriteListID: 1,
    avatar: "https://drive.google.com/uc?id=1rGvNT1klU8v287D6twZ5Up1ewfwDRZsT"
})



