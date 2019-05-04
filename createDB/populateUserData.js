var dbname = 'foodhunter'
var collectionName = 'user'

db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
userCollection = db.getCollection(collectionName)
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