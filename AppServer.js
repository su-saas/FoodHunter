"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var server = new App_1.App().expressApp;
var port = process.env.PORT || 8080;
server.listen(port);
