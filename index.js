$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: "https://montanaflynn-mapit.p.mashape.com/directions?ending=New+York%2C+NY%2C+USA&starting=Orange+County%2C+CA",
		dataType:'json',
		beforeSend: function(xhr) {
			xhr.setRequestHeader("X-Mashape-Key", "");
			xhr.setRequestHeader("Accept", "application/json");
		}
	}).done(function(data) {
		var slang = ["sup", "yo","now"];
		for(var i = 0; i < data.directions.length; i++) {
			var direction = data.directions[i].direction;
			var duration = data.directions[i].duration;
			var maneuver = data.directions[i].maneuver;
			var distance = data.directions[i].distance;
			console.log(data.directions[i]);
			if (i===0){
				$( "body" ).append( "<div class='row'><p>travel: "+ distance + " before you " +direction+"</p></div>" );
			}
			else{
				$( "body" ).append( "<p> yo travel: " + distance + " before you "+maneuver+" "+direction+" (this will take about " + duration + ")</p>" );
			}
			if (i===data.directions.length-1){
				$("body").append("<p>YOU MADE IT</p>");
			}
		}
	});
});
