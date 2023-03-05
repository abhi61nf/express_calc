const express = require("express");
const bodyParser= require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
   var numberOne = Number(req.body.num1);
   var numberTwo = Number(req.body.num2);

   var result = numberOne + numberTwo;
   res.send("The result of the sum is " + result);
});

app.listen(3000, function(){
  console.log("Server has started on port 3000.");
});

// BMI Calculator part

app.get('/bmiCalculator', function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  res.send("Your BMI is " + weight/(Math.pow(height, 2)));
})
