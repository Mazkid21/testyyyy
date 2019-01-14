var express = require('express');
var request = require('request');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


var url = "mongodb://localhost/bRockHillLive";


var router = express.Router();



router.get('/', (req, res, next) => {





  MongoClient.connect(url, (err, db) => {
    var cursor = db.collection('rentals');
    cursor.find({}).toArray((err, results) => {
      res.render('index', {

        items: results
      });
    });
  });

  // res.send({
  //   property: data
  // });



});



//Onload API CALL
function onLoadrequests(options, callback) {

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var resultsArray = [];
    body = JSON.parse(body);

    // logic used to compare search results with the input from user
    if (!body.value) {
      results = "No results found. Try again.";
      callback(results);
    } else {
      propertyData = body.value;

      // for (var i = 0; i < results.length; i++) {
      //   console.log(i + "this is the index nimbers ");
      //   resultsArray.push({
      //     directions: results
      //   });
      // };
    };
    // pass back the results to client side
    callback(propertyData);
  });
};



module.exports = router;