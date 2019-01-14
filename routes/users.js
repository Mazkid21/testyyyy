var express = require('express');
var request = require('request');
var passport = require("passport");
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var url = "mongodb://localhost/bRockHillLive";


var router = express.Router();

var userData1;
var userData2;
var userData3;
var userData4;
var userData5;
var userData6;
var userData7;
var userData8;
var userData9;
var userData10;
var userData11;
var userData12;
var userData13;
var userData14;
var userData15;
var userData16;
var userData17;
var userData18;
var userData19;
var userData20;


router.post('/delete', (req, res, next) => {

  var id = req.user._id;
  console.log(id);
  var description = req.body.description;

  MongoClient.connect(url, (err, db) => {

    db.collection('users').findOneAndUpdate({
      "_id": id
    }, {
      $pull: {
        userInfo: {
          "description": description

        } //inserted data is the object to be inserted
      }
    }, {
      upsert: true
    }, (err, result) => {
      console.log(JSON.stringify(description) + ': item updated');
      db.close();
    });
  });

  res.redirect('/users');



});

router.post('/insert', (req, res, next) => {

  var id = req.body.id;
  console.log(id);
  var userInfo = {
    title: req.body.title,
    description: req.body.description,
    authors: req.body.authors,

    smallThumbnail: req.body.smallThumbnail
  };




  MongoClient.connect(url, (err, db) => {

    db.collection('users').findOneAndUpdate({
      "_id": objectId(id)
    }, {
      $set: {
        userInfo: userInfo
      }
    }, {
      upsert: true
    }, (err, result) => {
      console.log(JSON.stringify(userInfo) + ': item updated');
      db.close();
    });
  });
  res.redirect('/users');


});

router.post('/update', (req, res, next) => {



  if (req.body.title) title = req.body.title;
  if (req.body.authors) authors = req.body.authors;
  if (req.body.description) description = req.body.description;
  if (req.body.smallThumbnail) smallThumbnail = req.body.smallThumbnail;


  var id = req.body.id;
  console.log(id);
  MongoClient.connect(url, (err, db) => {

    db.collection('rentals').update({
      "_id": objectId(id)
    }, {
      $set: title,
      description,
      authors,
      smallThumbnail
    }, (err, result) => {

      db.close();
    });
  });
  res.redirect('/users');

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

  var id = req.session.passport.user.userId;
  console.log(objectId(id) + "this is th idd");
  if (req.isAuthenticated()) {

    var resultsArray = [];
    MongoClient.connect(url, (err, db) => {
      var cursor = db.collection('users');
      cursor.find({
        "_id": objectId(id)
      }).toArray((err, results) => {
        console.log(results);
        res.render('userSingle', {
          items: results,
          id: id
        });

      });
    });

  } else {
    res.redirect('/user-login');

  }


});


