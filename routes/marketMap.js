var express = require('express');
var request = require('request');
var Content = require('../models/content');
var router = express.Router();


var smugglerData1;
var smugglerData2;
var smugglerData3;
var smugglerData4;
var smugglerData5;
var smugglerData6;

var centralCoreData1;
var centralCoreData2;
var centralCoreData3;
var centralCoreData4;
var centralCoreData5;
var centralCoreData6;

var westEndData1;
var westEndData2;
var westEndData3;
var westEndData4;
var westEndData5;
var westEndData6;

var eastAspenData1;
var eastAspenData2;
var eastAspenData3;
var eastAspenData4;
var eastAspenData5;
var eastAspenData6;

var redMtnData1;
var redMtnData2;
var redMtnData3;
var redMtnData4;
var redMtnData5;
var redMtnData6;

var westAspenData1;
var westAspenData2;
var westAspenData3;
var westAspenData4;
var westAspenData5;
var westAspenData6;

var mclainFlatsData1;
var mclainFlatsData2;
var mclainFlatsData3;
var mclainFlatsData4;
var mclainFlatsData5;
var mclainFlatsData6;




var snowmassVillageData1;
var snowmassVillageData2;
var snowmassVillageData3;
var snowmassVillageData4;
var snowmassVillageData5;
var snowmassVillageData6;



var brushCreekData1;
var brushCreekData2;
var brushCreekData3;
var brushCreekData4;
var brushCreekData5;
var brushCreekData6;

var woodyCreekData1;
var woodyCreekData2;
var woodyCreekData3;
var woodyCreekData4;
var woodyCreekData5;
var woodyCreekData6;

var oldSnowmassData1;
var oldSnowmassData2;
var oldSnowmassData3;
var oldSnowmassData4;
var oldSnowmassData5;
var oldSnowmassData6;

var basaltProperData1;
var basaltProperData2;
var basaltProperData3;
var basaltProperData4;
var basaltProperData5;
var basaltProperData6;


var elJebelData1;
var elJebelData2;
var elJebelData3;
var elJebelData4;
var elJebelData5;
var elJebelData6;

var carbondaleProperData1;
var carbondaleProperData2;
var carbondaleProperData3;
var carbondaleProperData4;
var carbondaleProperData5;
var carbondaleProperData6;
/* GET home page. */

router.get('/', function (req, res, next) {

    APICalls();


    res.render("marketMap", {
        smugglerData1: smugglerData1,
        smugglerData2: smugglerData2,
        smugglerData3: smugglerData3,
        smugglerData4: smugglerData4,
        smugglerData5: smugglerData5,
        smugglerData6: smugglerData6,
        centralCoreData1: centralCoreData1,
        centralCoreData2: centralCoreData2,
        centralCoreData3: centralCoreData3,
        centralCoreData4: centralCoreData4,
        centralCoreData5: centralCoreData5,
        centralCoreData6: centralCoreData6,
        westEndData1: westEndData1,
        westEndData2: westEndData2,
        westEndData3: westEndData3,
        westEndData4: westEndData4,
        westEndData5: westEndData5,
        westEndData6: westEndData6,
        eastAspenData1: eastAspenData1,
        eastAspenData2: eastAspenData2,
        eastAspenData3: eastAspenData3,
        eastAspenData4: eastAspenData4,
        eastAspenData5: eastAspenData5,
        eastAspenData6: eastAspenData6,
        redMtnData1: redMtnData1,
        redMtnData2: redMtnData2,
        redMtnData3: redMtnData3,
        redMtnData4: redMtnData4,
        redMtnData5: redMtnData5,
        redMtnData6: redMtnData6,
        westAspenData1: westAspenData1,
        westAspenData2: westAspenData2,
        westAspenData3: westAspenData3,
        westAspenData4: westAspenData4,
        westAspenData5: westAspenData5,
        westAspenData6: westAspenData6,
        mclainFlatsData1: mclainFlatsData1,
        mclainFlatsData2: mclainFlatsData2,
        mclainFlatsData3: mclainFlatsData3,
        mclainFlatsData4: mclainFlatsData4,
        mclainFlatsData5: mclainFlatsData5,
        mclainFlatsData6: mclainFlatsData6,
        snowmassVillageData1: snowmassVillageData1,
        snowmassVillageData2: snowmassVillageData2,
        snowmassVillageData3: snowmassVillageData3,
        snowmassVillageData4: snowmassVillageData4,
        snowmassVillageData5: snowmassVillageData5,
        snowmassVillageData6: snowmassVillageData6,
        brushCreekData1: brushCreekData1,
        brushCreekData2: brushCreekData2,
        brushCreekData3: brushCreekData3,
        brushCreekData4: brushCreekData4,
        brushCreekData5: brushCreekData5,
        brushCreekData6: brushCreekData6,
        woodyCreekData1: woodyCreekData1,
        woodyCreekData2: woodyCreekData2,
        woodyCreekData3: woodyCreekData3,
        woodyCreekData4: woodyCreekData4,
        woodyCreekData5: woodyCreekData5,
        woodyCreekData6: woodyCreekData6,
        oldSnowmassData1: oldSnowmassData1,
        oldSnowmassData2: oldSnowmassData2,
        oldSnowmassData3: oldSnowmassData3,
        oldSnowmassData4: oldSnowmassData4,
        oldSnowmassData5: oldSnowmassData5,
        oldSnowmassData6: oldSnowmassData6,
        basaltProperData1: basaltProperData1,
        basaltProperData2: basaltProperData2,
        basaltProperData3: basaltProperData3,
        basaltProperData4: basaltProperData4,
        basaltProperData5: basaltProperData5,
        basaltProperData6: basaltProperData6,
        elJebelData1: elJebelData1,
        elJebelData2: elJebelData2,
        elJebelData3: elJebelData3,
        elJebelData4: elJebelData4,
        elJebelData5: elJebelData5,
        elJebelData6: elJebelData6,
        carbondaleProperData1: carbondaleProperData1,
        carbondaleProperData2: carbondaleProperData2,
        carbondaleProperData3: carbondaleProperData3,
        carbondaleProperData4: carbondaleProperData4,
        carbondaleProperData5: carbondaleProperData5,
        carbondaleProperData6: carbondaleProperData6,


    });

});

