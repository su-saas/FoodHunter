// create foodhunter db for FoodHunter Porject
db = db.getSiblingDB("testapp")
var dbname = 'testapp'

/************ Users **********/
db.createCollection('user')
var userCollection = db.getCollection('user')
userCollection.remove({})

// generate 3 foodie
userCollection.insert(
    {
        userID: 1,
        userName: "Xing Zheng",
        userType: 1,
        password: null,
        emailAddress: "xzheng0624@gmail.com",
        avatar: 'https://drive.google.com/uc?id=1Px72TDiKAK8Vlr6GQyNv03C1Vy6anQ9x',
        tagListID: 1,
        favoriteListID: 1
    })

userCollection.insert(
    {
        userID: 2,
        userName: "Helena",
        userType: 1,
        password: null,
        emailAddress: "helenawang77@gmail.com",
        avatar: 'https://drive.google.com/uc?id=1rGvNT1klU8v287D6twZ5Up1ewfwDRZsT',
        tagListID: 2,
        favoriteListID: 2
    })

userCollection.insert(
    {
        userID: 3,
        userName: "Erica",
        userType: 1,
        password: null,
        emailAddress: "erica820822@gmail.com",
        avatar: 'https://drive.google.com/uc?id=1rGvNT1klU8v287D6twZ5Up1ewfwDRZsT',
        tagListID: 3,
        favoriteListID: 3
    })

userCollection.insert(
    {
        userID: 4,
        userName: "Daniel",
        userType: 1,
        password: null,
        emailAddress: "nealdeng77@gmail.com",
        avatar: 'https://drive.google.com/uc?id=1_J4TsG6Z9Hm8AnpYHpepJ1_6RmADUCId',
        tagListID: 4,
        favoriteListID: 4
    })

/************ Tags **********/
db.createCollection('tag')
var tagCollection = db.getCollection('tag')
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

/************ Foodie Tag List **********/
db.createCollection('foodieTagList')
var foodieTagListCollection = db.getCollection('foodieTagList')
foodieTagListCollection.remove({})

foodieTagListCollection.insert(
    {
        tagListID: 2,
        userID: 2,
        tagList: [1, 1, 1, 1, 1, 1, 1, 1],
    })

foodieTagListCollection.insert(
    {
        tagListID: 3,
        userID: 3,
        tagList: [7, 8, 1, 2, 5, 6, 7, 1],
    })

foodieTagListCollection.insert(
    {
        tagListID: 1,
        userID: 1,
        tagList: [8, 7, 2, 4, 6, 3, 1, 5],
    })
foodieTagListCollection.insert(
    {
        tagListID: 4,
        userID: 4,
        tagList: [1, 2, 3, 4, 5, 6, 7, 8],
    })




/************ Restaurants **********/
db.createCollection("restaurant")
restaurantCollection = db.getCollection("restaurant")
restaurantCollection.remove({})

restaurantCollection.insert(
    {
        userID: 1,
        restaurantID: 1,
        restaurantName: "the pink door",
        address: "Pike Place Market 1919 Post Alley Seattle, WA 98101",
        phoneNum: "206-0000-0000",
        introductionContent: "Italian Restaurant",
        hours: "M-F 11:30am - 1:00am",
        averagePrice: 30,
        restaurantAvatar: ' https://drive.google.com/uc?id=1S0qUZBSYQitgwSHvopV-FwdK3xyYPCTL',
    }
)

restaurantCollection.insert(
    {
        userID: 2,
        restaurantID: 2,
        restaurantName: "momiji",
        address: "Edit 1522 12th Ave Seattle, WA 98122",
        phoneNum: "206-0000-0001",
        introductionContent: "Japanese Restaurant",
        hours: "M-F 11:30am - 9:00pm",
        averagePrice: 25,
        restaurantAvatar: 'https://drive.google.com/uc?id=1P-tt-lkaCWeNrinwzI5ImzpXtFDfxu42',
    }
)

restaurantCollection.insert(
    {
        userID: 3,
        restaurantID: 3,
        restaurantName: "panwa thai",
        address: "Rianna Apartments 812 12th Ave Seattle, WA 98122",
        phoneNum: "206-0000-0002",
        introductionContent: "Thai Restaurant",
        hours: "M-F 11:00am - 8:00pm",
        averagePrice: 15,
        restaurantAvatar: 'https://drive.google.com/uc?id=1S0qUZBSYQitgwSHvopV-FwdK3xyYPCTL',
    }
)

