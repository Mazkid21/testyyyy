var express = require('express');
var request = require('request');
var passport = require("passport");
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var url = "mongodb://localhost/bRockHillLive";


var router = express.Router();


router.post('/insert', (req, res, next) => {

    var item = {
        title: req.body.title,
        description: req.body.description,
        numBeds: req.body.numBeds,
        numBaths: req.body.numBaths,
        squareFeet: req.body.squareFeet,
        acres: req.body.acres,
        listingFeatures: req.body.listingFeatures,
        nightRates: req.body.nightRates,
        monthlyRates: req.body.monthlyRates,
        photoURL1: req.body.photoURL1,
        photoURL2: req.body.photoURL2,
        photoURL3: req.body.photoURL3,
        photoURL4: req.body.photoURL4,
        photoURL5: req.body.photoURL5,
        photoURL6: req.body.photoURL6,
        photoURL7: req.body.photoURL7,
        photoURL8: req.body.photoURL8,
        photoURL9: req.body.photoURL9,
        photoURL10: req.body.photoURL10,
        photoURL11: req.body.photoURL11,
        photoURL12: req.body.photoURL12,
        photoURL13: req.body.photoURL13,
        photoURL14: req.body.photoURL14,
        photoURL15: req.body.photoURL15,
        photoURL16: req.body.photoURL16,
        photoURL17: req.body.photoURL17,
        photoURL18: req.body.photoURL18,
        photoURL19: req.body.photoURL19,
        photoURL20: req.body.photoURL20,
        photoURL21: req.body.photoURL21,
        photoURL22: req.body.photoURL22,
        photoURL23: req.body.photoURL23,
        photoURL24: req.body.photoURL24,
        photoURL25: req.body.photoURL25,
        flyerImgURL1: req.body.flyerImgURL1,
        flyerImgURL2: req.body.flyerImgURL2,
        flyerImgURL3: req.body.flyerImgURL3,
        flyerImgURL4: req.body.flyerImgURL4,
        flyerImgURL5: req.body.flyerImgURL5,
        flyerImgURL6: req.body.flyerImgURL6,
        flyerImgURL7: req.body.flyerImgURL7,
        flyerImgURL8: req.body.flyerImgURL8,
        flyerImgURL9: req.body.flyerImgURL9,
        flyerImgURL10: req.body.flyerImgURL10,
        customURL: req.body.customURL
    };

    MongoClient.connect(url, (err, db) => {

        db.collection('rentals').insertOne(item, (err, result) => {
            console.log(item + ': item inserted');
            db.close();
        });
    });
    res.redirect('/admin');


});

