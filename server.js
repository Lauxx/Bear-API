//Were able to Create a server (CRUD-create read update delete)
var express = require('express');
var app = express();//express is framework to build API
var bodyParser = require('body-parser')
//have to envoke body-parser
app.use(bodyParser());
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
//Create API end-point:get(read), put(update/edit), delete(delete), post(create)=CRUD
app.get('/api/bears',function(req, res){
	res.json(allBears)
});

//added middleware(a function we are adding to our code) npm install body-parser --save;
//post = create, we are trying to creat something - a form
app.post('/api/bear', function(req, res){
	var newBear = {};
	newBear.name=req.body.name;//.body = data being submitted from a form
	newBear.id= new Date().getTime();//epoc time-just weirdness
	newBear.age=req.body.age;
	newBear.gender=req.body.gender;

	console.log('pushing: ', newBear);

	allBears.push(newBear);//arrayname.push to our above array
	res.json(allBears);//should respond with all bear objects including new data
})

app.get('/api/bear/:id', function(req, res){
	var id = req.params.id;//make sure what you are comparing is same typeof (Number, string)
	console.log(id);//request.params comes from express; make it easy to parse out id

	var newwerBear = ''//set to empty string
	allBears.forEach(function(individualBear) {
		if(individualBear.id.toString() === id.toString()){//.toString sets the same type with triple equals;
			newwerBear = individualBear;
		}
	})
	res.json(newwerBear)//needs to be outside of forEach loop;
})


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

