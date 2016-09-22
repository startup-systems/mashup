$(document).ready(function() {
	//get directions data
	$.ajax({
		type: 'GET',
		url: "https://montanaflynn-mapit.p.mashape.com/directions?ending=New+York%2C+NY%2C+USA&starting=Orange+County%2C+CA",
		dataType:'json',
		beforeSend: function(xhr) {
			xhr.setRequestHeader("X-Mashape-Key", "XXX");
			xhr.setRequestHeader("Accept", "application/json");
		}
	}).done(function(data) {
		for(var i = 0; i < data.directions.length; i++) {
			direction = data.directions[i].direction;
			duration = data.directions[i].duration;
			maneuver = data.directions[i].maneuver;
			distance = data.directions[i].distance;
			if (i===0){
				$( ".directions" ).append( "<div class='row'><p>travel: "+ distance + " before you " +direction+"</p></div>" );
			}
			else{
				$( ".directions" ).append( "<p> yo travel: " + distance + " before you "+maneuver+" "+direction+" (this will take about " + duration + ")</p>" );
			}
			if (i===data.directions.length-1){
				$(".directions").append("<p>YOU MADE IT</p>");
			}
		}
	});

	//get weather data
	$.ajax({
		type: 'GET',
		url: "http://api.openweathermap.org/data/2.5/weather?lat=-33.8665433&lon=151.1956316&APPID=XXX",
		dataType:'json',
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Accept", "application/json");
		}
	}).done(function(data) {
		$( ".weather" ).append( "<div><h3>Weather: </h3> "+data.weather[0].description+"</div>");
		$( ".weather" ).append( "<div><h3>Temp: </h3>"+ Math.round(((data.main.temp - 273.15)*1.8 +32.00)) +" degrees Farenheit</div>");
		$( ".weather" ).append( "<div><h3>Humidity: </h3>"+data.main.humidity+"</div>");
		$( ".weather" ).append( "<div><h3>Wind speed: </h3>"+data.wind.speed+" mph</div>");
	});
});