router.post('/update', (req, res, next) => {
    var item = {};

    if (req.body.title) item.title = req.body.title;
    if (req.body.description) item.description = req.body.description;
    if (req.body.numBeds) item.numBeds = req.body.numBeds;
    if (req.body.numBaths) item.numBaths = req.body.numBaths;
    if (req.body.squareFeet) item.squareFeet = req.body.squareFeet;
    if (req.body.acres) item.acres = req.body.acres;
    if (req.body.listingFeatures) item.listingFeatures = req.body.listingFeatures;
    if (req.body.nightRates) item.nightRates = req.body.nightRates;
    if (req.body.monthlyRates) item.monthlyRates = req.body.monthlyRates;
    if (req.body.photoURL1) item.photoURL1 = req.body.photoURL1;
    if (req.body.photoURL2) item.photoURL2 = req.body.photoURL2;
    if (req.body.photoURL3) item.photoURL3 = req.body.photoURL3;
    if (req.body.photoURL4) item.photoURL4 = req.body.photoURL4;
    if (req.body.photoURL5) item.photoURL5 = req.body.photoURL5;
    if (req.body.photoURL6) item.photoURL6 = req.body.photoURL6;
    if (req.body.photoURL7) item.photoURL7 = req.body.photoURL7;
    if (req.body.photoURL8) item.photoURL8 = req.body.photoURL8;
    if (req.body.photoURL9) item.photoURL9 = req.body.photoURL9;
    if (req.body.photoURL10) item.photoURL10 = req.body.photoURL10;
    if (req.body.photoURL11) item.photoURL11 = req.body.photoURL11;
    if (req.body.photoURL12) item.photoURL12 = req.body.photoURL12;
    if (req.body.photoURL13) item.photoURL13 = req.body.photoURL13;
    if (req.body.photoURL14) item.photoURL14 = req.body.photoURL14;
    if (req.body.photoURL15) item.photoURL15 = req.body.photoURL15;
    if (req.body.photoURL16) item.photoURL16 = req.body.photoURL16;
    if (req.body.photoURL17) item.photoURL17 = req.body.photoURL17;
    if (req.body.photoURL18) item.photoURL18 = req.body.photoURL18;
    if (req.body.photoURL19) item.photoURL19 = req.body.photoURL19;
    if (req.body.photoURL20) item.photoURL20 = req.body.photoURL20;
    if (req.body.photoURL21) item.photoURL21 = req.body.photoURL21;
    if (req.body.photoURL22) item.photoURL22 = req.body.photoURL22;
    if (req.body.photoURL23) item.photoURL23 = req.body.photoURL23;
    if (req.body.photoURL24) item.photoURL24 = req.body.photoURL24;
    if (req.body.photoURL25) item.photoURL25 = req.body.photoURL25;
    if (req.body.flyerImgURL1) item.flyerImgURL1 = req.body.flyerImgURL1;
    if (req.body.flyerImgURL2) item.flyerImgURL2 = req.body.flyerImgURL2;
    if (req.body.flyerImgURL3) item.flyerImgURL3 = req.body.flyerImgURL3;
    if (req.body.flyerImgURL4) item.flyerImgURL4 = req.body.flyerImgURL4;
    if (req.body.flyerImgURL5) item.flyerImgURL5 = req.body.flyerImgURL5;
    if (req.body.flyerImgURL6) item.flyerImgURL6 = req.body.flyerImgURL6;
    if (req.body.flyerImgURL7) item.flyerImgURL7 = req.body.flyerImgURL7;
    if (req.body.flyerImgURL8) item.flyerImgURL8 = req.body.flyerImgURL8;
    if (req.body.flyerImgURL9) item.flyerImgURL9 = req.body.flyerImgURL9;
    if (req.body.flyerImgURL10) item.flyerImgURL10 = req.body.flyerImgURL10;
    if (req.body.customURL) item.customURL = req.body.customURL;


    var id = req.body.id;
    console.log(id);
    MongoClient.connect(url, (err, db) => {

        db.collection('rentals').updateOne({
            "_id": objectId(id)
        }, {
            $set: item
        }, (err, result) => {
            console.log(item + ': item updated');
            db.close();
        });
    });
    res.redirect('/admin');

});

router.post('/delete', (req, res, next) => {
    var id = req.body.id;
    MongoClient.connect(url, (err, db) => {

        db.collection('rentals').deleteOne({
            "_id": objectId(id)
        }, (err, result) => {
            console.log(': item updated');
            db.close();
        });
    });
    res.redirect('/admin');
});

// router.post('/insert-videos', (req, res, next) => {

//     var video = {
//         title: req.body.title,
//         description: req.body.description,
//         imgURL: req.body.imgURL,
//         videoURL: req.body.videoURL,

//     };

//     MongoClient.connect(url, (err, db) => {

//         db.collection('video').insertOne(video, (err, result) => {
//             console.log(video + ': item inserted');
//             db.close();
//         });
//     });
//     res.redirect('/admin');


// });
router.get('/:id', (req, res) => {

    var id = req.params.id;
    console.log(objectId(id) + "this is th idd");
    if (req.isAuthenticated()) {

        var resultsArray = [];
        MongoClient.connect(url, (err, db) => {
            var cursor = db.collection('rentals');
            cursor.find({
                "_id": objectId(id)
            }).toArray((err, results) => {
                res.render('adminOne', {
                    items: results
                });
            });
        });

    } else {
        res.redirect('/login');

    }


});




router.get('/', (req, res, next) => {
    // console.log(req.session.passport.user.userGroup);


    if (req.isAuthenticated()) {
        if (req.session.passport.user.userGroup === 'admin') {
            //route for admin
            var resultsArray = [];
            MongoClient.connect(url, (err, db) => {
                var cursor = db.collection('rentals');
                cursor.find({}).toArray((err, results) => {
                    res.render('admin', {
                        items: results
                    });
                });
            });
        } else {
            //rote for non-admin
            res.redirect('/admin-login');
        }
    } else {
        res.redirect('/admin-login');
    }


});






module.exports = router;