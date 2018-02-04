var express = require('express');
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require('./app/models/textEventsModel'); //created model loading here
var bodyParser = require('body-parser');
  

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use('/', express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./app/routes/textEventsRoutes'); //importing route

routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);