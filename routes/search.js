var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('listingRendered');
})

router.post('/', function (req, res, poop) {
    response = {
        minPrice: req.body.minPrice,
        maxPrice: req.body.maxPrice,
        numBed: req.body.numBed,
        numBath: req.body.numBath,
        city: req.body.city,
        neighborhood: req.body.neighborhood

    };

    var options = {
        method: 'GET',
        url: 'https://sparkapi.com/Reso/OData/Property',
        qs: {
            '$filter': 'MlsStatus eq \'Active\' and Zoning eq \'Residential\'',
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

    if (response.minPrice && !response.maxPrice && !response.numBath && !response.numBed && !response.neighborhood) {
        var minPriceURLstring = 'and ListPrice ge ' + response.minPrice;
        ///IF STATMENT HERE THAT CHECKS IF THE RESPONSE DATA IS THERE
        console.log(minPriceURLstring);
        console.log(response.minPrice + ": this is the min price that the api call is getting as a header");
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice ge ' + response.minPrice + ' and Zoning eq \'Residential\'',
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

    } else if (response.minPrice && response.maxPrice && !response.numBath && !response.numBed && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and Zoning eq \'Residential\'',
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
    } else if (response.minPrice && response.maxPrice && response.numBath && !response.numBed && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and Zoning eq \'Residential\'',
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
    } else if (response.minPrice && response.maxPrice && response.numBath && response.numBed && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.maxPrice && !response.numBath && !response.numBed && !response.minPrice && !response.neighborhood) {
        var minPriceURLstring = 'and ListPrice ge ' + response.minPrice;
        ///IF STATMENT HERE THAT CHECKS IF THE RESPONSE DATA IS THERE
        console.log(minPriceURLstring);
        console.log(response.minPrice + ": this is the min price that the api call is getting as a header");
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice le ' + response.maxPrice + ' and Zoning eq \'Residential\'',
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

    } else if (response.maxPrice && response.numBath && !response.numBed && !response.minPrice && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice le ' + response.maxPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and Zoning eq \'Residential\'',
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
    } else if (response.maxPrice && response.numBath && response.numBed && !response.minPrice && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice le ' + response.maxPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.numBath && !response.numBed && !response.minPrice && !response.maxPrice && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and BathroomsTotalInteger ge ' + response.numBath + ' and Zoning eq \'Residential\'',
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
    } else if (response.numBath && response.numBed && !response.minPrice && !response.maxPrice && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and BathroomsTotalInteger ge ' + response.numBath + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.numBath && response.numBed && response.minPrice && !response.maxPrice && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice ge ' + response.minPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.numBed && !response.minPrice && !response.maxPrice && !response.numBath && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.numBed && response.minPrice && !response.maxPrice && !response.numBath && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice ge ' + response.minPrice + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.numBed && response.minPrice && response.maxPrice && !response.numBath && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.minPrice && response.numBath && !response.maxPrice && !response.numBed && !response.neighborhood) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and ListPrice ge ' + response.minPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and Zoning eq \'Residential\'',
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
    } else if (!response.minPrice && response.maxPrice && !response.numBath && response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\'  and ListPrice le ' + response.maxPrice + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.neighborhood && !response.minPrice && !response.maxPrice && !response.numBath && !response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and Zoning eq \'Residential\'',
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
    } else if (response.neighborhood && response.minPrice && !response.maxPrice && !response.numBath && !response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and ListPrice ge ' + response.minPrice + ' and Zoning eq \'Residential\'',
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
    } else if (response.neighborhood && response.minPrice && response.maxPrice && !response.numBath && !response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and Zoning eq \'Residential\'',
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
    } else if (response.neighborhood && response.minPrice && response.maxPrice && response.numBath && !response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and Zoning eq \'Residential\'',
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
    } else if (response.neighborhood && response.minPrice && response.maxPrice && response.numBath && response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.neighborhood && response.minPrice && response.maxPrice && response.numBath && !response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and MLSAreaMinor eq ' + 'and BathroomsTotalInteger ge ' + response.numBath + '\'' + response.neighborhood + '\'' + ' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and Zoning eq \'Residential\'',
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
    } else if (response.neighborhood && response.minPrice && response.maxPrice && !response.numBath && response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else if (response.city && !response.neighborhood && !response.minPrice && !response.maxPrice && !response.numBath && !response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and City eq ' + '\'' + response.city + '\'' + ' and Zoning eq \'Residential\'',
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
    } else if (response.city && response.neighborhood && !response.minPrice && !response.maxPrice && !response.numBath && !response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and City eq ' + '\'' + response.city + '\'' + ' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and Zoning eq \'Residential\'',
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
    } else if (response.city && response.neighborhood && response.minPrice && !response.maxPrice && !response.numBath && !response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\' and City eq ' + '\'' + response.city + '\'' + ' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and ListPrice ge ' + response.minPrice + ' and Zoning eq \'Residential\'',
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
    } else if (response.city && response.neighborhood && response.minPrice && response.maxPrice && !response.numBath && !response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\'' + ' and City eq ' + '\'' + response.city + '\'' + ' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and Zoning eq \'Residential\'',
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
    } else if (response.city && response.neighborhood && response.minPrice && response.maxPrice && response.numBath && response.numBed) {
        options = {
            method: 'GET',
            url: 'https://sparkapi.com/Reso/OData/Property',
            qs: {
                '$filter': 'MlsStatus eq \'Active\'' + ' and City eq ' + '\'' + response.city + '\'' + ' and MLSAreaMinor eq ' + '\'' + response.neighborhood + '\'' + ' and ListPrice ge ' + response.minPrice + ' and ListPrice le ' + response.maxPrice + ' and BathroomsTotalInteger ge ' + response.numBath + ' and BedroomsTotal ge ' + response.numBed + ' and Zoning eq \'Residential\'',
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
    } else {
        options;
    }


    requests(options, function (data) {

        console.log(data + " this is data from back end");
        console.log(JSON.stringify(options.qs) + "these are the url options");
        console.log(data.value + " this is data.value from back end");
        console.log(response.neighborhood + "neighborhood");
        console.log(response.city + "city");
        console.log(data["@odata.nextLink"]);
        var propertyData = data;

        if (data === false) {
            console.log("errrrrooorr");

            res.render('listingRendered', {
                error: "no listings found"
            });
        } else {
            res.render('listingRendered', {
                property: data.value,
                propertyCount: data["@odata.count"],
                nextLink: data["@odata.nextLink"],

            });
        }
    });
});

router.get('/:id', (req, res) => {
    console.log("HIIII");
    console.log('Request Id:', req.params.id);

    // API HEAD INFO WITH KEY AND SUCH

    var ListingKey = req.params.id;

    console.log("hiiii from server");
    var options = {
        method: 'GET',
        url: 'https://sparkapi.com/Reso/OData/Property',
        qs: {
            '$filter': `ListingKey eq \'${ListingKey}\'`,
            '$expand': 'CustomFields,Media'
        },
        headers: {
            'x-sparkapi-user-agent': 'BrittanieRockhill',
            accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    console.log(JSON.stringify(options));

    requests(options, function (data) {

        console.log(data + " this is data from back end");
        console.log(JSON.stringify(options.qs) + "these are the url options");
        console.log(JSON.stringify(data.value) + " this is data.value from back end");

        var propertyData = data;

        if (data === false) {
            console.log("errrrrooorr");

            res.render('listingRendered', {
                error: "no listings found"
            });
        } else {
            res.render('listingSingle', {
                property: data.value,


            });
        }
    });
});

router.post('/next', (req, res) => {
    let nextLink = req.body.nextLink;
    console.log(nextLink);
    var options = {
        method: 'GET',
        url: nextLink,
        qs: {

            '$expand': 'CustomFields,Media'
        },
        headers: {
            'x-sparkapi-user-agent': 'BrittanieRockhill',
            accept: 'application/json',
            authorization: process.env.API_KEY
        }
    };

    console.log(JSON.stringify(options));
    requests(options, function (data) {

        console.log(data + " this is data from back end");
        console.log(JSON.stringify(options.qs) + "these are the url options");
        // console.log(JSON.stringify(data.value) + " this is data.value from back end");
        var propertyData = data;

        if (data === false) {
            console.log("errrrrooorr");

            res.render('listingRendered', {
                error: "no listings found"
            });
        } else {
            res.render('listingRendered', {
                property: data.value,
                propertyCount: data["@odata.count"],
                nextLink: data["@odata.nextLink"],


            });
        }
    });
})


// function setApiOptions(options, callback) {
//     if (req.body.maxPrice) {
//         var options = {
//             method: 'GET',
//             url: 'https://sparkapi.com/Reso/OData/Property',
//             qs: {
//                 '$filter': 'MlsStatus eq \'Active\' and ListPrice le ' + req..maxPrice + 'and Zoning eq \'Residential\'',
//                 '$expand': 'CustomFields,Media',
//                 '$orderby': 'ListPrice desc',
//                 '$count': 'true'
//             },
//             headers: {
//                 'x-sparkapi-user-agent': 'BrittanieRockhill',
//                 accept: 'application/json',
//                 authorization: process.env.API_KEY
//             }
//         };

//     }

// }

//ACTUALL API CALL
function requests(options, callback) {

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var resultsArray = [];
        body = JSON.parse(body);

        // logic used to compare search results with the input from user
        if (!body.value) {
            results = false;
            callback(results);
        } else {
            propertyStuff = body;

            // for (var i = 0; i < results.length; i++) {
            //   console.log(i + "this is the index nimbers ");
            //   resultsArray.push({
            //     directions: results
            //   });
            // };
            callback(propertyStuff);
        };
        // pass back the results to client side

    });
};




module.exports = router;