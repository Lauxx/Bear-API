//IMPORT NEW FILE 
// './' says its looking for a file - don't need to add .js extention
var Calculator = require('./calculator')
console.log(Calculator);
//CREATE A NEW CALCULATOR
var myCalculator = new Calculator();
console.log(myCalculator);
//TEST NEW SUM FUNCTION
var firstAnswer = myCalculator.sum(2,5);
// test in terminal with node 'file extention'
var secondAnswer = myCalculator.subtract(10,4);