restaurantCollection.insert(
    {
        userID: 4,
        restaurantID: 4,
        restaurantName: "wasabi",
        address: "2311 2nd Ave Seattle, WA 98121",
        phoneNum: "206-0000-0004",
        introductionContent: "Dedicated to the art of sushi and Japanese fusion food.",
        hours: "M-F 11:00am - 8:00pm",
        averagePrice: 100,
        restaurantAvatar: 'https://drive.google.com/uc?id=1S0qUZBSYQitgwSHvopV-FwdK3xyYPCTL',
    }
)

restaurantCollection.insert(
    {
        userID: 5,
        restaurantID: 5,
        restaurantName: "nana's green tea",
        address: "1007 Stewart St Ste 103 Seattle, WA 98101",
        phoneNum: "206-0000-0005",
        introductionContent: "new style",
        hours: "M-F 11:00am - 8:00pm",
        averagePrice: 30,
        restaurantAvatar: 'https://drive.google.com/uc?id=1S0qUZBSYQitgwSHvopV-FwdK3xyYPCTL',
    }
)


restaurantCollection.insert(
    {
        userID: 6,
        restaurantID: 6,
        restaurantName: "queen city",
        address: "2201 1st Ave Seattle, WA 98121",
        phoneNum: "206-0000-0006",
        introductionContent: "Linda Derschang is a restauranteur, designer, and staple of the Capitol Hill food and nightlife scene. ",
        hours: "M-F 11:00am - 8:00pm",
        averagePrice: 45,
        restaurantAvatar: 'https://drive.google.com/uc?id=1S0qUZBSYQitgwSHvopV-FwdK3xyYPCTL',
    }
)

restaurantCollection.insert(
    {
        userID: 7,
        restaurantID: 7,
        restaurantName: "din tai feng",
        address: "600 Pine St Ste 403 Seattle, WA 98101",
        phoneNum: "206-0000-0007",
        introductionContent: "the perfect place to come as a group",
        hours: "M-F 11:00am - 8:00pm",
        averagePrice: 50,
        restaurantAvatar: 'https://drive.google.com/uc?id=1S0qUZBSYQitgwSHvopV-FwdK3xyYPCTL',
    }
)

restaurantCollection.insert(
    {
        userID: 8,
        restaurantID: 8,
        restaurantName: "radiator whiskey",
        address: "1007 Stewart St Ste 103 Seattle, WA 98101",
        phoneNum: "206-0000-0008",
        introductionContent: "94 Pike St Ste 30 Seattle, WA 98101",
        hours: "M-F 11:00am - 8:00pm",
        averagePrice: 30,
        restaurantAvatar: 'https://drive.google.com/uc?id=1S0qUZBSYQitgwSHvopV-FwdK3xyYPCTL',
    }
)


/************ Dish **********/
db.createCollection("dish")
dishCollection = db.getCollection("dish")
dishCollection.remove({})
dishCollection.insert(
    {
        restaurantID: 1,
        dishID: 1,
        dishName: "Fall Risotto",
        dishDetails: "butternut squash",
        dishPrice: 19
    }
)

dishCollection.insert(
    {
        restaurantID: 2,
        dishID: 2,
        dishName: "sushi set a",
        dishDetails: "tuna salmon, yellowtail",
        dishPrice: 9
    }
)

dishCollection.insert(
    {
        restaurantID: 2,
        dishID: 3,
        dishName: "curry",
        dishDetails: "Stir-fried Thai rice noodles",
        dishPrice: 9.95
    }
)

/************ Restaurant Tag List **********/
db.createCollection("rtaglist")
rtaglistCollection = db.getCollection("rtaglist")
rtaglistCollection.remove({})
rtaglistCollection.insert(
    {
        restaurantID: 1,
        rtaglistID: 1,
        rtagList: [13, 500, 15, 110, 35, 600, 0, 0]
    }
)

rtaglistCollection.insert(
    {
        restaurantID: 2,
        rtaglistID: 2,
        rtagList: [11, 29, 190, 0, 340, 0, 39, 85]
    }
)

