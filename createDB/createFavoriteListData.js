var dbname = 'foodhunter'
var collectionName = 'favoriteList'

var db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
var favoriteListCollection = db.getCollection(collectionName)
favoriteListCollection.remove({})

favoriteListCollection.insert(
{
    favoriteListID: 1,
    userID: 1,
    restaurantIDList: [1],
})
favoriteListCollection.insert(
{
    favoriteListID: 2,
    userID: 2,
    restaurantIDList: [1,2],
})

favoriteListCollection.insert(
{
    favoriteListID: 3,
    userID: 3,
    restaurantIDList: [],
})
        