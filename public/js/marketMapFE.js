window.onload = function () {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
    initMap();
};



function initMap() {


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
            lat: 39.281223,
            lng: -106.987992
        },
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


    var smugglerActiveListingsDate = document.getElementById("smugglerActiveListings-dates").innerHTML;
    smugglerActiveListingsDate = smugglerActiveListingsDate.split(",");

    var smugglerActiveListings = document.getElementById("smugglerActiveListings").innerHTML;
    smugglerActiveListings = smugglerActiveListings.split(",");

    var smugglerSoldListings = document.getElementById("smugglerSoldListings").innerHTML;
    smugglerSoldListings = smugglerSoldListings.split(",");
    smugglerSoldListings = Number(smugglerSoldListings[0]) + Number(smugglerSoldListings[1]) + Number(smugglerSoldListings[2]) + Number(smugglerSoldListings[3]) + Number(smugglerSoldListings[4]) + Number(smugglerSoldListings[5]) + Number(smugglerSoldListings[6]) + Number(smugglerSoldListings[7]) + Number(smugglerSoldListings[8]) + Number(smugglerSoldListings[9]) + Number(smugglerSoldListings[10]) + Number(smugglerSoldListings[11])


    var smugglerActiveAvgPrice = document.getElementById("smugglerActiveAvgPrice").innerHTML;
    smugglerActiveAvgPrice = smugglerActiveAvgPrice.split(",");
    smugglerActiveAvgPrice = Number(smugglerActiveAvgPrice[0]).toLocaleString();

    var smugglerSoldAvgPrice = document.getElementById("smugglerSoldAvgPrice").innerHTML;
    smugglerSoldAvgPrice = smugglerSoldAvgPrice.split(",");
    smugglerSoldAvgPrice = Number(smugglerSoldAvgPrice[0]) + Number(smugglerSoldAvgPrice[1]) + Number(smugglerSoldAvgPrice[2]) + Number(smugglerSoldAvgPrice[3]) + Number(smugglerSoldAvgPrice[4]) + Number(smugglerSoldAvgPrice[5]) + Number(smugglerSoldAvgPrice[6]) + Number(smugglerSoldAvgPrice[7]) + Number(smugglerSoldAvgPrice[8]) + Number(smugglerSoldAvgPrice[9]) + Number(smugglerSoldAvgPrice[10]) + Number(smugglerSoldAvgPrice[11]);
    smugglerSoldAvgPrice = Number(smugglerSoldAvgPrice) / Number(12);
    smugglerSoldAvgPrice = Number(smugglerSoldAvgPrice).toLocaleString();



    var smugglerSoldMedianPrice = document.getElementById("smugglerSoldMedianPrice").innerHTML;
    smugglerSoldMedianPrice = smugglerSoldMedianPrice.split(",");
    smugglerSoldMedianPrice = Number(smugglerSoldMedianPrice[0]) + Number(smugglerSoldMedianPrice[1]) + Number(smugglerSoldMedianPrice[2]) + Number(smugglerSoldMedianPrice[3]) + Number(smugglerSoldMedianPrice[4]) + Number(smugglerSoldMedianPrice[5]) + Number(smugglerSoldMedianPrice[6]) + Number(smugglerSoldMedianPrice[7]) + Number(smugglerSoldMedianPrice[8]) + Number(smugglerSoldMedianPrice[9]) + Number(smugglerSoldMedianPrice[10]) + Number(smugglerSoldMedianPrice[11]);
    smugglerSoldMedianPrice = Number(smugglerSoldMedianPrice) / Number(12);
    smugglerSoldMedianPrice = Number(smugglerSoldMedianPrice).toLocaleString();

    var smugglerAverageDom = document.getElementById("smugglerAverageDom").innerHTML;
    smugglerAverageDom = smugglerAverageDom.split(",");
    smugglerAverageDom = Number(smugglerAverageDom[0]) + Number(smugglerAverageDom[1]) + Number(smugglerAverageDom[2]) + Number(smugglerAverageDom[3]) + Number(smugglerAverageDom[4]) + Number(smugglerAverageDom[5]) + Number(smugglerAverageDom[6]) + Number(smugglerAverageDom[7]) + Number(smugglerAverageDom[8]) + Number(smugglerAverageDom[9]) + Number(smugglerAverageDom[10]) + Number(smugglerAverageDom[11]);
    smugglerAverageDom = Number(smugglerAverageDom) / Number(12);




    var centralCoreActiveListingsDate = document.getElementById("centralCoreActiveListings-dates").innerHTML;
    centralCoreActiveListingsDate = centralCoreActiveListingsDate.split(",");

    var centralCoreActiveListings = document.getElementById("centralCoreActiveListings").innerHTML;
    centralCoreActiveListings = centralCoreActiveListings.split(",");

    var centralCoreSoldListings = document.getElementById("centralCoreSoldListings").innerHTML;
    centralCoreSoldListings = centralCoreSoldListings.split(",");
    centralCoreSoldListings = Number(centralCoreSoldListings[0]) + Number(centralCoreSoldListings[1]) + Number(centralCoreSoldListings[2]) + Number(centralCoreSoldListings[3]) + Number(centralCoreSoldListings[4]) + Number(centralCoreSoldListings[5]) + Number(centralCoreSoldListings[6]) + Number(centralCoreSoldListings[7]) + Number(centralCoreSoldListings[8]) + Number(centralCoreSoldListings[9]) + Number(centralCoreSoldListings[10]) + Number(centralCoreSoldListings[11])


    var centralCoreActiveAvgPrice = document.getElementById("centralCoreActiveAvgPrice").innerHTML;
    centralCoreActiveAvgPrice = centralCoreActiveAvgPrice.split(",");
    centralCoreActiveAvgPrice = Number(centralCoreActiveAvgPrice[0]).toLocaleString();

    var centralCoreSoldAvgPrice = document.getElementById("centralCoreSoldAvgPrice").innerHTML;
    centralCoreSoldAvgPrice = centralCoreSoldAvgPrice.split(",");
    centralCoreSoldAvgPrice = Number(centralCoreSoldAvgPrice[0]) + Number(centralCoreSoldAvgPrice[1]) + Number(centralCoreSoldAvgPrice[2]) + Number(centralCoreSoldAvgPrice[3]) + Number(centralCoreSoldAvgPrice[4]) + Number(centralCoreSoldAvgPrice[5]) + Number(centralCoreSoldAvgPrice[6]) + Number(centralCoreSoldAvgPrice[7]) + Number(centralCoreSoldAvgPrice[8]) + Number(centralCoreSoldAvgPrice[9]) + Number(centralCoreSoldAvgPrice[10]) + Number(centralCoreSoldAvgPrice[11]);
    centralCoreSoldAvgPrice = Number(centralCoreSoldAvgPrice) / Number(12);
    centralCoreSoldAvgPrice = Number(centralCoreSoldAvgPrice).toLocaleString();



    var centralCoreSoldMedianPrice = document.getElementById("centralCoreSoldMedianPrice").innerHTML;
    centralCoreSoldMedianPrice = centralCoreSoldMedianPrice.split(",");
    centralCoreSoldMedianPrice = Number(centralCoreSoldMedianPrice[0]) + Number(centralCoreSoldMedianPrice[1]) + Number(centralCoreSoldMedianPrice[2]) + Number(centralCoreSoldMedianPrice[3]) + Number(centralCoreSoldMedianPrice[4]) + Number(centralCoreSoldMedianPrice[5]) + Number(centralCoreSoldMedianPrice[6]) + Number(centralCoreSoldMedianPrice[7]) + Number(centralCoreSoldMedianPrice[8]) + Number(centralCoreSoldMedianPrice[9]) + Number(centralCoreSoldMedianPrice[10]) + Number(centralCoreSoldMedianPrice[11]);
    centralCoreSoldMedianPrice = Number(centralCoreSoldMedianPrice) / Number(12);
    centralCoreSoldMedianPrice = Number(centralCoreSoldMedianPrice).toLocaleString();

    var centralCoreAverageDom = document.getElementById("centralCoreAverageDom").innerHTML;
    centralCoreAverageDom = centralCoreAverageDom.split(",");
    centralCoreAverageDom = Number(centralCoreAverageDom[0]) + Number(centralCoreAverageDom[1]) + Number(centralCoreAverageDom[2]) + Number(centralCoreAverageDom[3]) + Number(centralCoreAverageDom[4]) + Number(centralCoreAverageDom[5]) + Number(centralCoreAverageDom[6]) + Number(centralCoreAverageDom[7]) + Number(centralCoreAverageDom[8]) + Number(centralCoreAverageDom[9]) + Number(centralCoreAverageDom[10]) + Number(centralCoreAverageDom[11]);
    centralCoreAverageDom = Number(centralCoreAverageDom) / Number(12);





    var westEndActiveListingsDate = document.getElementById("westEndActiveListings-dates").innerHTML;
    westEndActiveListingsDate = westEndActiveListingsDate.split(",");

    var westEndActiveListings = document.getElementById("westEndActiveListings").innerHTML;
    westEndActiveListings = westEndActiveListings.split(",");

    var westEndSoldListings = document.getElementById("westEndSoldListings").innerHTML;
    westEndSoldListings = westEndSoldListings.split(",");
    westEndSoldListings = Number(westEndSoldListings[0]) + Number(westEndSoldListings[1]) + Number(westEndSoldListings[2]) + Number(westEndSoldListings[3]) + Number(westEndSoldListings[4]) + Number(westEndSoldListings[5]) + Number(westEndSoldListings[6]) + Number(westEndSoldListings[7]) + Number(westEndSoldListings[8]) + Number(westEndSoldListings[9]) + Number(westEndSoldListings[10]) + Number(westEndSoldListings[11])


    var westEndActiveAvgPrice = document.getElementById("westEndActiveAvgPrice").innerHTML;
    westEndActiveAvgPrice = westEndActiveAvgPrice.split(",");
    westEndActiveAvgPrice = Number(westEndActiveAvgPrice[0]).toLocaleString();

    var westEndSoldAvgPrice = document.getElementById("westEndSoldAvgPrice").innerHTML;
    westEndSoldAvgPrice = westEndSoldAvgPrice.split(",");
    westEndSoldAvgPrice = Number(westEndSoldAvgPrice[0]) + Number(westEndSoldAvgPrice[1]) + Number(westEndSoldAvgPrice[2]) + Number(westEndSoldAvgPrice[3]) + Number(westEndSoldAvgPrice[4]) + Number(westEndSoldAvgPrice[5]) + Number(westEndSoldAvgPrice[6]) + Number(westEndSoldAvgPrice[7]) + Number(westEndSoldAvgPrice[8]) + Number(westEndSoldAvgPrice[9]) + Number(westEndSoldAvgPrice[10]) + Number(westEndSoldAvgPrice[11]);
    westEndSoldAvgPrice = Number(westEndSoldAvgPrice) / Number(12);
    westEndSoldAvgPrice = Number(westEndSoldAvgPrice).toLocaleString();



    var westEndSoldMedianPrice = document.getElementById("westEndSoldMedianPrice").innerHTML;
    westEndSoldMedianPrice = westEndSoldMedianPrice.split(",");
    westEndSoldMedianPrice = Number(westEndSoldMedianPrice[0]) + Number(westEndSoldMedianPrice[1]) + Number(westEndSoldMedianPrice[2]) + Number(westEndSoldMedianPrice[3]) + Number(westEndSoldMedianPrice[4]) + Number(westEndSoldMedianPrice[5]) + Number(westEndSoldMedianPrice[6]) + Number(westEndSoldMedianPrice[7]) + Number(westEndSoldMedianPrice[8]) + Number(westEndSoldMedianPrice[9]) + Number(westEndSoldMedianPrice[10]) + Number(westEndSoldMedianPrice[11]);
    westEndSoldMedianPrice = Number(westEndSoldMedianPrice) / Number(12);
    westEndSoldMedianPrice = Number(westEndSoldMedianPrice).toLocaleString();

    var westEndAverageDom = document.getElementById("westEndAverageDom").innerHTML;
    westEndAverageDom = westEndAverageDom.split(",");
    westEndAverageDom = Number(westEndAverageDom[0]) + Number(westEndAverageDom[1]) + Number(westEndAverageDom[2]) + Number(westEndAverageDom[3]) + Number(westEndAverageDom[4]) + Number(westEndAverageDom[5]) + Number(westEndAverageDom[6]) + Number(westEndAverageDom[7]) + Number(westEndAverageDom[8]) + Number(westEndAverageDom[9]) + Number(westEndAverageDom[10]) + Number(westEndAverageDom[11]);
    westEndAverageDom = Number(westEndAverageDom) / Number(12);


    var eastAspenActiveListingsDate = document.getElementById("eastAspenActiveListings-dates").innerHTML;
    eastAspenActiveListingsDate = eastAspenActiveListingsDate.split(",");

    var eastAspenActiveListings = document.getElementById("eastAspenActiveListings").innerHTML;
    eastAspenActiveListings = eastAspenActiveListings.split(",");

    var eastAspenSoldListings = document.getElementById("eastAspenSoldListings").innerHTML;
    eastAspenSoldListings = eastAspenSoldListings.split(",");
    eastAspenSoldListings = Number(eastAspenSoldListings[0]) + Number(eastAspenSoldListings[1]) + Number(eastAspenSoldListings[2]) + Number(eastAspenSoldListings[3]) + Number(eastAspenSoldListings[4]) + Number(eastAspenSoldListings[5]) + Number(eastAspenSoldListings[6]) + Number(eastAspenSoldListings[7]) + Number(eastAspenSoldListings[8]) + Number(eastAspenSoldListings[9]) + Number(eastAspenSoldListings[10]) + Number(eastAspenSoldListings[11])


    var eastAspenActiveAvgPrice = document.getElementById("eastAspenActiveAvgPrice").innerHTML;
    eastAspenActiveAvgPrice = eastAspenActiveAvgPrice.split(",");
    eastAspenActiveAvgPrice = Number(eastAspenActiveAvgPrice[0]).toLocaleString();

    var eastAspenSoldAvgPrice = document.getElementById("eastAspenSoldAvgPrice").innerHTML;
    eastAspenSoldAvgPrice = eastAspenSoldAvgPrice.split(",");
    eastAspenSoldAvgPrice = Number(eastAspenSoldAvgPrice[0]) + Number(eastAspenSoldAvgPrice[1]) + Number(eastAspenSoldAvgPrice[2]) + Number(eastAspenSoldAvgPrice[3]) + Number(eastAspenSoldAvgPrice[4]) + Number(eastAspenSoldAvgPrice[5]) + Number(eastAspenSoldAvgPrice[6]) + Number(eastAspenSoldAvgPrice[7]) + Number(eastAspenSoldAvgPrice[8]) + Number(eastAspenSoldAvgPrice[9]) + Number(eastAspenSoldAvgPrice[10]) + Number(eastAspenSoldAvgPrice[11]);
    eastAspenSoldAvgPrice = Number(eastAspenSoldAvgPrice) / Number(12);
    eastAspenSoldAvgPrice = Number(eastAspenSoldAvgPrice).toLocaleString();



    var eastAspenSoldMedianPrice = document.getElementById("eastAspenSoldMedianPrice").innerHTML;
    eastAspenSoldMedianPrice = eastAspenSoldMedianPrice.split(",");
    eastAspenSoldMedianPrice = Number(eastAspenSoldMedianPrice[0]) + Number(eastAspenSoldMedianPrice[1]) + Number(eastAspenSoldMedianPrice[2]) + Number(eastAspenSoldMedianPrice[3]) + Number(eastAspenSoldMedianPrice[4]) + Number(eastAspenSoldMedianPrice[5]) + Number(eastAspenSoldMedianPrice[6]) + Number(eastAspenSoldMedianPrice[7]) + Number(eastAspenSoldMedianPrice[8]) + Number(eastAspenSoldMedianPrice[9]) + Number(eastAspenSoldMedianPrice[10]) + Number(eastAspenSoldMedianPrice[11]);
    eastAspenSoldMedianPrice = Number(eastAspenSoldMedianPrice) / Number(12);
    eastAspenSoldMedianPrice = Number(eastAspenSoldMedianPrice).toLocaleString();

    var eastAspenAverageDom = document.getElementById("eastAspenAverageDom").innerHTML;
    eastAspenAverageDom = eastAspenAverageDom.split(",");
    eastAspenAverageDom = Number(eastAspenAverageDom[0]) + Number(eastAspenAverageDom[1]) + Number(eastAspenAverageDom[2]) + Number(eastAspenAverageDom[3]) + Number(eastAspenAverageDom[4]) + Number(eastAspenAverageDom[5]) + Number(eastAspenAverageDom[6]) + Number(eastAspenAverageDom[7]) + Number(eastAspenAverageDom[8]) + Number(eastAspenAverageDom[9]) + Number(eastAspenAverageDom[10]) + Number(eastAspenAverageDom[11]);
    eastAspenAverageDom = Number(eastAspenAverageDom) / Number(12);
    ///////////


    var redMtnActiveListingsDate = document.getElementById("redMtnActiveListings-dates").innerHTML;
    redMtnActiveListingsDate = redMtnActiveListingsDate.split(",");

    var redMtnActiveListings = document.getElementById("redMtnActiveListings").innerHTML;
    redMtnActiveListings = redMtnActiveListings.split(",");

    var redMtnSoldListings = document.getElementById("redMtnSoldListings").innerHTML;
    redMtnSoldListings = redMtnSoldListings.split(",");
    redMtnSoldListings = Number(redMtnSoldListings[0]) + Number(redMtnSoldListings[1]) + Number(redMtnSoldListings[2]) + Number(redMtnSoldListings[3]) + Number(redMtnSoldListings[4]) + Number(redMtnSoldListings[5]) + Number(redMtnSoldListings[6]) + Number(redMtnSoldListings[7]) + Number(redMtnSoldListings[8]) + Number(redMtnSoldListings[9]) + Number(redMtnSoldListings[10]) + Number(redMtnSoldListings[11])


    var redMtnActiveAvgPrice = document.getElementById("redMtnActiveAvgPrice").innerHTML;
    redMtnActiveAvgPrice = redMtnActiveAvgPrice.split(",");
    redMtnActiveAvgPrice = Number(redMtnActiveAvgPrice[0]).toLocaleString();

    var redMtnSoldAvgPrice = document.getElementById("redMtnSoldAvgPrice").innerHTML;
    redMtnSoldAvgPrice = redMtnSoldAvgPrice.split(",");
    redMtnSoldAvgPrice = Number(redMtnSoldAvgPrice[0]) + Number(redMtnSoldAvgPrice[1]) + Number(redMtnSoldAvgPrice[2]) + Number(redMtnSoldAvgPrice[3]) + Number(redMtnSoldAvgPrice[4]) + Number(redMtnSoldAvgPrice[5]) + Number(redMtnSoldAvgPrice[6]) + Number(redMtnSoldAvgPrice[7]) + Number(redMtnSoldAvgPrice[8]) + Number(redMtnSoldAvgPrice[9]) + Number(redMtnSoldAvgPrice[10]) + Number(redMtnSoldAvgPrice[11]);
    redMtnSoldAvgPrice = Number(redMtnSoldAvgPrice) / Number(12);
    redMtnSoldAvgPrice = Number(redMtnSoldAvgPrice).toLocaleString();



    var redMtnSoldMedianPrice = document.getElementById("redMtnSoldMedianPrice").innerHTML;
    redMtnSoldMedianPrice = redMtnSoldMedianPrice.split(",");
    redMtnSoldMedianPrice = Number(redMtnSoldMedianPrice[0]) + Number(redMtnSoldMedianPrice[1]) + Number(redMtnSoldMedianPrice[2]) + Number(redMtnSoldMedianPrice[3]) + Number(redMtnSoldMedianPrice[4]) + Number(redMtnSoldMedianPrice[5]) + Number(redMtnSoldMedianPrice[6]) + Number(redMtnSoldMedianPrice[7]) + Number(redMtnSoldMedianPrice[8]) + Number(redMtnSoldMedianPrice[9]) + Number(redMtnSoldMedianPrice[10]) + Number(redMtnSoldMedianPrice[11]);
    redMtnSoldMedianPrice = Number(redMtnSoldMedianPrice) / Number(12);
    redMtnSoldMedianPrice = Number(redMtnSoldMedianPrice).toLocaleString();

    var redMtnAverageDom = document.getElementById("redMtnAverageDom").innerHTML;
    redMtnAverageDom = redMtnAverageDom.split(",");
    redMtnAverageDom = Number(redMtnAverageDom[0]) + Number(redMtnAverageDom[1]) + Number(redMtnAverageDom[2]) + Number(redMtnAverageDom[3]) + Number(redMtnAverageDom[4]) + Number(redMtnAverageDom[5]) + Number(redMtnAverageDom[6]) + Number(redMtnAverageDom[7]) + Number(redMtnAverageDom[8]) + Number(redMtnAverageDom[9]) + Number(redMtnAverageDom[10]) + Number(redMtnAverageDom[11]);
    redMtnAverageDom = Number(redMtnAverageDom) / Number(12);

    var westAspenActiveListingsDate = document.getElementById("westAspenActiveListings-dates").innerHTML;
    westAspenActiveListingsDate = westAspenActiveListingsDate.split(",");

    var westAspenActiveListings = document.getElementById("westAspenActiveListings").innerHTML;
    westAspenActiveListings = westAspenActiveListings.split(",");

    var westAspenSoldListings = document.getElementById("westAspenSoldListings").innerHTML;
    westAspenSoldListings = westAspenSoldListings.split(",");
    westAspenSoldListings = Number(westAspenSoldListings[0]) + Number(westAspenSoldListings[1]) + Number(westAspenSoldListings[2]) + Number(westAspenSoldListings[3]) + Number(westAspenSoldListings[4]) + Number(westAspenSoldListings[5]) + Number(westAspenSoldListings[6]) + Number(westAspenSoldListings[7]) + Number(westAspenSoldListings[8]) + Number(westAspenSoldListings[9]) + Number(westAspenSoldListings[10]) + Number(westAspenSoldListings[11])


    var westAspenActiveAvgPrice = document.getElementById("westAspenActiveAvgPrice").innerHTML;
    westAspenActiveAvgPrice = westAspenActiveAvgPrice.split(",");
    westAspenActiveAvgPrice = Number(westAspenActiveAvgPrice[0]).toLocaleString();

    var westAspenSoldAvgPrice = document.getElementById("westAspenSoldAvgPrice").innerHTML;
    westAspenSoldAvgPrice = westAspenSoldAvgPrice.split(",");
    westAspenSoldAvgPrice = Number(westAspenSoldAvgPrice[0]) + Number(westAspenSoldAvgPrice[1]) + Number(westAspenSoldAvgPrice[2]) + Number(westAspenSoldAvgPrice[3]) + Number(westAspenSoldAvgPrice[4]) + Number(westAspenSoldAvgPrice[5]) + Number(westAspenSoldAvgPrice[6]) + Number(westAspenSoldAvgPrice[7]) + Number(westAspenSoldAvgPrice[8]) + Number(westAspenSoldAvgPrice[9]) + Number(westAspenSoldAvgPrice[10]) + Number(westAspenSoldAvgPrice[11]);
    westAspenSoldAvgPrice = Number(westAspenSoldAvgPrice) / Number(12);
    westAspenSoldAvgPrice = Number(westAspenSoldAvgPrice).toLocaleString();



    var westAspenSoldMedianPrice = document.getElementById("westAspenSoldMedianPrice").innerHTML;
    westAspenSoldMedianPrice = westAspenSoldMedianPrice.split(",");
    westAspenSoldMedianPrice = Number(westAspenSoldMedianPrice[0]) + Number(westAspenSoldMedianPrice[1]) + Number(westAspenSoldMedianPrice[2]) + Number(westAspenSoldMedianPrice[3]) + Number(westAspenSoldMedianPrice[4]) + Number(westAspenSoldMedianPrice[5]) + Number(westAspenSoldMedianPrice[6]) + Number(westAspenSoldMedianPrice[7]) + Number(westAspenSoldMedianPrice[8]) + Number(westAspenSoldMedianPrice[9]) + Number(westAspenSoldMedianPrice[10]) + Number(westAspenSoldMedianPrice[11]);
    westAspenSoldMedianPrice = Number(westAspenSoldMedianPrice) / Number(12);
    westAspenSoldMedianPrice = Number(westAspenSoldMedianPrice).toLocaleString();

    var westAspenAverageDom = document.getElementById("westAspenAverageDom").innerHTML;
    westAspenAverageDom = westAspenAverageDom.split(",");
    westAspenAverageDom = Number(westAspenAverageDom[0]) + Number(westAspenAverageDom[1]) + Number(westAspenAverageDom[2]) + Number(westAspenAverageDom[3]) + Number(westAspenAverageDom[4]) + Number(westAspenAverageDom[5]) + Number(westAspenAverageDom[6]) + Number(westAspenAverageDom[7]) + Number(westAspenAverageDom[8]) + Number(westAspenAverageDom[9]) + Number(westAspenAverageDom[10]) + Number(westAspenAverageDom[11]);
    westAspenAverageDom = Number(westAspenAverageDom) / Number(12);


    var mclainFlatsActiveListingsDate = document.getElementById("mclainFlatsActiveListings-dates").innerHTML;
    mclainFlatsActiveListingsDate = mclainFlatsActiveListingsDate.split(",");

    var mclainFlatsActiveListings = document.getElementById("mclainFlatsActiveListings").innerHTML;
    mclainFlatsActiveListings = mclainFlatsActiveListings.split(",");

    var mclainFlatsSoldListings = document.getElementById("mclainFlatsSoldListings").innerHTML;
    mclainFlatsSoldListings = mclainFlatsSoldListings.split(",");
    mclainFlatsSoldListings = Number(mclainFlatsSoldListings[0]) + Number(mclainFlatsSoldListings[1]) + Number(mclainFlatsSoldListings[2]) + Number(mclainFlatsSoldListings[3]) + Number(mclainFlatsSoldListings[4]) + Number(mclainFlatsSoldListings[5]) + Number(mclainFlatsSoldListings[6]) + Number(mclainFlatsSoldListings[7]) + Number(mclainFlatsSoldListings[8]) + Number(mclainFlatsSoldListings[9]) + Number(mclainFlatsSoldListings[10]) + Number(mclainFlatsSoldListings[11])


    var mclainFlatsActiveAvgPrice = document.getElementById("mclainFlatsActiveAvgPrice").innerHTML;
    mclainFlatsActiveAvgPrice = mclainFlatsActiveAvgPrice.split(",");
    mclainFlatsActiveAvgPrice = Number(mclainFlatsActiveAvgPrice[0]).toLocaleString();

    var mclainFlatsSoldAvgPrice = document.getElementById("mclainFlatsSoldAvgPrice").innerHTML;
    mclainFlatsSoldAvgPrice = mclainFlatsSoldAvgPrice.split(",");
    mclainFlatsSoldAvgPrice = Number(mclainFlatsSoldAvgPrice[0]) + Number(mclainFlatsSoldAvgPrice[1]) + Number(mclainFlatsSoldAvgPrice[2]) + Number(mclainFlatsSoldAvgPrice[3]) + Number(mclainFlatsSoldAvgPrice[4]) + Number(mclainFlatsSoldAvgPrice[5]) + Number(mclainFlatsSoldAvgPrice[6]) + Number(mclainFlatsSoldAvgPrice[7]) + Number(mclainFlatsSoldAvgPrice[8]) + Number(mclainFlatsSoldAvgPrice[9]) + Number(mclainFlatsSoldAvgPrice[10]) + Number(mclainFlatsSoldAvgPrice[11]);
    mclainFlatsSoldAvgPrice = Number(mclainFlatsSoldAvgPrice) / Number(12);
    mclainFlatsSoldAvgPrice = Number(mclainFlatsSoldAvgPrice).toLocaleString();



    var mclainFlatsSoldMedianPrice = document.getElementById("mclainFlatsSoldMedianPrice").innerHTML;
    mclainFlatsSoldMedianPrice = mclainFlatsSoldMedianPrice.split(",");
    mclainFlatsSoldMedianPrice = Number(mclainFlatsSoldMedianPrice[0]) + Number(mclainFlatsSoldMedianPrice[1]) + Number(mclainFlatsSoldMedianPrice[2]) + Number(mclainFlatsSoldMedianPrice[3]) + Number(mclainFlatsSoldMedianPrice[4]) + Number(mclainFlatsSoldMedianPrice[5]) + Number(mclainFlatsSoldMedianPrice[6]) + Number(mclainFlatsSoldMedianPrice[7]) + Number(mclainFlatsSoldMedianPrice[8]) + Number(mclainFlatsSoldMedianPrice[9]) + Number(mclainFlatsSoldMedianPrice[10]) + Number(mclainFlatsSoldMedianPrice[11]);
    mclainFlatsSoldMedianPrice = Number(mclainFlatsSoldMedianPrice) / Number(12);
    mclainFlatsSoldMedianPrice = Number(mclainFlatsSoldMedianPrice).toLocaleString();

    var mclainFlatsAverageDom = document.getElementById("mclainFlatsAverageDom").innerHTML;
    mclainFlatsAverageDom = mclainFlatsAverageDom.split(",");
    mclainFlatsAverageDom = Number(mclainFlatsAverageDom[0]) + Number(mclainFlatsAverageDom[1]) + Number(mclainFlatsAverageDom[2]) + Number(mclainFlatsAverageDom[3]) + Number(mclainFlatsAverageDom[4]) + Number(mclainFlatsAverageDom[5]) + Number(mclainFlatsAverageDom[6]) + Number(mclainFlatsAverageDom[7]) + Number(mclainFlatsAverageDom[8]) + Number(mclainFlatsAverageDom[9]) + Number(mclainFlatsAverageDom[10]) + Number(mclainFlatsAverageDom[11]);
    mclainFlatsAverageDom = Number(mclainFlatsAverageDom) / Number(12);

    var snowmassVillageActiveListingsDate = document.getElementById("snowmassVillageActiveListings-dates").innerHTML;
    snowmassVillageActiveListingsDate = snowmassVillageActiveListingsDate.split(",");

    var snowmassVillageActiveListings = document.getElementById("snowmassVillageActiveListings").innerHTML;
    snowmassVillageActiveListings = snowmassVillageActiveListings.split(",");

    var snowmassVillageSoldListings = document.getElementById("snowmassVillageSoldListings").innerHTML;
    snowmassVillageSoldListings = snowmassVillageSoldListings.split(",");
    snowmassVillageSoldListings = Number(snowmassVillageSoldListings[0]) + Number(snowmassVillageSoldListings[1]) + Number(snowmassVillageSoldListings[2]) + Number(snowmassVillageSoldListings[3]) + Number(snowmassVillageSoldListings[4]) + Number(snowmassVillageSoldListings[5]) + Number(snowmassVillageSoldListings[6]) + Number(snowmassVillageSoldListings[7]) + Number(snowmassVillageSoldListings[8]) + Number(snowmassVillageSoldListings[9]) + Number(snowmassVillageSoldListings[10]) + Number(snowmassVillageSoldListings[11])


    var snowmassVillageActiveAvgPrice = document.getElementById("snowmassVillageActiveAvgPrice").innerHTML;
    snowmassVillageActiveAvgPrice = snowmassVillageActiveAvgPrice.split(",");
    snowmassVillageActiveAvgPrice = Number(snowmassVillageActiveAvgPrice[0]).toLocaleString();

    var snowmassVillageSoldAvgPrice = document.getElementById("snowmassVillageSoldAvgPrice").innerHTML;
    snowmassVillageSoldAvgPrice = snowmassVillageSoldAvgPrice.split(",");
    snowmassVillageSoldAvgPrice = Number(snowmassVillageSoldAvgPrice[0]) + Number(snowmassVillageSoldAvgPrice[1]) + Number(snowmassVillageSoldAvgPrice[2]) + Number(snowmassVillageSoldAvgPrice[3]) + Number(snowmassVillageSoldAvgPrice[4]) + Number(snowmassVillageSoldAvgPrice[5]) + Number(snowmassVillageSoldAvgPrice[6]) + Number(snowmassVillageSoldAvgPrice[7]) + Number(snowmassVillageSoldAvgPrice[8]) + Number(snowmassVillageSoldAvgPrice[9]) + Number(snowmassVillageSoldAvgPrice[10]) + Number(snowmassVillageSoldAvgPrice[11]);
    snowmassVillageSoldAvgPrice = Number(snowmassVillageSoldAvgPrice) / Number(12);
    snowmassVillageSoldAvgPrice = Number(snowmassVillageSoldAvgPrice).toLocaleString();



    var snowmassVillageSoldMedianPrice = document.getElementById("snowmassVillageSoldMedianPrice").innerHTML;
    snowmassVillageSoldMedianPrice = snowmassVillageSoldMedianPrice.split(",");
    snowmassVillageSoldMedianPrice = Number(snowmassVillageSoldMedianPrice[0]) + Number(snowmassVillageSoldMedianPrice[1]) + Number(snowmassVillageSoldMedianPrice[2]) + Number(snowmassVillageSoldMedianPrice[3]) + Number(snowmassVillageSoldMedianPrice[4]) + Number(snowmassVillageSoldMedianPrice[5]) + Number(snowmassVillageSoldMedianPrice[6]) + Number(snowmassVillageSoldMedianPrice[7]) + Number(snowmassVillageSoldMedianPrice[8]) + Number(snowmassVillageSoldMedianPrice[9]) + Number(snowmassVillageSoldMedianPrice[10]) + Number(snowmassVillageSoldMedianPrice[11]);
    snowmassVillageSoldMedianPrice = Number(snowmassVillageSoldMedianPrice) / Number(12);
    snowmassVillageSoldMedianPrice = Number(snowmassVillageSoldMedianPrice).toLocaleString();

    var snowmassVillageAverageDom = document.getElementById("snowmassVillageAverageDom").innerHTML;
    snowmassVillageAverageDom = snowmassVillageAverageDom.split(",");
    snowmassVillageAverageDom = Number(snowmassVillageAverageDom[0]) + Number(snowmassVillageAverageDom[1]) + Number(snowmassVillageAverageDom[2]) + Number(snowmassVillageAverageDom[3]) + Number(snowmassVillageAverageDom[4]) + Number(snowmassVillageAverageDom[5]) + Number(snowmassVillageAverageDom[6]) + Number(snowmassVillageAverageDom[7]) + Number(snowmassVillageAverageDom[8]) + Number(snowmassVillageAverageDom[9]) + Number(snowmassVillageAverageDom[10]) + Number(snowmassVillageAverageDom[11]);
    snowmassVillageAverageDom = Number(snowmassVillageAverageDom) / Number(12);


    var brushCreekActiveListingsDate = document.getElementById("brushCreekActiveListings-dates").innerHTML;
    brushCreekActiveListingsDate = brushCreekActiveListingsDate.split(",");

    var brushCreekActiveListings = document.getElementById("brushCreekActiveListings").innerHTML;
    brushCreekActiveListings = brushCreekActiveListings.split(",");

    var brushCreekSoldListings = document.getElementById("brushCreekSoldListings").innerHTML;
    brushCreekSoldListings = brushCreekSoldListings.split(",");
    brushCreekSoldListings = Number(brushCreekSoldListings[0]) + Number(brushCreekSoldListings[1]) + Number(brushCreekSoldListings[2]) + Number(brushCreekSoldListings[3]) + Number(brushCreekSoldListings[4]) + Number(brushCreekSoldListings[5]) + Number(brushCreekSoldListings[6]) + Number(brushCreekSoldListings[7]) + Number(brushCreekSoldListings[8]) + Number(brushCreekSoldListings[9]) + Number(brushCreekSoldListings[10]) + Number(brushCreekSoldListings[11])


    var brushCreekActiveAvgPrice = document.getElementById("brushCreekActiveAvgPrice").innerHTML;
    brushCreekActiveAvgPrice = brushCreekActiveAvgPrice.split(",");
    brushCreekActiveAvgPrice = Number(brushCreekActiveAvgPrice[0]).toLocaleString();

    var brushCreekSoldAvgPrice = document.getElementById("brushCreekSoldAvgPrice").innerHTML;
    brushCreekSoldAvgPrice = brushCreekSoldAvgPrice.split(",");
    brushCreekSoldAvgPrice = Number(brushCreekSoldAvgPrice[0]) + Number(brushCreekSoldAvgPrice[1]) + Number(brushCreekSoldAvgPrice[2]) + Number(brushCreekSoldAvgPrice[3]) + Number(brushCreekSoldAvgPrice[4]) + Number(brushCreekSoldAvgPrice[5]) + Number(brushCreekSoldAvgPrice[6]) + Number(brushCreekSoldAvgPrice[7]) + Number(brushCreekSoldAvgPrice[8]) + Number(brushCreekSoldAvgPrice[9]) + Number(brushCreekSoldAvgPrice[10]) + Number(brushCreekSoldAvgPrice[11]);
    brushCreekSoldAvgPrice = Number(brushCreekSoldAvgPrice) / Number(12);
    brushCreekSoldAvgPrice = Number(brushCreekSoldAvgPrice).toLocaleString();



    var brushCreekSoldMedianPrice = document.getElementById("brushCreekSoldMedianPrice").innerHTML;
    brushCreekSoldMedianPrice = brushCreekSoldMedianPrice.split(",");
    brushCreekSoldMedianPrice = Number(brushCreekSoldMedianPrice[0]) + Number(brushCreekSoldMedianPrice[1]) + Number(brushCreekSoldMedianPrice[2]) + Number(brushCreekSoldMedianPrice[3]) + Number(brushCreekSoldMedianPrice[4]) + Number(brushCreekSoldMedianPrice[5]) + Number(brushCreekSoldMedianPrice[6]) + Number(brushCreekSoldMedianPrice[7]) + Number(brushCreekSoldMedianPrice[8]) + Number(brushCreekSoldMedianPrice[9]) + Number(brushCreekSoldMedianPrice[10]) + Number(brushCreekSoldMedianPrice[11]);
    brushCreekSoldMedianPrice = Number(brushCreekSoldMedianPrice) / Number(12);
    brushCreekSoldMedianPrice = Number(brushCreekSoldMedianPrice).toLocaleString();

    var brushCreekAverageDom = document.getElementById("brushCreekAverageDom").innerHTML;
    brushCreekAverageDom = brushCreekAverageDom.split(",");
    brushCreekAverageDom = Number(brushCreekAverageDom[0]) + Number(brushCreekAverageDom[1]) + Number(brushCreekAverageDom[2]) + Number(brushCreekAverageDom[3]) + Number(brushCreekAverageDom[4]) + Number(brushCreekAverageDom[5]) + Number(brushCreekAverageDom[6]) + Number(brushCreekAverageDom[7]) + Number(brushCreekAverageDom[8]) + Number(brushCreekAverageDom[9]) + Number(brushCreekAverageDom[10]) + Number(brushCreekAverageDom[11]);
    brushCreekAverageDom = Number(brushCreekAverageDom) / Number(12);



    var woodyCreekActiveListingsDate = document.getElementById("woodyCreekActiveListings-dates").innerHTML;
    woodyCreekActiveListingsDate = woodyCreekActiveListingsDate.split(",");

    var woodyCreekActiveListings = document.getElementById("woodyCreekActiveListings").innerHTML;
    woodyCreekActiveListings = woodyCreekActiveListings.split(",");

    var woodyCreekSoldListings = document.getElementById("woodyCreekSoldListings").innerHTML;
    woodyCreekSoldListings = woodyCreekSoldListings.split(",");
    woodyCreekSoldListings = Number(woodyCreekSoldListings[0]) + Number(woodyCreekSoldListings[1]) + Number(woodyCreekSoldListings[2]) + Number(woodyCreekSoldListings[3]) + Number(woodyCreekSoldListings[4]) + Number(woodyCreekSoldListings[5]) + Number(woodyCreekSoldListings[6]) + Number(woodyCreekSoldListings[7]) + Number(woodyCreekSoldListings[8]) + Number(woodyCreekSoldListings[9]) + Number(woodyCreekSoldListings[10]) + Number(woodyCreekSoldListings[11])


    var woodyCreekActiveAvgPrice = document.getElementById("woodyCreekActiveAvgPrice").innerHTML;
    woodyCreekActiveAvgPrice = woodyCreekActiveAvgPrice.split(",");
    woodyCreekActiveAvgPrice = Number(woodyCreekActiveAvgPrice[0]).toLocaleString();

    var woodyCreekSoldAvgPrice = document.getElementById("woodyCreekSoldAvgPrice").innerHTML;
    woodyCreekSoldAvgPrice = woodyCreekSoldAvgPrice.split(",");
    woodyCreekSoldAvgPrice = Number(woodyCreekSoldAvgPrice[0]) + Number(woodyCreekSoldAvgPrice[1]) + Number(woodyCreekSoldAvgPrice[2]) + Number(woodyCreekSoldAvgPrice[3]) + Number(woodyCreekSoldAvgPrice[4]) + Number(woodyCreekSoldAvgPrice[5]) + Number(woodyCreekSoldAvgPrice[6]) + Number(woodyCreekSoldAvgPrice[7]) + Number(woodyCreekSoldAvgPrice[8]) + Number(woodyCreekSoldAvgPrice[9]) + Number(woodyCreekSoldAvgPrice[10]) + Number(woodyCreekSoldAvgPrice[11]);
    woodyCreekSoldAvgPrice = Number(woodyCreekSoldAvgPrice) / Number(12);
    woodyCreekSoldAvgPrice = Number(woodyCreekSoldAvgPrice).toLocaleString();



    var woodyCreekSoldMedianPrice = document.getElementById("woodyCreekSoldMedianPrice").innerHTML;
    woodyCreekSoldMedianPrice = woodyCreekSoldMedianPrice.split(",");
    woodyCreekSoldMedianPrice = Number(woodyCreekSoldMedianPrice[0]) + Number(woodyCreekSoldMedianPrice[1]) + Number(woodyCreekSoldMedianPrice[2]) + Number(woodyCreekSoldMedianPrice[3]) + Number(woodyCreekSoldMedianPrice[4]) + Number(woodyCreekSoldMedianPrice[5]) + Number(woodyCreekSoldMedianPrice[6]) + Number(woodyCreekSoldMedianPrice[7]) + Number(woodyCreekSoldMedianPrice[8]) + Number(woodyCreekSoldMedianPrice[9]) + Number(woodyCreekSoldMedianPrice[10]) + Number(woodyCreekSoldMedianPrice[11]);
    woodyCreekSoldMedianPrice = Number(woodyCreekSoldMedianPrice) / Number(12);
    woodyCreekSoldMedianPrice = Number(woodyCreekSoldMedianPrice).toLocaleString();

    var woodyCreekAverageDom = document.getElementById("woodyCreekAverageDom").innerHTML;
    woodyCreekAverageDom = woodyCreekAverageDom.split(",");
    woodyCreekAverageDom = Number(woodyCreekAverageDom[0]) + Number(woodyCreekAverageDom[1]) + Number(woodyCreekAverageDom[2]) + Number(woodyCreekAverageDom[3]) + Number(woodyCreekAverageDom[4]) + Number(woodyCreekAverageDom[5]) + Number(woodyCreekAverageDom[6]) + Number(woodyCreekAverageDom[7]) + Number(woodyCreekAverageDom[8]) + Number(woodyCreekAverageDom[9]) + Number(woodyCreekAverageDom[10]) + Number(woodyCreekAverageDom[11]);
    woodyCreekAverageDom = Number(woodyCreekAverageDom) / Number(12);



    var oldSnowmassActiveListingsDate = document.getElementById("oldSnowmassActiveListings-dates").innerHTML;
    oldSnowmassActiveListingsDate = oldSnowmassActiveListingsDate.split(",");

    var oldSnowmassActiveListings = document.getElementById("oldSnowmassActiveListings").innerHTML;
    oldSnowmassActiveListings = oldSnowmassActiveListings.split(",");

    var oldSnowmassSoldListings = document.getElementById("oldSnowmassSoldListings").innerHTML;
    oldSnowmassSoldListings = oldSnowmassSoldListings.split(",");
    oldSnowmassSoldListings = Number(oldSnowmassSoldListings[0]) + Number(oldSnowmassSoldListings[1]) + Number(oldSnowmassSoldListings[2]) + Number(oldSnowmassSoldListings[3]) + Number(oldSnowmassSoldListings[4]) + Number(oldSnowmassSoldListings[5]) + Number(oldSnowmassSoldListings[6]) + Number(oldSnowmassSoldListings[7]) + Number(oldSnowmassSoldListings[8]) + Number(oldSnowmassSoldListings[9]) + Number(oldSnowmassSoldListings[10]) + Number(oldSnowmassSoldListings[11])


    var oldSnowmassActiveAvgPrice = document.getElementById("oldSnowmassActiveAvgPrice").innerHTML;
    oldSnowmassActiveAvgPrice = oldSnowmassActiveAvgPrice.split(",");
    oldSnowmassActiveAvgPrice = Number(oldSnowmassActiveAvgPrice[0]).toLocaleString();

    var oldSnowmassSoldAvgPrice = document.getElementById("oldSnowmassSoldAvgPrice").innerHTML;
    oldSnowmassSoldAvgPrice = oldSnowmassSoldAvgPrice.split(",");
    oldSnowmassSoldAvgPrice = Number(oldSnowmassSoldAvgPrice[0]) + Number(oldSnowmassSoldAvgPrice[1]) + Number(oldSnowmassSoldAvgPrice[2]) + Number(oldSnowmassSoldAvgPrice[3]) + Number(oldSnowmassSoldAvgPrice[4]) + Number(oldSnowmassSoldAvgPrice[5]) + Number(oldSnowmassSoldAvgPrice[6]) + Number(oldSnowmassSoldAvgPrice[7]) + Number(oldSnowmassSoldAvgPrice[8]) + Number(oldSnowmassSoldAvgPrice[9]) + Number(oldSnowmassSoldAvgPrice[10]) + Number(oldSnowmassSoldAvgPrice[11]);
    oldSnowmassSoldAvgPrice = Number(oldSnowmassSoldAvgPrice) / Number(12);
    oldSnowmassSoldAvgPrice = Number(oldSnowmassSoldAvgPrice).toLocaleString();



    var oldSnowmassSoldMedianPrice = document.getElementById("oldSnowmassSoldMedianPrice").innerHTML;
    oldSnowmassSoldMedianPrice = oldSnowmassSoldMedianPrice.split(",");
    oldSnowmassSoldMedianPrice = Number(oldSnowmassSoldMedianPrice[0]) + Number(oldSnowmassSoldMedianPrice[1]) + Number(oldSnowmassSoldMedianPrice[2]) + Number(oldSnowmassSoldMedianPrice[3]) + Number(oldSnowmassSoldMedianPrice[4]) + Number(oldSnowmassSoldMedianPrice[5]) + Number(oldSnowmassSoldMedianPrice[6]) + Number(oldSnowmassSoldMedianPrice[7]) + Number(oldSnowmassSoldMedianPrice[8]) + Number(oldSnowmassSoldMedianPrice[9]) + Number(oldSnowmassSoldMedianPrice[10]) + Number(oldSnowmassSoldMedianPrice[11]);
    oldSnowmassSoldMedianPrice = Number(oldSnowmassSoldMedianPrice) / Number(12);
    oldSnowmassSoldMedianPrice = Number(oldSnowmassSoldMedianPrice).toLocaleString();

    var oldSnowmassAverageDom = document.getElementById("oldSnowmassAverageDom").innerHTML;
    oldSnowmassAverageDom = oldSnowmassAverageDom.split(",");
    oldSnowmassAverageDom = Number(oldSnowmassAverageDom[0]) + Number(oldSnowmassAverageDom[1]) + Number(oldSnowmassAverageDom[2]) + Number(oldSnowmassAverageDom[3]) + Number(oldSnowmassAverageDom[4]) + Number(oldSnowmassAverageDom[5]) + Number(oldSnowmassAverageDom[6]) + Number(oldSnowmassAverageDom[7]) + Number(oldSnowmassAverageDom[8]) + Number(oldSnowmassAverageDom[9]) + Number(oldSnowmassAverageDom[10]) + Number(oldSnowmassAverageDom[11]);
    oldSnowmassAverageDom = Number(oldSnowmassAverageDom) / Number(12);



    var basaltProperActiveListingsDate = document.getElementById("basaltProperActiveListings-dates").innerHTML;
    basaltProperActiveListingsDate = basaltProperActiveListingsDate.split(",");

    var basaltProperActiveListings = document.getElementById("basaltProperActiveListings").innerHTML;
    basaltProperActiveListings = basaltProperActiveListings.split(",");

    var basaltProperSoldListings = document.getElementById("basaltProperSoldListings").innerHTML;
    basaltProperSoldListings = basaltProperSoldListings.split(",");
    basaltProperSoldListings = Number(basaltProperSoldListings[0]) + Number(basaltProperSoldListings[1]) + Number(basaltProperSoldListings[2]) + Number(basaltProperSoldListings[3]) + Number(basaltProperSoldListings[4]) + Number(basaltProperSoldListings[5]) + Number(basaltProperSoldListings[6]) + Number(basaltProperSoldListings[7]) + Number(basaltProperSoldListings[8]) + Number(basaltProperSoldListings[9]) + Number(basaltProperSoldListings[10]) + Number(basaltProperSoldListings[11])


    var basaltProperActiveAvgPrice = document.getElementById("basaltProperActiveAvgPrice").innerHTML;
    basaltProperActiveAvgPrice = basaltProperActiveAvgPrice.split(",");
    basaltProperActiveAvgPrice = Number(basaltProperActiveAvgPrice[0]).toLocaleString();

    var basaltProperSoldAvgPrice = document.getElementById("basaltProperSoldAvgPrice").innerHTML;
    basaltProperSoldAvgPrice = basaltProperSoldAvgPrice.split(",");
    basaltProperSoldAvgPrice = Number(basaltProperSoldAvgPrice[0]) + Number(basaltProperSoldAvgPrice[1]) + Number(basaltProperSoldAvgPrice[2]) + Number(basaltProperSoldAvgPrice[3]) + Number(basaltProperSoldAvgPrice[4]) + Number(basaltProperSoldAvgPrice[5]) + Number(basaltProperSoldAvgPrice[6]) + Number(basaltProperSoldAvgPrice[7]) + Number(basaltProperSoldAvgPrice[8]) + Number(basaltProperSoldAvgPrice[9]) + Number(basaltProperSoldAvgPrice[10]) + Number(basaltProperSoldAvgPrice[11]);
    basaltProperSoldAvgPrice = Number(basaltProperSoldAvgPrice) / Number(12);
    basaltProperSoldAvgPrice = Number(basaltProperSoldAvgPrice).toLocaleString();



    var basaltProperSoldMedianPrice = document.getElementById("basaltProperSoldMedianPrice").innerHTML;
    basaltProperSoldMedianPrice = basaltProperSoldMedianPrice.split(",");
    basaltProperSoldMedianPrice = Number(basaltProperSoldMedianPrice[0]) + Number(basaltProperSoldMedianPrice[1]) + Number(basaltProperSoldMedianPrice[2]) + Number(basaltProperSoldMedianPrice[3]) + Number(basaltProperSoldMedianPrice[4]) + Number(basaltProperSoldMedianPrice[5]) + Number(basaltProperSoldMedianPrice[6]) + Number(basaltProperSoldMedianPrice[7]) + Number(basaltProperSoldMedianPrice[8]) + Number(basaltProperSoldMedianPrice[9]) + Number(basaltProperSoldMedianPrice[10]) + Number(basaltProperSoldMedianPrice[11]);
    basaltProperSoldMedianPrice = Number(basaltProperSoldMedianPrice) / Number(12);
    basaltProperSoldMedianPrice = Number(basaltProperSoldMedianPrice).toLocaleString();

    var basaltProperAverageDom = document.getElementById("basaltProperAverageDom").innerHTML;
    basaltProperAverageDom = basaltProperAverageDom.split(",");
    basaltProperAverageDom = Number(basaltProperAverageDom[0]) + Number(basaltProperAverageDom[1]) + Number(basaltProperAverageDom[2]) + Number(basaltProperAverageDom[3]) + Number(basaltProperAverageDom[4]) + Number(basaltProperAverageDom[5]) + Number(basaltProperAverageDom[6]) + Number(basaltProperAverageDom[7]) + Number(basaltProperAverageDom[8]) + Number(basaltProperAverageDom[9]) + Number(basaltProperAverageDom[10]) + Number(basaltProperAverageDom[11]);
    basaltProperAverageDom = Number(basaltProperAverageDom) / Number(12);


    var elJebelActiveListingsDate = document.getElementById("elJebelActiveListings-dates").innerHTML;
    elJebelActiveListingsDate = elJebelActiveListingsDate.split(",");

    var elJebelActiveListings = document.getElementById("elJebelActiveListings").innerHTML;
    elJebelActiveListings = elJebelActiveListings.split(",");

    var elJebelSoldListings = document.getElementById("elJebelSoldListings").innerHTML;
    elJebelSoldListings = elJebelSoldListings.split(",");
    elJebelSoldListings = Number(elJebelSoldListings[0]) + Number(elJebelSoldListings[1]) + Number(elJebelSoldListings[2]) + Number(elJebelSoldListings[3]) + Number(elJebelSoldListings[4]) + Number(elJebelSoldListings[5]) + Number(elJebelSoldListings[6]) + Number(elJebelSoldListings[7]) + Number(elJebelSoldListings[8]) + Number(elJebelSoldListings[9]) + Number(elJebelSoldListings[10]) + Number(elJebelSoldListings[11])


    var elJebelActiveAvgPrice = document.getElementById("elJebelActiveAvgPrice").innerHTML;
    elJebelActiveAvgPrice = elJebelActiveAvgPrice.split(",");
    elJebelActiveAvgPrice = Number(elJebelActiveAvgPrice[0]).toLocaleString();

    var elJebelSoldAvgPrice = document.getElementById("elJebelSoldAvgPrice").innerHTML;
    elJebelSoldAvgPrice = elJebelSoldAvgPrice.split(",");
    elJebelSoldAvgPrice = Number(elJebelSoldAvgPrice[0]) + Number(elJebelSoldAvgPrice[1]) + Number(elJebelSoldAvgPrice[2]) + Number(elJebelSoldAvgPrice[3]) + Number(elJebelSoldAvgPrice[4]) + Number(elJebelSoldAvgPrice[5]) + Number(elJebelSoldAvgPrice[6]) + Number(elJebelSoldAvgPrice[7]) + Number(elJebelSoldAvgPrice[8]) + Number(elJebelSoldAvgPrice[9]) + Number(elJebelSoldAvgPrice[10]) + Number(elJebelSoldAvgPrice[11]);
    elJebelSoldAvgPrice = Number(elJebelSoldAvgPrice) / Number(12);
    elJebelSoldAvgPrice = Number(elJebelSoldAvgPrice).toLocaleString();



    var elJebelSoldMedianPrice = document.getElementById("elJebelSoldMedianPrice").innerHTML;
    elJebelSoldMedianPrice = elJebelSoldMedianPrice.split(",");
    elJebelSoldMedianPrice = Number(elJebelSoldMedianPrice[0]) + Number(elJebelSoldMedianPrice[1]) + Number(elJebelSoldMedianPrice[2]) + Number(elJebelSoldMedianPrice[3]) + Number(elJebelSoldMedianPrice[4]) + Number(elJebelSoldMedianPrice[5]) + Number(elJebelSoldMedianPrice[6]) + Number(elJebelSoldMedianPrice[7]) + Number(elJebelSoldMedianPrice[8]) + Number(elJebelSoldMedianPrice[9]) + Number(elJebelSoldMedianPrice[10]) + Number(elJebelSoldMedianPrice[11]);
    elJebelSoldMedianPrice = Number(elJebelSoldMedianPrice) / Number(12);
    elJebelSoldMedianPrice = Number(elJebelSoldMedianPrice).toLocaleString();

    var elJebelAverageDom = document.getElementById("elJebelAverageDom").innerHTML;
    elJebelAverageDom = elJebelAverageDom.split(",");
    elJebelAverageDom = Number(elJebelAverageDom[0]) + Number(elJebelAverageDom[1]) + Number(elJebelAverageDom[2]) + Number(elJebelAverageDom[3]) + Number(elJebelAverageDom[4]) + Number(elJebelAverageDom[5]) + Number(elJebelAverageDom[6]) + Number(elJebelAverageDom[7]) + Number(elJebelAverageDom[8]) + Number(elJebelAverageDom[9]) + Number(elJebelAverageDom[10]) + Number(elJebelAverageDom[11]);
    elJebelAverageDom = Number(elJebelAverageDom) / Number(12);


    var carbondaleProperActiveListingsDate = document.getElementById("carbondaleProperActiveListings-dates").innerHTML;
    carbondaleProperActiveListingsDate = carbondaleProperActiveListingsDate.split(",");

    var carbondaleProperActiveListings = document.getElementById("carbondaleProperActiveListings").innerHTML;
    carbondaleProperActiveListings = carbondaleProperActiveListings.split(",");

    var carbondaleProperSoldListings = document.getElementById("carbondaleProperSoldListings").innerHTML;
    carbondaleProperSoldListings = carbondaleProperSoldListings.split(",");
    carbondaleProperSoldListings = Number(carbondaleProperSoldListings[0]) + Number(carbondaleProperSoldListings[1]) + Number(carbondaleProperSoldListings[2]) + Number(carbondaleProperSoldListings[3]) + Number(carbondaleProperSoldListings[4]) + Number(carbondaleProperSoldListings[5]) + Number(carbondaleProperSoldListings[6]) + Number(carbondaleProperSoldListings[7]) + Number(carbondaleProperSoldListings[8]) + Number(carbondaleProperSoldListings[9]) + Number(carbondaleProperSoldListings[10]) + Number(carbondaleProperSoldListings[11])


    var carbondaleProperActiveAvgPrice = document.getElementById("carbondaleProperActiveAvgPrice").innerHTML;
    carbondaleProperActiveAvgPrice = carbondaleProperActiveAvgPrice.split(",");
    carbondaleProperActiveAvgPrice = Number(carbondaleProperActiveAvgPrice[0]).toLocaleString();

    var carbondaleProperSoldAvgPrice = document.getElementById("carbondaleProperSoldAvgPrice").innerHTML;
    carbondaleProperSoldAvgPrice = carbondaleProperSoldAvgPrice.split(",");
    carbondaleProperSoldAvgPrice = Number(carbondaleProperSoldAvgPrice[0]) + Number(carbondaleProperSoldAvgPrice[1]) + Number(carbondaleProperSoldAvgPrice[2]) + Number(carbondaleProperSoldAvgPrice[3]) + Number(carbondaleProperSoldAvgPrice[4]) + Number(carbondaleProperSoldAvgPrice[5]) + Number(carbondaleProperSoldAvgPrice[6]) + Number(carbondaleProperSoldAvgPrice[7]) + Number(carbondaleProperSoldAvgPrice[8]) + Number(carbondaleProperSoldAvgPrice[9]) + Number(carbondaleProperSoldAvgPrice[10]) + Number(carbondaleProperSoldAvgPrice[11]);
    carbondaleProperSoldAvgPrice = Number(carbondaleProperSoldAvgPrice) / Number(12);
    carbondaleProperSoldAvgPrice = Number(carbondaleProperSoldAvgPrice).toLocaleString();



    var carbondaleProperSoldMedianPrice = document.getElementById("carbondaleProperSoldMedianPrice").innerHTML;
    carbondaleProperSoldMedianPrice = carbondaleProperSoldMedianPrice.split(",");
    carbondaleProperSoldMedianPrice = Number(carbondaleProperSoldMedianPrice[0]) + Number(carbondaleProperSoldMedianPrice[1]) + Number(carbondaleProperSoldMedianPrice[2]) + Number(carbondaleProperSoldMedianPrice[3]) + Number(carbondaleProperSoldMedianPrice[4]) + Number(carbondaleProperSoldMedianPrice[5]) + Number(carbondaleProperSoldMedianPrice[6]) + Number(carbondaleProperSoldMedianPrice[7]) + Number(carbondaleProperSoldMedianPrice[8]) + Number(carbondaleProperSoldMedianPrice[9]) + Number(carbondaleProperSoldMedianPrice[10]) + Number(carbondaleProperSoldMedianPrice[11]);
    carbondaleProperSoldMedianPrice = Number(carbondaleProperSoldMedianPrice) / Number(12);
    carbondaleProperSoldMedianPrice = Number(carbondaleProperSoldMedianPrice).toLocaleString();

    var carbondaleProperAverageDom = document.getElementById("carbondaleProperAverageDom").innerHTML;
    carbondaleProperAverageDom = carbondaleProperAverageDom.split(",");
    carbondaleProperAverageDom = Number(carbondaleProperAverageDom[0]) + Number(carbondaleProperAverageDom[1]) + Number(carbondaleProperAverageDom[2]) + Number(carbondaleProperAverageDom[3]) + Number(carbondaleProperAverageDom[4]) + Number(carbondaleProperAverageDom[5]) + Number(carbondaleProperAverageDom[6]) + Number(carbondaleProperAverageDom[7]) + Number(carbondaleProperAverageDom[8]) + Number(carbondaleProperAverageDom[9]) + Number(carbondaleProperAverageDom[10]) + Number(carbondaleProperAverageDom[11]);
    carbondaleProperAverageDom = Number(carbondaleProperAverageDom) / Number(12);



    var polygons = [{
            name: "Smuggler<hr><br>",
            dates: "YTD:" + smugglerActiveListingsDate[0] + " - " + smugglerActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + carbondaleProperActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + smugglerSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + smugglerActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + smugglerSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + smugglerSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + smugglerAverageDom,
            coordinates: [{
                lat: 39.19333,
                lng: -106.79816
            }, {
                lat: 39.19482,
                lng: -106.79781
            }, {
                lat: 39.19677,
                lng: -106.79884
            }, {
                lat: 39.19927,
                lng: -106.80311
            }, {
                lat: 39.19967,
                lng: -106.80516
            }, {
                lat: 39.19999,
                lng: -106.80722
            }, {
                lat: 39.19972,
                lng: -106.80927
            }, {
                lat: 39.19824,
                lng: -106.81321
            }, {
                lat: 39.1959,
                lng: -106.81663
            }, {
                lat: 39.1944,
                lng: -106.81632
            }, {
                lat: 39.19289,
                lng: -106.81618
            }, {
                lat: 39.18977,
                lng: -106.81171
            }, {
                lat: 39.18982,
                lng: -106.8024
            }, {
                lat: 39.19228,
                lng: -106.79869
            }, ]
        },
        {
            name: "Central Core<hr><br>",
            dates: "YTD:" + centralCoreActiveListingsDate[0] + " - " + centralCoreActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + centralCoreActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + centralCoreSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + centralCoreActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + centralCoreSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + centralCoreSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + centralCoreAverageDom,
            coordinates: [{
                lat: 39.18834,
                lng: -106.81163
            }, {
                lat: 39.19025,
                lng: -106.81446
            }, {
                lat: 39.19156,
                lng: -106.81873
            }, {
                lat: 39.192,
                lng: -106.82377
            }, {
                lat: 39.19051,
                lng: -106.82942
            }, {
                lat: 39.18914,
                lng: -106.82996
            }, {
                lat: 39.18763,
                lng: -106.82982
            }, {
                lat: 39.18331,
                lng: -106.82699
            }, {
                lat: 39.18184,
                lng: -106.81553
            }]
        }, {
            name: "West End<hr><br>",
            dates: "YTD:" + westEndActiveListingsDate[0] + " - " + westEndActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + westEndActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + westEndSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + westEndActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + westEndSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + westEndSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + westEndAverageDom,
            coordinates: [{
                lat: 39.202447,
                lng: -106.829973
            }, {
                lat: 39.187813,
                lng: -106.832548
            }, {
                lat: 39.185817,
                lng: -106.828428
            }, {
                lat: 39.186216,
                lng: -106.82654
            }, {
                lat: 39.193933,
                lng: -106.823794
            }, {
                lat: 39.19952,
                lng: -106.821562
            }]
        }, {
            name: "East Aspen<hr><br>",
            dates: "YTD:" + eastAspenActiveListingsDate[0] + " - " + eastAspenActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + eastAspenActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + eastAspenSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + eastAspenActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + eastAspenSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + eastAspenSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + eastAspenAverageDom,
            coordinates: [{
                lat: 39.188033,
                lng: -106.806871
            }, {
                lat: 39.186836,
                lng: -106.7964
            }, {
                lat: 39.177388,
                lng: -106.795198
            }, {
                lat: 39.174461,
                lng: -106.802537
            }, {
                lat: 39.179917,
                lng: -106.811463
            }]
        }, {
            name: "Red MTN<hr><br>",
            dates: "YTD:" + redMtnActiveListingsDate[0] + " - " + redMtnActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + redMtnActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + redMtnSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + redMtnActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + redMtnSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + redMtnSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + redMtnAverageDom,
            coordinates: [{
                lat: 39.212316,
                lng: -106.813942
            }, {
                lat: 39.210055,
                lng: -106.806217
            }, {
                lat: 39.203803,
                lng: -106.803127
            }, {
                lat: 39.198216,
                lng: -106.80656
            }, {
                lat: 39.195289,
                lng: -106.814113
            }, {
                lat: 39.196886,
                lng: -106.81995
            }, {
                lat: 39.20101,
                lng: -106.824241
            }, {
                lat: 39.204468,
                lng: -106.824756
            }, {
                lat: 39.209523,
                lng: -106.822525
            }]
        }, {
            name: "West Aspen<hr><br>",
            dates: "YTD:" + westAspenActiveListingsDate[0] + " - " + westAspenActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + westAspenActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + westAspenSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + westAspenActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + westAspenSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + westAspenSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + westAspenAverageDom,
            coordinates: [{
                lat: 39.213052,
                lng: -106.854218
            }, {
                lat: 39.20986,
                lng: -106.868637
            }, {
                lat: 39.19842,
                lng: -106.876877
            }, {
                lat: 39.186979,
                lng: -106.874131
            }, {
                lat: 39.180326,
                lng: -106.865891
            }, {
                lat: 39.178463,
                lng: -106.853875
            }, {
                lat: 39.182189,
                lng: -106.840142
            }, {
                lat: 39.189906,
                lng: -106.832589
            }, {
                lat: 39.200549,
                lng: -106.832589
            }, {
                lat: 39.208264,
                lng: -106.838768
            }, {
                lat: 39.213584,
                lng: -106.851815
            }, {
                lat: 39.211456,
                lng: -106.861428
            }]
        }, {
            name: "Mclain Flats<hr><br>",
            dates: "YTD:" + mclainFlatsActiveListingsDate[0] + " - " + mclainFlatsActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + mclainFlatsActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + mclainFlatsSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + mclainFlatsActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + mclainFlatsSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + mclainFlatsSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + mclainFlatsAverageDom,
            coordinates: [{
                lat: 39.212004,
                lng: -106.843254
            }, {
                lat: 39.234612,
                lng: -106.868659
            }, {
                lat: 39.240994,
                lng: -106.86557
            }, {
                lat: 39.242323,
                lng: -106.851493
            }, {
                lat: 39.233016,
                lng: -106.842224
            }, {
                lat: 39.225836,
                lng: -106.83673
            }, {
                lat: 39.216526,
                lng: -106.83673
            }]
        }, {
            name: "Snowmass Village<hr><br>",
            dates: "YTD:" + snowmassVillageActiveListingsDate[0] + " - " + snowmassVillageActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + snowmassVillageActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + snowmassVillageSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + snowmassVillageActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + snowmassVillageSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + snowmassVillageSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + snowmassVillageAverageDom,
            coordinates: [{
                lat: 39.231061,
                lng: -106.927559
            }, {
                lat: 39.212975,
                lng: -106.962578
            }, {
                lat: 39.194884,
                lng: -106.957772
            }, {
                lat: 39.199673,
                lng: -106.935113
            }, {
                lat: 39.210315,
                lng: -106.911767
            }, {
                lat: 39.225742,
                lng: -106.917946
            }]
        }, {
            name: "Brush Creek<hr><br>",
            dates: "YTD:" + brushCreekActiveListingsDate[0] + " - " + brushCreekActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + brushCreekActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + brushCreekSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + brushCreekActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + brushCreekSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + brushCreekSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + brushCreekAverageDom,
            coordinates: [{
                lat: 39.231593,
                lng: -106.922753
            }, {
                lat: 39.26084,
                lng: -106.892541
            }, {
                lat: 39.25765,
                lng: -106.881554
            }, {
                lat: 39.245952,
                lng: -106.879494
            }, {
                lat: 39.219359,
                lng: -106.910393
            }]
        }, {
            name: "Woody Creek<hr><br>",
            dates: "YTD:" + woodyCreekActiveListingsDate[0] + " - " + woodyCreekActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + woodyCreekActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + woodyCreekSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + woodyCreekActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + woodyCreekSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + woodyCreekSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + woodyCreekAverageDom,
            coordinates: [{
                lat: 39.303654,
                lng: -106.884619
            }, {
                lat: 39.296215,
                lng: -106.903158
            }, {
                lat: 39.283461,
                lng: -106.911398
            }, {
                lat: 39.267515,
                lng: -106.909338
            }, {
                lat: 39.258477,
                lng: -106.901098
            }, {
                lat: 39.253692,
                lng: -106.888052
            }, {
                lat: 39.254224,
                lng: -106.866079
            }, {
                lat: 39.25954,
                lng: -106.852346
            }, {
                lat: 39.271767,
                lng: -106.84548
            }, {
                lat: 39.284524,
                lng: -106.846166
            }, {
                lat: 39.292496,
                lng: -106.852346
            }, {
                lat: 39.298872,
                lng: -106.861273
            }, {
                lat: 39.302592,
                lng: -106.868139
            }]
        }, {
            name: "Old Snowmass<hr><br>",
            dates: "YTD:" + oldSnowmassActiveListingsDate[0] + " - " + oldSnowmassActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + oldSnowmassActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + oldSnowmassSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + oldSnowmassActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + oldSnowmassSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + oldSnowmassSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + oldSnowmassAverageDom,
            coordinates: [{
                lat: 39.344491,
                lng: -106.991661
            }, {
                lat: 39.337587,
                lng: -107.002647
            }, {
                lat: 39.330152,
                lng: -107.006767
            }, {
                lat: 39.320591,
                lng: -107.00608
            }, {
                lat: 39.312622,
                lng: -107.002647
            }, {
                lat: 39.306778,
                lng: -106.993721
            }, {
                lat: 39.304653,
                lng: -106.983421
            }, {
                lat: 39.306247,
                lng: -106.971061
            }, {
                lat: 39.311029,
                lng: -106.960075
            }, {
                lat: 39.317404,
                lng: -106.953895
            }, {
                lat: 39.328027,
                lng: -106.951835
            }, {
                lat: 39.338118,
                lng: -106.955955
            }, {
                lat: 39.34396,
                lng: -106.966255
            }, {
                lat: 39.346084,
                lng: -106.974495
            }]
        }, {
            name: "Basalt Proper<hr><br>",
            dates: "YTD:" + basaltProperActiveListingsDate[0] + " - " + basaltProperActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + basaltProperActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + basaltProperSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + basaltProperActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + basaltProperSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + basaltProperSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + basaltProperAverageDom,
            coordinates: [{
                lat: 39.375498,
                lng: -107.031466
            }, {
                lat: 39.374834,
                lng: -107.035243
            }, {
                lat: 39.372711,
                lng: -107.04005
            }, {
                lat: 39.370853,
                lng: -107.043139
            }, {
                lat: 39.368862,
                lng: -107.043998
            }, {
                lat: 39.365677,
                lng: -107.043483
            }, {
                lat: 39.361563,
                lng: -107.041938
            }, {
                lat: 39.358245,
                lng: -107.039878
            }, {
                lat: 39.356254,
                lng: -107.036616
            }, {
                lat: 39.355989,
                lng: -107.029407
            }, {
                lat: 39.357847,
                lng: -107.024257
            }, {
                lat: 39.360634,
                lng: -107.019279
            }, {
                lat: 39.363687,
                lng: -107.018764
            }, {
                lat: 39.367403,
                lng: -107.019107
            }, {
                lat: 39.371782,
                lng: -107.018935
            }, {
                lat: 39.373773,
                lng: -107.020137
            }, {
                lat: 39.374834,
                lng: -107.023742
            }, {
                lat: 39.375498,
                lng: -107.027862
            }]
        }

        , {
            name: "El Jebel<hr><br>",
            dates: "YTD:" + elJebelActiveListingsDate[0] + " - " + elJebelActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + elJebelActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + elJebelSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + elJebelActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + elJebelSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + elJebelSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + elJebelAverageDom,
            coordinates: [{
                lat: 39.418212,
                lng: -107.098844
            }, {
                lat: 39.42166,
                lng: -107.089917
            }, {
                lat: 39.418743,
                lng: -107.077558
            }, {
                lat: 39.402032,
                lng: -107.067601
            }, {
                lat: 39.379478,
                lng: -107.052838
            }, {
                lat: 39.368066,
                lng: -107.045629
            }, {
                lat: 39.363554,
                lng: -107.065198
            }, {
                lat: 39.375763,
                lng: -107.085797
            }]
        }, {
            name: "Carbondale Proper<hr><br>",
            dates: "YTD:" + carbondaleProperActiveListingsDate[0] + " - " + carbondaleProperActiveListingsDate[11] + "<br><br>",
            listings: "Active Listings:" + carbondaleProperActiveListings[0] + "<br><br>",
            soldListings: "Sold Listings YTD: " + carbondaleProperSoldListings + "<br><br>",
            ActiveAvgPrice: "Active Average list price $" + carbondaleProperActiveAvgPrice + "<br><br>",
            SoldAvgPrice: "Avg sold Price YTD: $" + carbondaleProperSoldAvgPrice + "<br><br>",
            SoldMedianPrice: "SoldMedianPrice YTD: $" + carbondaleProperSoldMedianPrice + "<br><br>",
            AverageDom: "Average Day on Market " + carbondaleProperAverageDom,
            coordinates: [{
                lat: 39.435019,
                lng: -107.250672
            }, {
                lat: 39.448806,
                lng: -107.203293
            }, {
                lat: 39.434488,
                lng: -107.173767
            }, {
                lat: 39.404253,
                lng: -107.166214
            }, {
                lat: 39.37825,
                lng: -107.182694
            }, {
                lat: 39.377189,
                lng: -107.2081
            }, {
                lat: 39.381966,
                lng: -107.234192
            }]
        }








    ];


    // foreach your polygons
    for (var i = 0; i < polygons.length; i++) {
        var item = polygons[i];

        var coors = item["coordinates"];
        var name = item["name"] + item["dates"] + item["listings"] + item["soldListings"] + item["ActiveAvgPrice"] + item["SoldAvgPrice"] + item["SoldMedianPrice"] + item["AverageDom"];




        var Polygon = new google.maps.Polygon({
            path: coors,
            strokeColor: '#66b3ff',
            strokeOpacity: 0.8,
            strokeWeight: 5,
            editable: false,
            fillColor: 'blue',
            fillOpacity: 0.5,
        });
        Polygon.setMap(map);

        // call function to set window
        attachPolygonInfoWindow(Polygon, coors, name);
    }

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the ' +
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
        'south west of the nearest large town, Alice Springs; 450&#160;km ' +
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        'Aboriginal people of the area. It has many springs, waterholes, ' +
        'rock caves and ancient paintings. Uluru is listed as a World ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        '(last visited June 22, 2009).</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

    // var marker = new google.maps.Marker({
    //    position: { lat: 39.191097, lng: -106.817535 },
    //    map: map,
    //    title: 'Uluru (Ayers Rock)'
    // });
    // marker.addListener('click', function () {
    //     infowindow.open(map, marker);
    //});
}


function attachPolygonInfoWindow(polygon, coors, html) {

    polygon.infoWindow = new google.maps.InfoWindow({
        content: html


    });

    polygon.infoWindow.setPosition(getHighestWindowPosition(coors));

    google.maps.event.addListener(polygon, 'mouseover', function () {
        polygon.infoWindow.open(map, polygon);
    });
    google.maps.event.addListener(polygon, 'mouseout', function () {
        polygon.infoWindow.close();
    });
}

// function to get highest position of polygon to show window nice on top
function getHighestWindowPosition(coors) {

    var lat = -5000,
        lng = 0,
        i = 0,
        n = coors.length;

    for (; i !== n; ++i) {
        if (coors[i].lat > lat) {
            lat = coors[i].lat;
            lng = coors[i].lng;
        }
    }
    return {
        lat: lat,
        lng: lng
    };
}