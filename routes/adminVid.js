var express = require('express');
var request = require('request');
var passport = require("passport");
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var url = "mongodb://localhost/bRockHillLive";


var router = express.Router();



router.post('/update-videos', (req, res, next) => {
    var video = {};
    if (req.body.title) video.title = req.body.title;
    if (req.body.description) video.description = req.body.description;
    if (req.body.imgURL) video.imgURL = req.body.imgURL;
    if (req.body.videoURL) video.videoURL = req.body.videoURL;
    var id = req.body.id;
    MongoClient.connect(url, (err, db) => {

        db.collection('video').updateOne({
            "_id": objectId(id)
        }, {
            $set: video
        }, (err, result) => {
            console.log(video + ': item updated');
            db.close();
        });
    });
    res.redirect('/admin-video');

});

router.post('/delete-videos', (req, res, next) => {
    var id = req.body.id;
    MongoClient.connect(url, (err, db) => {

        db.collection('video').deleteOne({
            "_id": objectId(id)
        }, (err, result) => {
            console.log(': item updated');
            db.close();
        });
    });
    res.redirect('/admin-video');
});

router.post('/insert-videos', (req, res, next) => {

    var video = {
        title: req.body.title,
        description: req.body.description,
        imgURL: req.body.imgURL,
        videoURL: req.body.videoURL,

    };

    MongoClient.connect(url, (err, db) => {

        db.collection('video').insertOne(video, (err, result) => {
            console.log(video + ': item inserted');
            db.close();
        });
    });
    res.redirect('/admin-video');


});


router.get('/', (req, res, next) => {

    if (req.isAuthenticated()) {

        var resultsArray = [];
        MongoClient.connect(url, (err, db) => {
            var cursor = db.collection('video');
            cursor.find({}).toArray((err, results) => {
                res.render('admin-videos', {
                    items: results
                });
            });
        });

    } else {
        res.redirect('/login');

    }


});






module.exports = router;