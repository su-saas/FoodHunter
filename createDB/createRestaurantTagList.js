var dbname = 'foodhunter'
var db = db.getSiblingDB(dbname)
db.createCollection("rtaglist")
rtaglistCollection = db.getCollection("rtaglist")
rtaglistCollection.remove({})
rtaglistCollection.insert(
    {
        restaurantID: 1,
        rtaglistID: 1,
        rtagList : [3,5]
    }
)

rtaglistCollection.insert(
    {
        restaurantID: 2,
        rtaglistID: 2,
        rtagList : [1,2]
    }
)

rtaglistCollection.insert(
    {
        restaurantID: 3,
        rtaglistID: 3,
        rtagList : [4,6]
    }
)
