var dbname = 'foodhunter'
var collectionName = 'foodieTagList'

var db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
var foodieTagListCollection = db.getCollection(collectionName)
foodieTagListCollection.remove({})

foodieTagListCollection.insert(
{
    tagListID: 1,
    userID: 1,
    tagList: [3],
})

foodieTagListCollection.insert(
{
    tagListID: 2,
    userID: 2,
    tagList: [1, 3, 4, 7],       
})

foodieTagListCollection.insert(
{
    tagListID: 3,
    userID: 3,
    tagList: [8, 7, 2, 4, 6, 3, 1, 5],     
})