router.get('/', (req, res, next) => {

  var useerListingInfo;
  var result = {};

  // MongoClient.connect(url, (err, db) => {
  //     var cursor = db.collection('users');
  //     cursor.find({
  //         "_id": objectId(id)
  //     }).toArray((err, results) => {
  //         console.log(JSON.stringify(results) + "pooop");

  //         useerListingInfo = results;
  //         console.log(useerListingInfo.email);

  //         for (var i = 0; i < useerListingInfo.length; i++) {
  //             console.log(useerListingInfo[i].userInfo);
  //             result = useerListingInfo[i].userInfo;
  //         }

  //         //result
  //         console.log(JSON.stringify(result) + "poooop1");

  //     });
  // });


  if (req.isAuthenticated()) {
    if (req.session.passport.user.userGroup === 'user') {
      //route for admin

      var resultsArray = [];
      var id = req.session.passport.user.userId;
      var currentUser = req.user;
      console.log(JSON.stringify(currentUser._id) + "currentUser");

      if (typeof currentUser.userInfo[0] !== "undefined") {
        savedPropoptions1 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + result[0] + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions1, function (error, response, body1) {
          if (error) throw new Error(error);
          body1 = JSON.parse(body1);

          userData1 = body1;

        });
      }
      if (typeof currentUser.userInfo[1] !== "undefined") {
        savedPropoptions2 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[1].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions2, function (error, response, body2) {
          if (error) throw new Error(error);
          body2 = JSON.parse(body2);

          userData2 = body2;

        });
      }
      if (typeof currentUser.userInfo[2] !== "undefined") {
        savedPropoptions3 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[2].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions3, function (error, response, body3) {
          if (error) throw new Error(error);
          body3 = JSON.parse(body3);

          userData3 = body3;

        });
      }

      if (typeof currentUser.userInfo[3] !== "undefined") {
        savedPropoptions4 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[3].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions4, function (error, response, body4) {
          if (error) throw new Error(error);
          body4 = JSON.parse(body4);

          userData4 = body4;

        });
      }

      if (typeof currentUser.userInfo[4] !== "undefined") {
        savedPropoptions5 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[4].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions5, function (error, response, body5) {
          if (error) throw new Error(error);
          body5 = JSON.parse(body5);

          userData5 = body5;

        });
      }

      if (typeof currentUser.userInfo[5] !== "undefined") {
        savedPropoptions6 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[5].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions6, function (error, response, body6) {
          if (error) throw new Error(error);
          body6 = JSON.parse(body6);

          userData6 = body6;

        });
      }

      if (typeof currentUser.userInfo[6] !== "undefined") {
        savedPropoptions7 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[6].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions7, function (error, response, body7) {
          if (error) throw new Error(error);
          body7 = JSON.parse(body7);

          userData7 = body7;

        });
      }

      if (typeof currentUser.userInfo[7] !== "undefined") {
        savedPropoptions8 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[7].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions8, function (error, response, body8) {
          if (error) throw new Error(error);
          body8 = JSON.parse(body8);

          userData8 = body8;

        });
      }

      if (typeof currentUser.userInfo[8] !== "undefined") {
        savedPropoptions9 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[8].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions9, function (error, response, body9) {
          if (error) throw new Error(error);
          body9 = JSON.parse(body9);

          userData9 = body9;

        });
      }

      if (typeof currentUser.userInfo[9] !== "undefined") {
        savedPropoptions10 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[9].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions10, function (error, response, body10) {
          if (error) throw new Error(error);
          body10 = JSON.parse(body10);

          userData10 = body10;

        });
      }

      if (typeof currentUser.userInfo[10] !== "undefined") {
        savedPropoptions11 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[10].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions11, function (error, response, body11) {
          if (error) throw new Error(error);
          body11 = JSON.parse(body11);

          userData11 = body11;

        });
      }

      if (typeof currentUser.userInfo[11] !== "undefined") {
        savedPropoptions12 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[11].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions12, function (error, response, body12) {
          if (error) throw new Error(error);
          body12 = JSON.parse(body12);

          userData12 = body12;

        });
      }


      if (typeof currentUser.userInfo[12] !== "undefined") {
        savedPropoptions13 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[12].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions13, function (error, response, body13) {
          if (error) throw new Error(error);
          body13 = JSON.parse(body13);

          userData13 = body13;

        });
      }


      if (typeof currentUser.userInfo[13] !== "undefined") {
        savedPropoptions14 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[13].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions14, function (error, response, body14) {
          if (error) throw new Error(error);
          body14 = JSON.parse(body14);

          userData14 = body14;

        });
      }


      if (typeof currentUser.userInfo[14] !== "undefined") {
        savedPropoptions15 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[14].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions15, function (error, response, body15) {
          if (error) throw new Error(error);
          body15 = JSON.parse(body15);

          userData15 = body15;

        });
      }


      if (typeof currentUser.userInfo[15] !== "undefined") {
        savedPropoptions16 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[15].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions16, function (error, response, body16) {
          if (error) throw new Error(error);
          body16 = JSON.parse(body16);

          userData16 = body16;

        });
      }


      if (typeof currentUser.userInfo[16] !== "undefined") {
        savedPropoptions17 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[16].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions17, function (error, response, body17) {
          if (error) throw new Error(error);
          body17 = JSON.parse(body12);

          userData17 = body17;

        });
      }


      if (typeof currentUser.userInfo[17] !== "undefined") {
        savedPropoptions18 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[17].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions18, function (error, response, body18) {
          if (error) throw new Error(error);
          body18 = JSON.parse(body18);

          userData18 = body18;

        });
      }


      if (typeof currentUser.userInfo[18] !== "undefined") {
        savedPropoptions19 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[18].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions19, function (error, response, body19) {
          if (error) throw new Error(error);
          body19 = JSON.parse(body19);

          userData19 = body19;

        });
      }


      if (typeof currentUser.userInfo[19] !== "undefined") {
        savedPropoptions20 = {
          method: 'GET',
          url: 'https://sparkapi.com/Reso/OData/Property%28%27' + currentUser.userInfo[19].description + '%27%29',
          qs: {

            '$expand': 'CustomFields,Media'

          },
          headers: {
            'Postman-Token': '2a704d86-7087-449d-ab40-0bd90e6eb1a3',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            Authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
          }
        };

        request(savedPropoptions20, function (error, response, body20) {
          if (error) throw new Error(error);
          body20 = JSON.parse(body20);

          userData20 = body20;

        });
      }


      var userDataTotal = {
        userData1,
        userData2,
        userData3,
        userData4,
        userData5,
        userData6,
        userData7,
        userData8,
        userData9,
        userData10,
        userData11,
        userData12,
        userData13,
        userData14,
        userData15,
        userData16,
        userData17,
        userData18,
        userData19,
        userData20
      };



      MongoClient.connect(url, (err, db) => {
        var cursor = db.collection('users');
        cursor.find({
          "_id": objectId(id)
        }).toArray((err, results) => {
          console.log(JSON.stringify(results.userInfo) + "pooop");

          res.render('user', {
            items: results,
            id: id,
            curentUser: currentUser,
            savedPropoptions1: userDataTotal

          });

        });
      });
    } else {
      //rote for non-admin
      res.redirect('/user-login');
    }
  } else {
    res.redirect('/user-login');
  }

});





module.exports = router;