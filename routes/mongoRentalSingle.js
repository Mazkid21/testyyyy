var express = require('express');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var poop = require('mongodb').ObjectID;


var url = "mongodb://localhost/bRockHillLive";
var router = express.Router();

router.get('/:id', (req, res) => {
    console.log("HIIII");
    console.log('Request Id:', req.params.id);

    // API HEAD INFO WITH KEY AND SUCH

    var customURL = req.params.id;


    MongoClient.connect(url, (err, db) => {
        var cursor = db.collection('rentals');
        cursor.find({
            "customURL": customURL
        }).toArray((err, results) => {
            console.log(results);
            res.render('mongoRentalSingle', {
                items: results
            });
        });
    });

});


module.exports = router;