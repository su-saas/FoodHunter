let dbname = 'foodhunter'
let collectionName = 'user'

db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
userCollection = db.getCollection(collectionName)
userCollection.remove({})
userCollection.insert(
{
    userID: 1,
    userName: "user01",
    password: "pwd01",
    emailAddress: "user01@gmail.com",
})

userCollection.insert(
{
    userID: 2,
    userName: "user02",
    password: "pwd02",
    emailAddress: "user02@gmail.com",
})

userCollection.insert(
{
        userID: 3,
        userName: "user03",
        password: "pwd03",
        emailAddress: "user03@gmail.com",
})