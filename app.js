var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var getRouter = require('./routes');

var app = express();

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the Server
var db = MongoClient.connect(url)

db.then(function(db){
	app.use('/', getRouter(db) )
	app.listen(3000, function() {
		console.log ("listening to port 3000");
	})
})
.catch(function(err) {
	throw new Error("something failed in the connection");
})
