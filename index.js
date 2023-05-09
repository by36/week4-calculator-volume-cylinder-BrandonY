//jshint esversion:6

// create an express object from the express package
const express = require("express");
const bodyParser = require("body-parser");

// create an app object from the express object
const app = express();
// this allows the parsing of the html file using body parser
app.use(bodyParser.urlencoded({extended: true}));

//this sends the html file to the web page using the root directory
//
app.get("/HeightCone", function(req, res) {
  res.sendFile(__dirname + "/HeightCone.html")
});

// this gets the response from the values in the web page
app.post("/", function(req, res){

//use n1 for radius and n2 for volume
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

// does the computation of the input variables, as numbers
//This is a new comment that is gor GitHub
  var heightCone = (3*num2)/(Math.PI * Math.pow(num1, 2));

// sends the results back to the web page as string
  res.send("The height of the cone is " + heightCone.toFixed(2));
})
//this gets the response from the web page to this placeholder

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});
//See my comment by Brandon Yoshikawa
