import * as express from "express";
import { FoodieModel, RestaurantOwnerModel, AdminModel } from "../model/UserModel";
import { Router } from "express-serve-static-core";
import { IUserModel } from "../interfaces/IUserModel";
import { IFoodieModel } from "../interfaces/IFoodieModel";


// creates and configures an ExpressJS web server.
class FoodieRoute {

    public Foodie: FoodieModel;

    // run configuration methods on the Express instance.
    constructor() {
        this.Foodie = new FoodieModel();
    }

    public registerRoutes(router: express.Router): void {
        this.routes(router);
    }

    // configure API endpoints.
    private routes(router: Router): void {       
        // create foodie
        router.post("/foodie", (req, res) => {
            console.log(req.body);
            var user: any = req.body;
            this.Foodie.createUser(res, user);
        });

        // get login page
        router.get("/login", (req, res) => {
            var userPayload: any = req;
            console.log("login with userID: ", userPayload.userID);
            console.log("login with userPassword: ", userPayload.password);
            this.Foodie.logInByIDAndPassword(res, userPayload);
        });


        // get foodie by id
        router.get("/foodie/:userID", (req, res) => {
            var userId: any = req.params.userID;
            console.log("Query single user with id: ", userId);
            this.Foodie.getUserByID(res, userId);
        });

        // update foodie by id
        router.put("/foodie/:userID", (req, res) => {
            var userId: any = req.params.userID;
            var userBody: any = req.body;
            console.log("update user: ", userId);
            this.Foodie.updateUserByID(res, userId, userBody);
        });

        // delete foodie by id
        router.delete("/foodie/:userID", (req, res) => {
            var userId: any = req.params.userID;
            console.log("Delete user:", userId);
            this.Foodie.deleteUserByID(res, userId);
        });
    }
}
export {FoodieRoute};

class RestaurantOwnerRoute {

    public Owner: RestaurantOwnerModel;

    // run configuration methods on the Express instance.
    constructor() {
        this.Owner = new RestaurantOwnerModel();
    }

    public registerRoutes(router: express.Router): void {
        this.routes(router);
    }

    // configure API endpoints.
    private routes(router: Router): void {
        // create restaurantOwner
        router.post("/restaurantOwner", (req, res) => {
            console.log(req.body);
            var user: any = req.body;
            this.Owner.createUser(res, user);
        });

        // get login page
        router.get("/login", (req, res) => {
            var userPayload: any = req;
            console.log("login with userID: ", userPayload.userID);
            console.log("login with userPassword: ", userPayload.password);
            this.Owner.logInByIDAndPassword(res, userPayload);
        });

        // get restaurantOwner by id
        router.get("/restaurantOwner/:userID", (req, res) => {
            var userId: any = req.params.userID;
            console.log("Query single user with id: ", userId);
            this.Owner.getUserByID(res, userId);
        });

        // update restaurantOwner by id
        router.put("/restaurantOwner/:userID", (req, res) => {
            var userId: any = req.params.userID;
            var userBody: any = req.body;
            console.log("update user: ", userId);
            this.Owner.updateUserByID(res, userId, userBody);
        });

        // delete restaurantOwner by id
        router.delete("/restaurantOwner/:userID", (req, res) => {
            var userId: any = req.params.userID;
            console.log("Delete user:", userId);
            this.Owner.deleteUserByID(res, userId);
        });
    }
}
export {RestaurantOwnerRoute};

class AdminRoute {

    public Admin: AdminModel;

    // run configuration methods on the Express instance.
    constructor() {
        this.Admin = new AdminModel();
    }

    public registerRoutes(router: express.Router): void {
        this.routes(router);
    }

    // configure API endpoints.
    private routes(router: Router): void {
        // create admin
        router.post("/admin", (req, res) => {
            console.log(req.body);
            var user: any = req.body;
            this.Admin.createUser(res, user);
        });

        // get login page
        router.get("/login", (req, res) => {
            var userPayload: any = req;
            console.log("login with userID: ", userPayload.userID);
            console.log("login with userPassword: ", userPayload.password);
            this.Admin.logInByIDAndPassword(res, userPayload);
        });

        // get all users
        router.get("/admin/users", (req, res) => {
            console.log("get all users");
            this.Admin.getAllUsers(res);
        });

        // get all foodies
        router.get("/admin/foodies", (req, res) => {
            var userType: any = req.params.userType;
            console.log("Get all foodies: ", userType);
            this.Admin.getAllFoodies(res, userType);
        });

        // get foodie by id
        router.get("/admin/foodies/:userID", (req, res) => {
            var userId: any = req.params.userID;
            console.log("Query single foodie with id: ", userId);
            this.Admin.getUserByID(res, userId);
        });

        // get all restaurantOwners
        router.get("/admin/restaurantOwners", (req, res) => {
            var userType: any = req.params.userType;
            console.log("Get all restaurantOwners: ", userType);
            this.Admin.getAllRestaurantOwners(res, userType);
        });

        // get restaurantOwner by id
        router.get("/admin/restaurantOwners/:userID", (req, res) => {
            var userId: any = req.params.userID;
            console.log("Query single restaurantOwner with id: ", userId);
            this.Admin.getUserByID(res, userId);
        });

        // get all admins
        router.get("/admin/admins", (req, res) => {
            var userType: any = req.params.userType;
            console.log("Get all admins: ", userType);
            this.Admin.getAllAdmins(res, userType);
        });

        // get admin by id
        router.get("/admin/:userID", (req, res) => {
            var userId: any = req.params.userID;
            console.log("Query single admin with id: ", userId);
            this.Admin.getUserByID(res, userId);
        });

        // update admin by id
        router.put("/admin/:userID", (req, res) => {
            var userId: any = req.params.userID;
            var userBody: any = req.body;
            console.log("update user: ", userId);
            this.Admin.updateUserByID(res, userId, userBody);
        });

        // delete admin by id
        router.delete("/admin/:userID", (req, res) => {
            var userId: any = req.params.userID;
            console.log("Delete user:", userId);
            this.Admin.deleteUserByID(res, userId);
        });
    }
}
export {AdminRoute};