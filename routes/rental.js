var express = require('express');
var request = require('request');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


var url = "mongodb://localhost/bRockHillLive";


var router = express.Router();



router.get('/', (req, res, next) => {

    console.log("hiiii from server");
    var options = {
        method: 'GET',
        url: 'https://sparkapi.com/Reso/OData/Property',
        qs: {
            '$filter': 'City eq \'Aspen\' and MlsStatus eq \'Active\' and PropertyType eq \'b__5265736964656e7469616c204c65617365\'',
            '$expand': 'CustomFields,Media',
            '$orderby': 'ListPrice desc',
            '$count': 'true'
        },
        headers: {
            'x-sparkapi-user-agent': 'BrittanieRockhill',
            accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    onLoadrequests(options, function (data) {
        console.log(data + " this is data from back end");
        var propertyData = data;
        var resultsArray = [];
        MongoClient.connect(url, (err, db) => {
            var cursor = db.collection('rentals');
            cursor.find({}).toArray((err, results) => {
                res.render('rentals', {
                    property: data,
                    items: results
                });
            });
        });

        // res.send({
        //   property: data
        // });
    });


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