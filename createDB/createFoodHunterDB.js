// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("admin")
db.createCollection("user")
db.createUser(
    {
        user: "dbAdmin", 
        pwd: "test",
        roles: [ "readWriteAnyDatabase", "dbAdminAnyDatabase", "clusterAdmin"]	
    }
)