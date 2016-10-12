mapboxgl.accessToken = 'pk.eyJ1IjoibHVpc3NlIiwiYSI6ImNpdGoyZ3Q1bjA2eGoybm8zdjFrN2RuMmQifQ.xiEfhxmHUIKN3T3frogq4w';
		var map = new mapboxgl.Map({
		    container: 'map', // container id
		    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
		    center: [-74.50, 40], // starting position
		    zoom: 9 // starting zoom
		});

		// When the map is closed
		map.on('click', function(e) {


			// Get the city name and state of clicked location
			$.get("http://api.wunderground.com/api/4a7a94eca1c51547/geolookup/q/" + e.lngLat.lat + "," + e.lngLat.lng + "-122.395234.json", function(data){
				
				console.log(data);

				var state = data.location.state;
				var city = data.location.city.split(' ').join('_'); // replace spaces with underscores


				// Get the weather for a US city in JSON
				$.get("http://api.wunderground.com/api/4a7a94eca1c51547/conditions/q/" + state + "/" + city + ".json", function(response){

					console.log(response);

					alert("The temperature in " + city + ", " + state + " is " + response.current_observation.temp_f + " degrees, but feels like " + response.current_observation.feelslike_f + " degrees;");

				});

			});

		});