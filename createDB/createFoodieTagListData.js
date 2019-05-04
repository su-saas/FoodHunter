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
            tagName: "Good Environment",
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
            tagName: "Tasty",
        },
        {
            tagID: 3,
            tagName: "Good Environment",
        },
        {
            tagID: 4,
            tagName: "Scenic View",
        },
        {
            tagID: 7,
            tagName: "Price between 30 and 60",
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
            tagName: "Price over 60",
        },
        {
            tagID: 7,
            tagName: "Price between 30 and 60",
        },
        {
            tagID: 2,
            tagName: "Great Service",
        },
        {
            tagID: 4,
            tagName: "Scenic View",
        },
        {
            tagID: 6,
            tagName: "Price under 30",
        },
        {
            tagID: 3,
            tagName: "Good Environment",
        },
        {
            tagID: 1,
            tagName: "Tasty",
        },
        {
            tagID: 5,
            tagName: "Easy to park",
        }       
    ],
})


