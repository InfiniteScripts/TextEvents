var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require('./app/models/textEventsModel'); //created model loading here
var bodyParser = require('body-parser');
  

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://infini-heroku:K1282859k@ds223738.mlab.com:23738/heroku_4m2mqgn9'); 

app.use('/', express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var routes = require('./app/routes/textEventsRoutes'); //importing route

routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);