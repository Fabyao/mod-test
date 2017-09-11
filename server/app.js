const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require("path");
const serverConfig = require('./config/server');
const mongoose = require('mongoose');

// Try to connect to mongo DB
mongoose.Promise = global.Promise;

mongoose.connect(serverConfig.dbUri, { useMongoClient: true });
mongoose.connection.on('error', () => {
  throw new Error(`Cant connect to database: ${serverConfig.dbUri}`);
});

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(serverConfig.publicFolder)); 

app.use('/scripts', express.static(serverConfig.modulesFolder));

routes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('API not found');
    return next(err);
  });

module.exports = app;