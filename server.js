// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//var routes = require("./routes")
// Initialize Express
var app = express();

mongoose.Promise = Promise;

var port = process.env.PORT || 3000;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//mongo

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreactdb";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
var db = mongoose.connection;

mongoose.connect(MONGODB_URI);


// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
  });
  
  // Once logged in to the db through mongoose, log a success message
  db.once("open", function() {
    console.log("Mongoose connection successful.");
  });

// Start the API server
app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
