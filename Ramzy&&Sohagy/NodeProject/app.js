const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Portfolio = require('./api/routes/portfolio');
const portfolioFooter=require('./api/routes/portfolioFooter');
const mongoose = require('mongoose');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
//mongoose.connect('mongodb://omar_ramzyi:omar01010539322@portfolio-shard-00-00-giapu.mongodb.net:27017,portfolio-shard-00-01-giapu.mongodb.net:27017,portfolio-shard-00-02-giapu.mongodb.net:27017/test?ssl=true&replicaSet=portfolio-shard-0&authSource=admin&retryWrites=true');
//{useMongoClient:true}
mongoose.connect('mongodb+srv://omar_ramzyi:omar01010539322@portfolio-giapu.mongodb.net/test?retryWrites=true');
app.use('/portfolio', Portfolio);
app.use('/portfolioFooter',portfolioFooter);
app.use((req, res, next) => {
    req.header("Access-Controll-Allow-Origin", "*");
    req.header("Access-Controll-Allow-Headers", "*");
    req.header("Access-Controll-Allow-Methods", "*");
    next();
})
app.use((req, res, next) => {
    const error = new Error("can`t Find Your Route !!");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(404).json({
        error: error.message  
        //error: error.message + " Please Write Valid URL."
    });
});
module.exports = app;