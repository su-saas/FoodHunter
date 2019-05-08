var dbname = 'foodhunter'
var collectionName = 'tag'

var db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
var tagCollection = db.getCollection(collectionName)
tagCollection.remove({})

tagCollection.insert(
{
    tagID: 1,
	tagName: "Tasty",
})

tagCollection.insert(
{
    tagID: 2,
    tagName: "Great Service",
})

tagCollection.insert(
{
    tagID: 3,
    tagName: "Good Environment",
})

tagCollection.insert(
{
    tagID: 4,
    tagName: "Scenic View",
})

tagCollection.insert(
{
    tagID: 5,
    tagName: "Easy to park",
})

tagCollection.insert(
{
    tagID: 6,
    tagName: "Price under 30",
})

tagCollection.insert(
{
    tagID: 7,
    tagName: "Price between 30 and 60",
})

tagCollection.insert(
{
    tagID: 8,
    tagName: "Price over 60",
})


