var latitude = [];
var longitude = [];
function myMap() {
  $.getJSON( "https://api.meetup.com/2/cities.json?callback=?", function(data) {
  	$.each(data, function() {
  		for (i = 0; i < data.results.length; i++) {
  			latitude[i] = data.results[i].lat;
  			longitude[i] = data.results[i].lon;
  		}
  		var mapCanvas = document.getElementById("map");
  		var mapOptions = {
  		  center: new google.maps.LatLng(40.7128,-74.0059),
  		  zoom: 8
  		};
  		var map = new google.maps.Map(mapCanvas, mapOptions);
  		for (i = 0; i < 200; i++) {
  			  var Marker = new google.maps.Marker({
  			  position: new google.maps.LatLng(latitude[i], longitude[i]),
  			});
  			 Marker.setMap(map);
  		}
  	});
  });
}
