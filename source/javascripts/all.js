// This is where it all goes :)

//= require jquery
//= require bootstrap

$(document).ready(function() {
  $("#fade-1").fadeIn(1000);
  $("#fade-2").fadeIn(1500);
  $("#fade-3").fadeIn(2000);
  $("#fade-4").fadeIn(2500);
});

$(document).ready(function initMap() {
  var mapDiv = document.getElementById('contact_map');
  var center = {lat: 37.8044, lng: -122.2708};
  var map = new google.maps.Map(mapDiv, {
    center: center,
    zoom: 12,
    disableDefaultUI: true,
    scrollwheel: false
  });
  
  var marker = new google.maps.Marker({
    position: center,
    map: map
  });

  map.set('styles', [{
    "featureType": "administrative",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "poi",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road.arterial",
    "stylers": [{
      "color": "#428bca"
    }, {
      "lightness": 60
    }]
  }, {
    "featureType": "road.highway",
    "stylers": [{
      "color": "#428bca"
    }, {
      "lightness": 60
    }]
  }, {
    "featureType": "road.highway.controlled_access",
    "stylers": [{
      "color": "#428bca"
    }, {
      "lightness": 60
    }]
  }, {
    "featureType": "road.local",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "transit",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "water",
    "stylers": [{
      "color": "#428bca"
    }, {
      "lightness": 70
    }]
  }, {
    "featureType": "landscape",
    "stylers": [{
      "color": "#428bca"
    }, {
      "lightness": 50
    }]
  }])
});