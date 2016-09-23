var SC = require('soundcloud');

SC.initialize({
  client_id: 'shimieshimshim',
});

SC.get('/shimieshimshim').then(function(tracks){
  alert('Latest track: ' + tracks[0].title);
});

SC.stream('/shimieshimshim').then(function(player){
  player.play();
});


	function myMap() {
	  var mapCanvas = document.getElementById("map");
	  var mapOptions = {
	    center: new google.maps.LatLng(51.5, -0.2), 
	    zoom: 10,
	    maptype: "satellite",
	  }
	  var map = new google.maps.Map(mapCanvas, mapOptions);
	}
