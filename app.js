var express = require('express');

var app =express();

var config = require('./config');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

var setupController = require('./controllers/toDoController');

var apiController = require('./controllers/apiController');

app.use('/',express.static(__dirname + '/public'));


app.set('view engine','ejs');
mongoose.connect(config.getDataBaseConnectionString());
setupController(app);

apiController(app);

app.listen(port);