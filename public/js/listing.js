var coordinates = document.getElementsByClassName('google-Coordinates');
var mapPoint1 = coordinates[0].innerHTML.trim().split(',');
var mapPoint2 = coordinates[1].innerHTML.trim().split(',');
var mapPoint3 = coordinates[2].innerHTML.trim().split(',');
var mapPoint4 = coordinates[3].innerHTML.trim().split(',');
var mapPoint5 = coordinates[4].innerHTML.trim().split(',');
var mapPoint6 = coordinates[5].innerHTML.trim().split(',');
var mapPoint7 = coordinates[6].innerHTML.trim().split(',');
var mapPoint8 = coordinates[7].innerHTML.trim().split(',');
var mapPoint9 = coordinates[8].innerHTML.trim().split(',');
var mapPoint10 = coordinates[9].innerHTML.trim().split(',');

var long1 = parseFloat(mapPoint1[0]);
var lat1 = parseFloat(mapPoint1[1]);

var long2 = parseFloat(mapPoint2[0]);
var lat2 = parseFloat(mapPoint2[1]);

var long3 = parseFloat(mapPoint3[0]);
var lat3 = parseFloat(mapPoint3[1]);

var long4 = parseFloat(mapPoint4[0]);
var lat4 = parseFloat(mapPoint4[1]);


var long5 = parseFloat(mapPoint5[0]);
var lat5 = parseFloat(mapPoint5[1]);

var long6 = parseFloat(mapPoint6[0]);
var lat6 = parseFloat(mapPoint6[1]);

var long7 = parseFloat(mapPoint7[0]);
var lat7 = parseFloat(mapPoint7[1]);

var long8 = parseFloat(mapPoint8[0]);
var lat8 = parseFloat(mapPoint8[1]);

var long9 = parseFloat(mapPoint9[0]);
var lat9 = parseFloat(mapPoint9[1]);

var long10 = parseFloat(mapPoint10[0]);
var lat10 = parseFloat(mapPoint10[1]);
// Initialize and add the map
// Initialize and add the map

var map, popup, Popup;


function initMap() {


    var center = function (arr) {
        var minX, maxX, minY, maxY;
        for (var i = 0; i < arr.length; i++) {
            var x = arr[i][0],
                y = arr[i][1];
            minX = (x < minX || minX == null) ? x : minX;
            maxX = (x > maxX || maxX == null) ? x : maxX;
            minY = (y < minY || minY == null) ? y : minY;
            maxY = (y > maxY || maxY == null) ? y : maxY;
        }
        return [(minX + maxX) / 2, (minY + maxY) / 2];
    };

    var coords = [
        [lat1, long1],
        [lat2, long2],
        [lat3, long3],
        [lat4, long4],
        [lat5, long5],
        [lat6, long6],
        [lat7, long7],
        [lat8, long8],
        [lat9, long9],
        [lat10, long10],
    ];

    var c = center(coords);


    // The location of Uluru
    var uluru = {
        lat: c[0],
        lng: c[1]
    };
    var points1 = {
        lat: lat1,
        lng: long1
    }
    var points2 = {
        lat: lat2,
        lng: long2
    }
    var points3 = {
        lat: lat3,
        lng: long3
    }
    var points4 = {
        lat: lat4,
        lng: long4
    }
    var points5 = {
        lat: lat5,
        lng: long5
    }
    var points6 = {
        lat: lat6,
        lng: long6
    }
    var points7 = {
        lat: lat7,
        lng: long7
    }
    var points8 = {
        lat: lat8,
        lng: long8
    }
    var points9 = {
        lat: lat9,
        lng: long9
    }
    var points10 = {
        lat: lat10,
        lng: long10
    }

    // The map, centered at Uluru
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 13,
            center: uluru,
            styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#bdbdbd"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dadada"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c9c9c9"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                }
            ],
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.TERRAIN]
            },
            mapTypeId: google.maps.MapTypeId.TERRAIN
        });



    // The marker, positioned at Uluru



    var theNumber = document.getElementsByClassName("price-div");
    var theDivs = document.getElementsByClassName("price-div-commas");

    for (var i = 0; i < theNumber.length; i++) {



        var price = []

        price = theNumber[i].innerHTML;

        price = Number(price).toLocaleString();


        theDivs[i].innerHTML = "$" + price;

    }

    var marker = new google.maps.Marker({
        position: points1,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[0].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });

    var marker = new google.maps.Marker({
        position: points2,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[1].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });

    var marker = new google.maps.Marker({
        position: points3,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[2].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });

    var marker = new google.maps.Marker({
        position: points4,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[3].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });

    var marker = new google.maps.Marker({
        position: points5,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[4].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });

    var marker = new google.maps.Marker({
        position: points6,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[5].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });

    var marker = new google.maps.Marker({
        position: points7,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[6].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });

    var marker = new google.maps.Marker({
        position: points8,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[7].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });

    var marker = new google.maps.Marker({
        position: points9,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[8].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });


    var marker = new google.maps.Marker({
        position: points10,
        map: map,
        title: 'Hello World!',
        icon: {
            labelOrigin: new google.maps.Point(16, 64),
            url: "https://drive.google.com/uc?id=0B3RD6FDNxXbdVXRhZHFnV2xaS1E"
        },
        label: {
            text: theDivs[9].innerHTML,
            color: "black",
            fontWeight: "bold",
            fontSize: "13px"
        }
    });

}