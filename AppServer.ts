import path = require('path');
import express = require('express');
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';
import {App} from './App'; 

let server: any = new App().app;
server.listen(8080);


