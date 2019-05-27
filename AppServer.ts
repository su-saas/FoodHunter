import {App} from "./App";

let server: any = new App().expressApp;
let port = process.env.PORT || 8080;
server.listen(port);