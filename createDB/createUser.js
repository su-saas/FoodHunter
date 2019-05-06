// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("users")
/************ users **********/
db.createCollection("user")
userCollection = db.getCollection("user")
userCollection.remove({})
userCollection.insert(
    {
        userID: 1,
        name: "erica",
        password: "123",
        emailAddress: "erica@gmail.com",
        type: "restaurant owner"
    }
)

userCollection.insert(
    {
        userID: 2,
        name: "Mark",
        password: "123",
        emailAddress: "mark@gmail.com",
        type: "restaurant owner"
    }
)

userCollection.insert(
    {
        userID: 3,
        name: "Tom",
        password: "123",
        emailAddress: "tom@gmail.com",
        type: "restaurant owner"
    }
)

userCollection.insert(
    {
        userID: 4,
        name: "susan",
        password: "123",
        emailAddress: "susan@gmail.com",
        type: "foodie"
    }
)


