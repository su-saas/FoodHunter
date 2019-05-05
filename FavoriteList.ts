import * as path from 'path';
import * as express from 'express';

//connect to the model 
import {FavoriteListModel} from './model/FavoriteListModel'

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
        router.get('/favoriteList', async (req, res) => {
            console.log('get all favoriteLists');
            var favoriteLists = await this.FavoriteLists.getAllFavoriteLists();
            console.log('get all favoriteLists finished');
            res.status(200).send(favoriteLists);
        });

        router.get('/favoriteList/:favoriteListID',async (req, res) => {
            var favoriteListID = req.params.favoriteListID;
            var favoriteList = await this.FavoriteLists.getFavoriteListByID(favoriteListID);
            console.log('in get route:', favoriteList);
            res.status(200).send(favoriteList);
        });

        router.delete('/favoriteList/:favoriteListID',async (req, res) => {
            var favoriteListID = req.params.favoriteListID;
            var favoriteList = await this.FavoriteLists.deleteFavoriteListByID(favoriteListID);
            console.log('in delete route:', favoriteList);
            res.status(200).send(favoriteList);
        });

        router.put('/favoriteList/:favoriteListID',async (req, res) => {
            var favoriteListID = req.params.favoriteListID;
            var favoriteListBody = req.body;
            var successOrNot = await this.FavoriteLists.updateFavoriteList(favoriteListID, favoriteListBody);
            console.log('in update route:', successOrNot);
            res.status(200).send(successOrNot);
        });

        router.post('/favoriteList', async (req, res) => {
            var favoriteList = req.body;
            var successOrNot = await this.FavoriteLists.createFavoriteList(favoriteList);
            console.log('in create route:', successOrNot);
            res.status(200).send(successOrNot);
        });
    }
}

export {FavoriteList};