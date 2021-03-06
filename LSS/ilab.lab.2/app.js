
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.all('/timeblocks', routes.timeblocks);
app.all('/timeblocks/:timeblock_id', routes.timeblocks);
app.all('/reservations', routes.reservations);
app.all('/reservations/:reservation_id', routes.reservations);

app.listen(3002, function(){
  console.log("Lab server 2 listening on port %d in %s mode", app.address().port, app.settings.env);
});