rtaglistCollection.insert(
    {
        restaurantID: 3,
        rtaglistID: 3,
        rtagList: [140, 0, 8, 30, 0, 120, 34, 180]
    }
)

rtaglistCollection.insert(
    {
        restaurantID: 4,
        rtaglistID: 4,
        rtagList: [100, 20, 50, 83, 500, 40, 0, 120]
    }
)

rtaglistCollection.insert(
    {
        restaurantID: 5,
        rtaglistID: 5,
        rtagList: [0, 300, 100, 0, 90, 70, 333, 289]
    }
)
rtaglistCollection.insert(
    {
        restaurantID: 6,
        rtaglistID: 6,
        rtagList: [1, 3, 6, 8, 3, 0, 1, 7]
    }
)
rtaglistCollection.insert(
    {
        restaurantID: 7,
        rtaglistID: 7,
        rtagList: [6, 23, 4, 1, 2, 7, 8, 3]
    }
)
rtaglistCollection.insert(
    {
        restaurantID: 8,
        rtaglistID: 8,
        rtagList: [0, 0, 0, 0, 0, 0, 0, 0]
    }
)

/************ Review **********/
db.createCollection('review')
var reviewCollection = db.getCollection('review')
reviewCollection.remove({})

reviewCollection.insert(
    {
        reviewID: 1,
        userID: 1,
        restaurantID: 1,
        title: "Good experience",
        content: "I like the place very much",
        date: "2019-01-01T01:00:00",
    })

reviewCollection.insert(
    {
        reviewID: 2,
        userID: 2,
        restaurantID: 2,
        title: "Great food",
        content: "I like the food very much",
        date: "2019-01-02T01:00:00",
    })

reviewCollection.insert(
    {
        reviewID: 4,
        userID: 2,
        restaurantID: 1,
        title: "Great food",
        content: "I like the food very much",
        date: "2019-01-02T01:00:00",
    })

reviewCollection.insert(
    {
        reviewID: 3,
        userID: 3,
        restaurantID: 3,
        title: "Beautiful view",
        content: "It's a great place",
        date: "2019-01-03T01:00:00",
    })

reviewCollection.insert(
    {
        reviewID: 4,
        userID: 1,
        restaurantID: 1,
        title: "Good service",
        content: "Wow",
        date: "2019-02-01T01:00:00",
    })


/************ recommendationList **********/
db.createCollection("recommendationList")
recommendationListCollection = db.getCollection("recommendationList")
recommendationListCollection.remove({})
recommendationListCollection.insert(
    {
        recommendationlistID: 1,
        foodietaglistID: 1,
        restaurantList: [1, 2]
    }
)
recommendationListCollection.insert(
    {
        recommendationlistID: 2,
        foodietaglistID: 2,
        restaurantList: [1, 3]
    }
)
recommendationListCollection.insert(
    {
        recommendationlistID: 3,
        foodietaglistID: 3,
        restaurantList: [1, 2, 3]
    }
)

/************ Favorite List **********/
db.createCollection('favoriteList')
var favoriteListCollection = db.getCollection('favoriteList')
favoriteListCollection.remove({})

favoriteListCollection.insert(
    {
        favoriteListID: 2,
        userID: 2,
        restaurantIDList: [1],
    })
favoriteListCollection.insert(
    {
        favoriteListID: 1,
        userID: 1,
        restaurantIDList: [1],
    })
favoriteListCollection.insert(
    {
        favoriteListID: 3,
        userID: 3,
        restaurantIDList: [1],
    })
favoriteListCollection.insert(
    {
        favoriteListID: 4,
        userID: 4,
        restaurantIDList: [1],
    })

/************ application form **********/
db.createCollection("applicationform")
formCollection = db.getCollection("applicationform")
formCollection.remove({})
formCollection.insert(
    {
        formID: 1,
        restaurantID: 1,
        userID: 1,
        status: "Pending",
        date: "December 17, 1995 03:24:00"
    }
)
formCollection.insert(
    {
        formID: 2,
        restaurantID: 2,
        userID: 2,
        status: "Approved",
        date: "December 18, 1995 05:24:00"
    }
)
formCollection.insert(
    {
        formID: 3,
        restaurantID: 3,
        userID: 3,
        status: "Declined",
        date: "December 18, 1999 03:24:00"
    }
)
