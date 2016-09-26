
function changeContent() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("change").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "readme.md", true);
  xhttp.send();
}


// google maps --------------
	function myMap() {
	  var mapCanvas = document.getElementById("map");
	  var mapOptions = {
	    center: new google.maps.LatLng(51.5, -0.2), 
	    zoom: 10,
	    maptype: "satellite",
	  }
	  var map = new google.maps.Map(mapCanvas, mapOptions);
	}

// soundcloud ---------------

SC.get('/shimieshimshim').then(function(tracks){
  alert('Latest track: ' + tracks[0].title);
});

SC.stream('/shimieshimshim').then(function(player){
  player.play();
});

  (function(){
    var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe);

    widget.bind(SC.Widget.Events.READY, function() {
      widget.bind(SC.Widget.Events.PLAY, function() {
        // get information about currently playing sound
        widget.getCurrentSound(function(currentSound) {
          console.log('sound ' + currentSound.get('') + 'began to play');
        });
      });
      // get current level of volume
      widget.getVolume(function(volume) {
        console.log('current volume value is ' + volume);
      });
      // set new volume level
      widget.setVolume(50);
      // get the value of the current position
    });

  }());