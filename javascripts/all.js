// This is where it all goes :)

//= require jquery
//= require bootstrap

function slideRight(element, delay) {
  $(element).delay(delay).effect("slide", "easeInCubic", 1000);
}

$(document).ready(function() {
  slideRight("#slide-1", 0);
  slideRight("#slide-2", 500);
  slideRight("#slide-3", 1000);
  slideRight("#slide-4", 1500);
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

// $.ajax({
//   url: "http://formspree.io/tpryan_1965@yahoo.com",
//   method: 'POST',
//   data: $('#contact_form').serialize(),
//   dataType: "json",
//   beforeSend: function() {
//     //sending message
//   },
//   success: function(data) {
//     //success message
//   },
//   error: function(err) {
//     //error message
//   }
// });