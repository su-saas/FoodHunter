let dbname = 'foodhunter'
let collectionName = 'user'

db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
userCollection = db.getCollection(collectionName)
userCollection.remove({})

var usersList = ['user01', 'user02', 'user03', 'user04', 'user05']
for (i = 0, len = usersList.length; i < len; i ++){
    userCollection.insert(
        {
            userID: i + 1,
            userName: usersList[i],
            password: "pwdOf" + usersList[i],
            emailAddress: usersList[i]+"@gmail.com",
        })
}