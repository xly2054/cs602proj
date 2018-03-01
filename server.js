var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
var util 		= require('util'); //Used to debug - inspect cmd
var http 		= require('http');
var path        = require('path');

var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./Routes/API/apidoc.json');

var app = express();

// setup handlebars view engine
app.engine('handlebars', 
    handlebars({defaultLayout: 'main_logo'}));
app.set('view engine', 'handlebars');

//enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// static resources
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
var routes = require('./routes/index');
app.use('/', routes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

var server = http.Server(app);

var port = process.env.PORT || 1337;
server.listen(port);
