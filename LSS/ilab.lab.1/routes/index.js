var request = require('request'),
		querystring = require('querystring');
/*
 * GET home page.
 */

exports.index = function(req, res){
  
};

exports.reservations = function(req, res){
  
  var url = req.url;
  
  var method = req.method;
  var body = req.body;

	var myRequest = {
		headers: {
			'content-type' : 'application/json'
		},
		url: "http://localhost:2000/ilab/labs/ads8k19e23s0svqp7jmqh8hchc" + url,
		method: method,
		json: body,
	}
	
	request(myRequest, function(error, response, body) {
		
		if (!error) {
			res.send(body);
		} else {
			res.send(error);
		}
		
	})
	
};

exports.timeblocks = function(req, res){
  
  var url = req.url;
  var method = req.method;
  var body = req.body;

	var myRequest = {
		headers: {
			'content-type' : 'application/json'
		},
		url: "http://localhost:3000/ilab/labs/ads8k19e23s0svqp7jmqh8hchc" + url,
		method: method,
		json: body,
	}
	
	request(myRequest, function(error, response, body) {
		if (!error) {
			res.send(body);
		} else {
			res.send(error);
		}
	})

};