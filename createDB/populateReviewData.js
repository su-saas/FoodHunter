var dbname = 'foodhunter'
var collectionName = 'review'

db = db.getSiblingDB(dbname)
db.createCollection(collectionName)
reviewCollection = db.getCollection(collectionName)
reviewCollection.remove({})

userCollection.insert(
{
    reviewID: 1,
    userID: 1,
    restaurantID: 1,
    title: "user_1_review_title",
    content: "user_1_review_content",
    date: "2019-01-01T01:00:00",
})

userCollection.insert(
{
    reviewID: 2,
    userID: 2,
    restaurantID: 2,
    title: "user_2_review_title",
    content: "user_2_review_content",
    date: "2019-01-02T01:00:00",
})

userCollection.insert(
{
    reviewID: 3,
    userID: 3,
    restaurantID: 3,
    title: "user_3_review_title",
    content: "user_3_review_content",
    date: "2019-01-03T01:00:00",
})

userCollection.insert(
{
    reviewID: 4,
    userID: 1,
    restaurantID: 1,
    title: "user_1_review_title",
    content: "user_1_review_content",
    date: "2019-02-01T01:00:00",
})
