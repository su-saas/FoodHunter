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
    tagList: [
        {
            tagID: 3,
        },
    ],
})

foodieTagListCollection.insert(
{
    tagListID: 2,
    userID: 2,
    tagList: [
        {
            tagID: 1,
        },
        {
            tagID: 3,
        },
        {
            tagID: 4,
        },
        {
            tagID: 7,
        }
    ],
})

foodieTagListCollection.insert(
{
    tagListID: 3,
    userID: 3,
    tagList: [
        {
            tagID: 8,
        },
        {
            tagID: 7,
        },
        {
            tagID: 2,
        },
        {
            tagID: 4,
        },
        {
            tagID: 6,
        },
        {
            tagID: 3,
        },
        {
            tagID: 1,
        },
        {
            tagID: 5,
        }       
    ],
})