//ACTUALL API CALL
function APICalls(callback1, callback2, callback3, callback4, callback5) {

    var smugglerOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Smuggler',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(smugglerOptions1, function (error, response, body1) {
        if (error) throw new Error(error);
        body1 = JSON.parse(body1);
        console.log("body1:" + body1.D.Results);
        smugglerData1 = body1.D.Results;

    });

    var smugglerOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Smuggler',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(smugglerOptions2, function (error, response, body2) {
        if (error) throw new Error(error);
        body2 = JSON.parse(body2);
        console.log("body2:" + JSON.stringify(body2.D.Results));
        smugglerData2 = body2.D.Results;

    });

    var smugglerOptions3 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Smuggler',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(smugglerOptions3, function (error, response, body3) {
        if (error) throw new Error(error);
        body3 = JSON.parse(body3);
        console.log("body3:" + JSON.stringify(body3.D.Results));
        smugglerData3 = body3.D.Results;

    });

    var smugglerOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Smuggler',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(smugglerOptions4, function (error, response, body4) {
        if (error) throw new Error(error);
        body4 = JSON.parse(body4);
        console.log("body3:" + JSON.stringify(body4.D.Results));
        smugglerData4 = body4.D.Results;

    });

    var smugglerOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Smuggler',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(smugglerOptions5, function (error, response, body5) {
        if (error) throw new Error(error);
        body5 = JSON.parse(body5);
        console.log("body5:" + JSON.stringify(body5.D.Results));
        smugglerData5 = body5.D.Results;

    });

    var smugglerOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Smuggler',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(smugglerOptions6, function (error, response, body6) {
        if (error) throw new Error(error);
        body6 = JSON.parse(body6);
        console.log("body6:" + JSON.stringify(body6.D.Results));
        smugglerData6 = body6.D.Results;

    });

    var centralCoreOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions1, function (error, response, centralCorebody1) {
        if (error) throw new Error(error);
        centralCorebody1 = JSON.parse(centralCorebody1);
        console.log("body6:" + JSON.stringify(centralCorebody1.D.Results));
        centralCoreData1 = centralCorebody1.D.Results;

    });

    var centralCoreOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions2, function (error, response, centralCorebody2) {
        if (error) throw new Error(error);
        centralCorebody2 = JSON.parse(centralCorebody2);
        console.log("body2:" + JSON.stringify(centralCorebody2.D.Results));
        centralCoreData2 = centralCorebody2.D.Results;

    });

    var centralCoreOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions3, function (error, response, centralCorebody3) {
        if (error) throw new Error(error);
        centralCorebody3 = JSON.parse(centralCorebody3);
        console.log("body3:" + JSON.stringify(centralCorebody3.D.Results));
        centralCoreData3 = centralCorebody3.D.Results;

    });

    var centralCoreOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions4, function (error, response, centralCorebody4) {
        if (error) throw new Error(error);
        centralCorebody4 = JSON.parse(centralCorebody4);
        console.log("body4:" + JSON.stringify(centralCorebody4.D.Results));
        centralCoreData4 = centralCorebody4.D.Results;

    });

    var centralCoreOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions5, function (error, response, centralCorebody5) {
        if (error) throw new Error(error);
        centralCorebody5 = JSON.parse(centralCorebody5);
        console.log("body5:" + JSON.stringify(centralCorebody5.D.Results));
        centralCoreData5 = centralCorebody5.D.Results;

    });

    var centralCoreOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Central Core',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(centralCoreOptions6, function (error, response, centralCorebody6) {
        if (error) throw new Error(error);
        centralCorebody6 = JSON.parse(centralCorebody6);
        console.log("body6:" + JSON.stringify(centralCorebody6.D.Results));
        centralCoreData6 = centralCorebody6.D.Results;

    });


    var westEndOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West End',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(westEndOptions1, function (error, response, westEnd1) {
        if (error) throw new Error(error);
        westEnd1 = JSON.parse(westEnd1);
        console.log("westEnd1:" + westEnd1.D.Results);
        westEndData1 = westEnd1.D.Results;

    });

    var westEndOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West End',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(westEndOptions2, function (error, response, westEnd2) {
        if (error) throw new Error(error);
        westEnd2 = JSON.parse(westEnd2);
        console.log("westEnd2:" + JSON.stringify(westEnd2.D.Results));
        westEndData2 = westEnd2.D.Results;

    });

    var westEndOptions3 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West End',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(westEndOptions3, function (error, response, westEnd3) {
        if (error) throw new Error(error);
        westEnd3 = JSON.parse(westEnd3);
        console.log("body3:" + JSON.stringify(westEnd3.D.Results));
        westEndData3 = westEnd3.D.Results;

    });

    var westEndOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West End',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westEndOptions4, function (error, response, westEnd4) {
        if (error) throw new Error(error);
        westEnd4 = JSON.parse(westEnd4);
        console.log("westEnd3:" + JSON.stringify(westEnd4.D.Results));
        westEndData4 = westEnd4.D.Results;

    });

    var westEndOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West End',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westEndOptions5, function (error, response, westEnd5) {
        if (error) throw new Error(error);
        westEnd5 = JSON.parse(westEnd5);
        console.log("body5:" + JSON.stringify(westEnd5.D.Results));
        westEndData5 = westEnd5.D.Results;

    });

    var westEndOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West End',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westEndOptions6, function (error, response, westEnd6) {
        if (error) throw new Error(error);
        westEnd6 = JSON.parse(westEnd6);
        console.log("body6:" + JSON.stringify(westEnd6.D.Results));
        westEndData6 = westEnd6.D.Results;

    });


    var eastAspenOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-East Aspen',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(eastAspenOptions1, function (error, response, eastAspenbody1) {
        if (error) throw new Error(error);
        eastAspenbody1 = JSON.parse(eastAspenbody1);
        console.log("body6:" + JSON.stringify(eastAspenbody1.D.Results));
        eastAspenData1 = eastAspenbody1.D.Results;

    });

    var eastAspenOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-East Aspen',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(eastAspenOptions2, function (error, response, eastAspenbody2) {
        if (error) throw new Error(error);
        eastAspenbody2 = JSON.parse(eastAspenbody2);
        console.log("body2:" + JSON.stringify(eastAspenbody2.D.Results));
        eastAspenData2 = eastAspenbody2.D.Results;

    });

    var eastAspenOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-East Aspen',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(eastAspenOptions3, function (error, response, eastAspenbody3) {
        if (error) throw new Error(error);
        eastAspenbody3 = JSON.parse(eastAspenbody3);
        console.log("body3:" + JSON.stringify(eastAspenbody3.D.Results));
        eastAspenData3 = eastAspenbody3.D.Results;

    });

    var eastAspenOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-East Aspen',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(eastAspenOptions4, function (error, response, eastAspenbody4) {
        if (error) throw new Error(error);
        eastAspenbody4 = JSON.parse(eastAspenbody4);
        console.log("body4:" + JSON.stringify(eastAspenbody4.D.Results));
        eastAspenData4 = eastAspenbody4.D.Results;

    });

    var eastAspenOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-East Aspen',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(eastAspenOptions5, function (error, response, eastAspenbody5) {
        if (error) throw new Error(error);
        eastAspenbody5 = JSON.parse(eastAspenbody5);
        console.log("body5:" + JSON.stringify(eastAspenbody5.D.Results));
        eastAspenData5 = eastAspenbody5.D.Results;

    });

    var eastAspenOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-East Aspen',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(eastAspenOptions6, function (error, response, eastAspenbody6) {
        if (error) throw new Error(error);
        eastAspenbody6 = JSON.parse(eastAspenbody6);
        console.log("body6:" + JSON.stringify(eastAspenbody6.D.Results));
        eastAspenData6 = eastAspenbody6.D.Results;

    });

    var redMtnOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Red Mountain',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(redMtnOptions1, function (error, response, redMtnbody1) {
        if (error) throw new Error(error);
        redMtnbody1 = JSON.parse(redMtnbody1);
        console.log("body6:" + JSON.stringify(redMtnbody1.D.Results));
        redMtnData1 = redMtnbody1.D.Results;

    });

    var redMtnOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Red Mountain',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(redMtnOptions2, function (error, response, redMtnbody2) {
        if (error) throw new Error(error);
        redMtnbody2 = JSON.parse(redMtnbody2);
        console.log("body2:" + JSON.stringify(redMtnbody2.D.Results));
        redMtnData2 = redMtnbody2.D.Results;

    });

    var redMtnOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Red Mountain',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(redMtnOptions3, function (error, response, redMtnbody3) {
        if (error) throw new Error(error);
        redMtnbody3 = JSON.parse(redMtnbody3);
        console.log("body3:" + JSON.stringify(redMtnbody3.D.Results));
        redMtnData3 = redMtnbody3.D.Results;

    });

    var redMtnOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Red Mountain',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(redMtnOptions4, function (error, response, redMtnbody4) {
        if (error) throw new Error(error);
        redMtnbody4 = JSON.parse(redMtnbody4);
        console.log("body4:" + JSON.stringify(redMtnbody4.D.Results));
        redMtnData4 = redMtnbody4.D.Results;

    });

    var redMtnOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Red Mountain',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(redMtnOptions5, function (error, response, redMtnbody5) {
        if (error) throw new Error(error);
        redMtnbody5 = JSON.parse(redMtnbody5);
        console.log("body5:" + JSON.stringify(redMtnbody5.D.Results));
        redMtnData5 = redMtnbody5.D.Results;

    });

    var redMtnOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-Red Mountain',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(redMtnOptions6, function (error, response, redMtnbody6) {
        if (error) throw new Error(error);
        redMtnbody6 = JSON.parse(redMtnbody6);
        console.log("body6:" + JSON.stringify(redMtnbody6.D.Results));
        redMtnData6 = redMtnbody6.D.Results;

    });

    var westAspenOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West Aspen',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westAspenOptions1, function (error, response, westAspenbody1) {
        if (error) throw new Error(error);
        westAspenbody1 = JSON.parse(westAspenbody1);
        console.log("body6:" + JSON.stringify(westAspenbody1.D.Results));
        westAspenData1 = westAspenbody1.D.Results;

    });

    var westAspenOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West Aspen',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westAspenOptions2, function (error, response, westAspenbody2) {
        if (error) throw new Error(error);
        westAspenbody2 = JSON.parse(westAspenbody2);
        console.log("body2:" + JSON.stringify(westAspenbody2.D.Results));
        westAspenData2 = westAspenbody2.D.Results;

    });

    var westAspenOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West Aspen',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westAspenOptions3, function (error, response, westAspenbody3) {
        if (error) throw new Error(error);
        westAspenbody3 = JSON.parse(westAspenbody3);
        console.log("body3:" + JSON.stringify(westAspenbody3.D.Results));
        westAspenData3 = westAspenbody3.D.Results;

    });

    var westAspenOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West Aspen',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westAspenOptions4, function (error, response, westAspenbody4) {
        if (error) throw new Error(error);
        westAspenbody4 = JSON.parse(westAspenbody4);
        console.log("body4:" + JSON.stringify(westAspenbody4.D.Results));
        westAspenData4 = westAspenbody4.D.Results;

    });

    var westAspenOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West Aspen',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(westAspenOptions5, function (error, response, westAspenbody5) {
        if (error) throw new Error(error);
        westAspenbody5 = JSON.parse(westAspenbody5);
        console.log("body5:" + JSON.stringify(westAspenbody5.D.Results));
        westAspenData5 = westAspenbody5.D.Results;

    });

    var westAspenOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-West Aspen',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(westAspenOptions6, function (error, response, westAspenbody6) {
        if (error) throw new Error(error);
        westAspenbody6 = JSON.parse(westAspenbody6);
        console.log("body6:" + JSON.stringify(westAspenbody6.D.Results));
        westAspenData6 = westAspenbody6.D.Results;

    });
    var mclainFlatsOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-McLain Flats',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(mclainFlatsOptions1, function (error, response, mclainFlatsbody1) {
        if (error) throw new Error(error);
        mclainFlatsbody1 = JSON.parse(mclainFlatsbody1);
        console.log("body6:" + JSON.stringify(mclainFlatsbody1.D.Results));
        mclainFlatsData1 = mclainFlatsbody1.D.Results;

    });

    var mclainFlatsOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-McLain Flats',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(mclainFlatsOptions2, function (error, response, mclainFlatsbody2) {
        if (error) throw new Error(error);
        mclainFlatsbody2 = JSON.parse(mclainFlatsbody2);
        console.log("body2:" + JSON.stringify(mclainFlatsbody2.D.Results));
        mclainFlatsData2 = mclainFlatsbody2.D.Results;

    });

    var mclainFlatsOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-McLain Flats',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(mclainFlatsOptions3, function (error, response, mclainFlatsbody3) {
        if (error) throw new Error(error);
        mclainFlatsbody3 = JSON.parse(mclainFlatsbody3);
        console.log("body3:" + JSON.stringify(mclainFlatsbody3.D.Results));
        mclainFlatsData3 = mclainFlatsbody3.D.Results;

    });

    var mclainFlatsOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-McLain Flats',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(mclainFlatsOptions4, function (error, response, mclainFlatsbody4) {
        if (error) throw new Error(error);
        mclainFlatsbody4 = JSON.parse(mclainFlatsbody4);
        console.log("body4:" + JSON.stringify(mclainFlatsbody4.D.Results));
        mclainFlatsData4 = mclainFlatsbody4.D.Results;

    });

    var mclainFlatsOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-McLain Flats',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(mclainFlatsOptions5, function (error, response, mclainFlatsbody5) {
        if (error) throw new Error(error);
        mclainFlatsbody5 = JSON.parse(mclainFlatsbody5);
        console.log("body5:" + JSON.stringify(mclainFlatsbody5.D.Results));
        mclainFlatsData5 = mclainFlatsbody5.D.Results;

    });

    var mclainFlatsOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '01-McLain Flats',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(mclainFlatsOptions6, function (error, response, mclainFlatsbody6) {
        if (error) throw new Error(error);
        mclainFlatsbody6 = JSON.parse(mclainFlatsbody6);
        console.log("body6:" + JSON.stringify(mclainFlatsbody6.D.Results));
        mclainFlatsData6 = mclainFlatsbody6.D.Results;

    });



    var snowmassVillageOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(snowmassVillageOptions1, function (error, response, snowmassVillagebody1) {
        if (error) throw new Error(error);
        snowmassVillagebody1 = JSON.parse(snowmassVillagebody1);
        console.log("body6:" + JSON.stringify(snowmassVillagebody1.D.Results));
        snowmassVillageData1 = snowmassVillagebody1.D.Results;

    });

    var snowmassVillageOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(snowmassVillageOptions2, function (error, response, snowmassVillagebody2) {
        if (error) throw new Error(error);
        snowmassVillagebody2 = JSON.parse(snowmassVillagebody2);
        console.log("body2:" + JSON.stringify(snowmassVillagebody2.D.Results));
        snowmassVillageData2 = snowmassVillagebody2.D.Results;

    });

    var snowmassVillageOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(snowmassVillageOptions3, function (error, response, snowmassVillagebody3) {
        if (error) throw new Error(error);
        snowmassVillagebody3 = JSON.parse(snowmassVillagebody3);
        console.log("body3:" + JSON.stringify(snowmassVillagebody3.D.Results));
        snowmassVillageData3 = snowmassVillagebody3.D.Results;

    });

    var snowmassVillageOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(snowmassVillageOptions4, function (error, response, snowmassVillagebody4) {
        if (error) throw new Error(error);
        snowmassVillagebody4 = JSON.parse(snowmassVillagebody4);
        console.log("body4:" + JSON.stringify(snowmassVillagebody4.D.Results));
        snowmassVillageData4 = snowmassVillagebody4.D.Results;

    });

    var snowmassVillageOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(snowmassVillageOptions5, function (error, response, snowmassVillagebody5) {
        if (error) throw new Error(error);
        snowmassVillagebody5 = JSON.parse(snowmassVillagebody5);
        console.log("body5:" + JSON.stringify(snowmassVillagebody5.D.Results));
        snowmassVillageData5 = snowmassVillagebody5.D.Results;

    });

    var snowmassVillageOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(snowmassVillageOptions6, function (error, response, snowmassVillagebody6) {
        if (error) throw new Error(error);
        snowmassVillagebody6 = JSON.parse(snowmassVillagebody6);
        console.log("body6:" + JSON.stringify(snowmassVillagebody6.D.Results));
        snowmassVillageData6 = snowmassVillagebody6.D.Results;

    });
    var brushCreekOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(brushCreekOptions1, function (error, response, brushCreekbody1) {
        if (error) throw new Error(error);
        brushCreekbody1 = JSON.parse(brushCreekbody1);
        console.log("body6:" + JSON.stringify(brushCreekbody1.D.Results));
        brushCreekData1 = brushCreekbody1.D.Results;

    });

    var brushCreekOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Snowmass Village',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(brushCreekOptions2, function (error, response, brushCreekbody2) {
        if (error) throw new Error(error);
        brushCreekbody2 = JSON.parse(brushCreekbody2);
        console.log("body2:" + JSON.stringify(brushCreekbody2.D.Results));
        brushCreekData2 = brushCreekbody2.D.Results;

    });

    var brushCreekOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(brushCreekOptions3, function (error, response, brushCreekbody3) {
        if (error) throw new Error(error);
        brushCreekbody3 = JSON.parse(brushCreekbody3);
        console.log("body3:" + JSON.stringify(brushCreekbody3.D.Results));
        brushCreekData3 = brushCreekbody3.D.Results;

    });

    var brushCreekOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(brushCreekOptions4, function (error, response, brushCreekbody4) {
        if (error) throw new Error(error);
        brushCreekbody4 = JSON.parse(brushCreekbody4);
        console.log("body4:" + JSON.stringify(brushCreekbody4.D.Results));
        brushCreekData4 = brushCreekbody4.D.Results;

    });

    var brushCreekOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(brushCreekOptions5, function (error, response, brushCreekbody5) {
        if (error) throw new Error(error);
        brushCreekbody5 = JSON.parse(brushCreekbody5);
        console.log("body5:" + JSON.stringify(brushCreekbody5.D.Results));
        brushCreekData5 = brushCreekbody5.D.Results;

    });

    var brushCreekOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '02-Brush Creek Village',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(brushCreekOptions6, function (error, response, brushCreekbody6) {
        if (error) throw new Error(error);
        brushCreekbody6 = JSON.parse(brushCreekbody6);
        console.log("body6:" + JSON.stringify(brushCreekbody6.D.Results));
        brushCreekData6 = brushCreekbody6.D.Results;

    });

    var woodyCreekOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(woodyCreekOptions1, function (error, response, woodyCreekbody1) {
        if (error) throw new Error(error);
        woodyCreekbody1 = JSON.parse(woodyCreekbody1);
        console.log("body6:" + JSON.stringify(woodyCreekbody1.D.Results));
        woodyCreekData1 = woodyCreekbody1.D.Results;

    });

    var woodyCreekOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(woodyCreekOptions2, function (error, response, woodyCreekbody2) {
        if (error) throw new Error(error);
        woodyCreekbody2 = JSON.parse(woodyCreekbody2);
        console.log("body2:" + JSON.stringify(woodyCreekbody2.D.Results));
        woodyCreekData2 = woodyCreekbody2.D.Results;

    });

    var woodyCreekOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(woodyCreekOptions3, function (error, response, woodyCreekbody3) {
        if (error) throw new Error(error);
        woodyCreekbody3 = JSON.parse(woodyCreekbody3);
        console.log("body3:" + JSON.stringify(woodyCreekbody3.D.Results));
        woodyCreekData3 = woodyCreekbody3.D.Results;

    });

    var woodyCreekOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(woodyCreekOptions4, function (error, response, woodyCreekbody4) {
        if (error) throw new Error(error);
        woodyCreekbody4 = JSON.parse(woodyCreekbody4);
        console.log("body4:" + JSON.stringify(woodyCreekbody4.D.Results));
        woodyCreekData4 = woodyCreekbody4.D.Results;

    });

    var woodyCreekOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(woodyCreekOptions5, function (error, response, woodyCreekbody5) {
        if (error) throw new Error(error);
        woodyCreekbody5 = JSON.parse(woodyCreekbody5);
        console.log("body5:" + JSON.stringify(woodyCreekbody5.D.Results));
        woodyCreekData5 = woodyCreekbody5.D.Results;

    });

    var woodyCreekOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '03-Woody Creek',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(woodyCreekOptions6, function (error, response, woodyCreekbody6) {
        if (error) throw new Error(error);
        woodyCreekbody6 = JSON.parse(woodyCreekbody6);
        console.log("body6:" + JSON.stringify(woodyCreekbody6.D.Results));
        woodyCreekData6 = woodyCreekbody6.D.Results;

    });

    var oldSnowmassOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(oldSnowmassOptions1, function (error, response, oldSnowmassbody1) {
        if (error) throw new Error(error);
        oldSnowmassbody1 = JSON.parse(oldSnowmassbody1);
        console.log("body6:" + JSON.stringify(oldSnowmassbody1.D.Results));
        oldSnowmassData1 = oldSnowmassbody1.D.Results;

    });

    var oldSnowmassOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(oldSnowmassOptions2, function (error, response, oldSnowmassbody2) {
        if (error) throw new Error(error);
        oldSnowmassbody2 = JSON.parse(oldSnowmassbody2);
        console.log("body2:" + JSON.stringify(oldSnowmassbody2.D.Results));
        oldSnowmassData2 = oldSnowmassbody2.D.Results;

    });

    var oldSnowmassOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(oldSnowmassOptions3, function (error, response, oldSnowmassbody3) {
        if (error) throw new Error(error);
        oldSnowmassbody3 = JSON.parse(oldSnowmassbody3);
        console.log("body3:" + JSON.stringify(oldSnowmassbody3.D.Results));
        oldSnowmassData3 = oldSnowmassbody3.D.Results;

    });

    var oldSnowmassOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(oldSnowmassOptions4, function (error, response, oldSnowmassbody4) {
        if (error) throw new Error(error);
        oldSnowmassbody4 = JSON.parse(oldSnowmassbody4);
        console.log("body4:" + JSON.stringify(oldSnowmassbody4.D.Results));
        oldSnowmassData4 = oldSnowmassbody4.D.Results;

    });

    var oldSnowmassOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(oldSnowmassOptions5, function (error, response, oldSnowmassbody5) {
        if (error) throw new Error(error);
        oldSnowmassbody5 = JSON.parse(oldSnowmassbody5);
        console.log("body5:" + JSON.stringify(oldSnowmassbody5.D.Results));
        oldSnowmassData5 = oldSnowmassbody5.D.Results;

    });

    var oldSnowmassOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '04-Old Snowmass',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(oldSnowmassOptions6, function (error, response, oldSnowmassbody6) {
        if (error) throw new Error(error);
        oldSnowmassbody6 = JSON.parse(oldSnowmassbody6);
        console.log("body6:" + JSON.stringify(oldSnowmassbody6.D.Results));
        oldSnowmassData6 = oldSnowmassbody6.D.Results;

    });



    var basaltProperOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(basaltProperOptions1, function (error, response, basaltProperbody1) {
        if (error) throw new Error(error);
        basaltProperbody1 = JSON.parse(basaltProperbody1);
        console.log("body6:" + JSON.stringify(basaltProperbody1.D.Results));
        basaltProperData1 = basaltProperbody1.D.Results;

    });

    var basaltProperOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(basaltProperOptions2, function (error, response, basaltProperbody2) {
        if (error) throw new Error(error);
        basaltProperbody2 = JSON.parse(basaltProperbody2);
        console.log("body2:" + JSON.stringify(basaltProperbody2.D.Results));
        basaltProperData2 = basaltProperbody2.D.Results;

    });

    var basaltProperOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(basaltProperOptions3, function (error, response, basaltProperbody3) {
        if (error) throw new Error(error);
        basaltProperbody3 = JSON.parse(basaltProperbody3);
        console.log("body3:" + JSON.stringify(basaltProperbody3.D.Results));
        basaltProperData3 = basaltProperbody3.D.Results;

    });

    var basaltProperOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(basaltProperOptions4, function (error, response, basaltProperbody4) {
        if (error) throw new Error(error);
        basaltProperbody4 = JSON.parse(basaltProperbody4);
        console.log("body4:" + JSON.stringify(basaltProperbody4.D.Results));
        basaltProperData4 = basaltProperbody4.D.Results;

    });

    var basaltProperOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(basaltProperOptions5, function (error, response, basaltProperbody5) {
        if (error) throw new Error(error);
        basaltProperbody5 = JSON.parse(basaltProperbody5);
        console.log("body5:" + JSON.stringify(basaltProperbody5.D.Results));
        basaltProperData5 = basaltProperbody5.D.Results;

    });

    var basaltProperOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-Basalt Proper',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(basaltProperOptions6, function (error, response, basaltProperbody6) {
        if (error) throw new Error(error);
        basaltProperbody6 = JSON.parse(basaltProperbody6);
        console.log("body6:" + JSON.stringify(basaltProperbody6.D.Results));
        basaltProperData6 = basaltProperbody6.D.Results;

    });



    var elJebelOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    request(elJebelOptions1, function (error, response, elJebelbody1) {
        if (error) throw new Error(error);
        elJebelbody1 = JSON.parse(elJebelbody1);
        console.log("body6:" + JSON.stringify(elJebelbody1.D.Results));
        elJebelData1 = elJebelbody1.D.Results;

    });

    var elJebelOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(elJebelOptions2, function (error, response, elJebelbody2) {
        if (error) throw new Error(error);
        elJebelbody2 = JSON.parse(elJebelbody2);
        console.log("body2:" + JSON.stringify(elJebelbody2.D.Results));
        elJebelData2 = elJebelbody2.D.Results;

    });

    var elJebelOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(elJebelOptions3, function (error, response, elJebelbody3) {
        if (error) throw new Error(error);
        elJebelbody3 = JSON.parse(elJebelbody3);
        console.log("body3:" + JSON.stringify(elJebelbody3.D.Results));
        elJebelData3 = elJebelbody3.D.Results;

    });

    var elJebelOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(elJebelOptions4, function (error, response, elJebelbody4) {
        if (error) throw new Error(error);
        elJebelbody4 = JSON.parse(elJebelbody4);
        console.log("body4:" + JSON.stringify(elJebelbody4.D.Results));
        elJebelData4 = elJebelbody4.D.Results;

    });

    var elJebelOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(elJebelOptions5, function (error, response, elJebelbody5) {
        if (error) throw new Error(error);
        elJebelbody5 = JSON.parse(elJebelbody5);
        console.log("body5:" + JSON.stringify(elJebelbody5.D.Results));
        elJebelData5 = elJebelbody5.D.Results;

    });

    var elJebelOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '05-El Jebel',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(elJebelOptions6, function (error, response, elJebelbody6) {
        if (error) throw new Error(error);
        elJebelbody6 = JSON.parse(elJebelbody6);
        console.log("body6:" + JSON.stringify(elJebelbody6.D.Results));
        elJebelData6 = elJebelbody6.D.Results;

    });

    var carbondaleProperOptions1 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/inventory',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '07-Carbondale Proper',
            Options: 'ActiveListings,NewListings,PendedListings,SoldListings',
            '': ''
        },
        headers: {
            'Postman-Token': '2f1aaa27-6781-4879-9472-7b1a9c55ed11',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(carbondaleProperOptions1, function (error, response, carbondaleProperbody1) {
        if (error) throw new Error(error);
        carbondaleProperbody1 = JSON.parse(carbondaleProperbody1);
        console.log("body6:" + JSON.stringify(carbondaleProperbody1.D.Results));
        carbondaleProperData1 = carbondaleProperbody1.D.Results;

    });

    var carbondaleProperOptions2 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/absorption',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '07-Carbondale Proper',
            Options: 'AbsorptionRate',
            '': ''
        },
        headers: {
            'Postman-Token': '236bdc26-0939-4c26-93d6-bde40d2bad06',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(carbondaleProperOptions2, function (error, response, carbondaleProperbody2) {
        if (error) throw new Error(error);
        carbondaleProperbody2 = JSON.parse(carbondaleProperbody2);
        console.log("body2:" + JSON.stringify(carbondaleProperbody2.D.Results));
        carbondaleProperData2 = carbondaleProperbody2.D.Results;

    });

    var carbondaleProperOptions3 = {
        url: 'https://sparkapi.com/v1/marketstatistics/price',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '07-Carbondale Proper',
            Options: 'ActiveAverageListPrice,NewAverageListPrice,PendedAverageListPrice,SoldAverageListPrice,SoldAverageSoldPrice,ActiveMedianListPrice,NewMedianListPrice,PendedMedianListPrice,SoldMedianListPrice,SoldMedianSoldPrice',
            '': ''
        },
        headers: {
            'Postman-Token': '5be5be1e-d8ed-452f-82da-4bf889cfb8fc',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(carbondaleProperOptions3, function (error, response, carbondaleProperbody3) {
        if (error) throw new Error(error);
        carbondaleProperbody3 = JSON.parse(carbondaleProperbody3);
        console.log("body3:" + JSON.stringify(carbondaleProperbody3.D.Results));
        carbondaleProperData3 = carbondaleProperbody3.D.Results;

    });

    var carbondaleProperOptions4 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/ratio',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '07-Carbondale Proper',
            Options: 'SaleToOriginalListPriceRatio,SaleToListPriceRatio'
        },
        headers: {
            'Postman-Token': '3788992c-d259-4dae-88fd-d4572fb88cde',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(carbondaleProperOptions4, function (error, response, carbondaleProperbody4) {
        if (error) throw new Error(error);
        carbondaleProperbody4 = JSON.parse(carbondaleProperbody4);
        console.log("body4:" + JSON.stringify(carbondaleProperbody4.D.Results));
        carbondaleProperData4 = carbondaleProperbody4.D.Results;

    });

    var carbondaleProperOptions5 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/dom',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '07-Carbondale Proper',
            Options: 'AverageDom,AverageCdom'
        },
        headers: {
            'Postman-Token': '1f41ce93-3a25-45e9-af9c-0517ba2904fa',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };


    request(carbondaleProperOptions5, function (error, response, carbondaleProperbody5) {
        if (error) throw new Error(error);
        carbondaleProperbody5 = JSON.parse(carbondaleProperbody5);
        console.log("body5:" + JSON.stringify(carbondaleProperbody5.D.Results));
        carbondaleProperData5 = carbondaleProperbody5.D.Results;

    });

    var carbondaleProperOptions6 = {
        method: 'GET',
        url: 'https://sparkapi.com/v1/marketstatistics/volume',
        qs: {
            LocationField: 'MLSAreaMinor',
            LocationValue: '07-Carbondale Proper',
            Options: 'ActiveListVolume,NewListVolume,PendedListVolume,SoldListVolume,SoldSaleVolume'
        },
        headers: {
            'Postman-Token': '31953832-e5b9-480a-b1c5-4442b69b9ac0',
            'cache-control': 'no-cache',
            'X-SparkApi-User-Agent': 'BrittanieRockHill',
            Accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };
    request(carbondaleProperOptions6, function (error, response, carbondaleProperbody6) {
        if (error) throw new Error(error);
        carbondaleProperbody6 = JSON.parse(carbondaleProperbody6);
        console.log("body6:" + JSON.stringify(carbondaleProperbody6.D.Results));
        carbondaleProperData6 = carbondaleProperbody6.D.Results;

    });



}



module.exports = router;