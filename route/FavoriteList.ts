import * as express from 'express';

//connect to the model 
import {FavoriteListModel} from '../model/FavoriteListModel'

// Creates and configures an ExpressJS web server.
class FavoriteList {

    public FavoriteLists: FavoriteListModel;

    //Run configuration methods on the Express instance.
    constructor() {
        this.FavoriteLists = new FavoriteListModel();
    }

    public registerRoutes(router: express.Router) {
        this.routes(router);
    }

    // Configure API endpoints.
    private routes(router: express.Router): void {
        router.get('/favoriteList', (req, res) => {
            this.FavoriteLists.getAllFavoriteLists(res);
        });

        router.get('/favoriteList/:favoriteListID',(req, res) => {
            var favoriteListID = req.params.favoriteListID;
            this.FavoriteLists.getFavoriteListByID(favoriteListID, res);
        });

        router.delete('/favoriteList/:favoriteListID',(req, res) => {
            var favoriteListID = req.params.favoriteListID;
            this.FavoriteLists.deleteFavoriteListByID(favoriteListID, res);
        });

        router.put('/favoriteList/:favoriteListID',(req, res) => {
            var favoriteListID = req.params.favoriteListID;
            var favoriteListBody = req.body;
            this.FavoriteLists.updateFavoriteList(favoriteListID, favoriteListBody, res);
        });

        router.post('/favoriteList', (req, res) => {
            var favoriteList = req.body;
            this.FavoriteLists.createFavoriteList(favoriteList, res);
        });
    }
}

export {FavoriteList};