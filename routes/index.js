var express = require('express');
var router = express.Router();
var getTasks = require('./getTasks');

function getRouter(db) {

	router.get('/tasks', getTasks.bind(null,db) )
	return router;

}

module.exports = getRouter;