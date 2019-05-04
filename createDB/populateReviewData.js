var dbname = 'foodhunter'
var collectionName = 'review'

var db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
var reviewCollection = db.getCollection(collectionName)
reviewCollection.remove({})

reviewCollection.insert(
{
    reviewID: 1,
    userID: 1,
    restaurantID: 1,
    title: "I like it",
    content: "Food is so tasty!",
    date: "2019-01-01T01:00:00",
})

reviewCollection.insert(
{
    reviewID: 2,
    userID: 2,
    restaurantID: 2,
    title: "Recommend",
    content: "The environment is so romantic!",
    date: "2019-01-02T01:00:00",
})

reviewCollection.insert(
{
    reviewID: 3,
    userID: 3,
    restaurantID: 3,
    title: "Not bad",
    content: "It's easy to find a parking lot.",
    date: "2019-01-03T01:00:00",
})

reviewCollection.insert(
{
    reviewID: 4,
    userID: 1,
    restaurantID: 1,
    title: "Good view",
    content: "Great drinks, great food, great service, and great view.",
    date: "2019-02-01T01:00:00",
})
