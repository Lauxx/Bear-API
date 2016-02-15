//Were able to Create a server (CRUD-create read update delete)
var express = require('express');
var app = express();
//created objects(bears) and using them in an array (allBears)
var monte = {name: 'Monte', id:1 , age:50 , gender: 'male'};
var paul = {name: 'Paul', id:2 , age:30 , gender:'male' };
var shelly = {name: 'Shelly', id:3 , age:35 , gender:'female' };
var lo = {name: 'Lo', id:4, age:25, gender:'female'};
var allBears = [monte, paul, shelly, lo];
//Read; req -request; res-response;
//res.json simple test to make sure it works; is now returning allBears;
//'/api/bears' is our request; response is res.json(allBears); returning 
//object of all bears in Postman
//Create API end-point:get, put, delete, post
app.get('/api/bears',function(req, res){
	res.json(allBears)
});
//server should be running on localhost:3000/api/bears;
//console.log just to test that server is working relative to the terminal
app.listen(3000, function(){
	console.log("Good job Lo!");
})
//test in terminal node server.js - should return 'Good job Lo!'
// we just created a simple server!
//using Postman^^need to kill server and restart to effect Postman: TO AVOID:
//Cheat for kill server; sudo npm install -g nodemon; installed globally
//allows node to update automatically/don't have to kill server each time
//changes are made: now 'nodemon server.js'; BEST FOR SERVER SIDE CODING

