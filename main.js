$(document).ready(function() {
	$("#search").click(function() {
		var name = $("#user").val();
		var url = "https://api.github.com/users/" + name + "/repos";
		$.getJSON(url, function(data) {
			for (var i = 0; i < data.length; i++) {
				$("div").append("<p>" + (i + 1) + ": " + data[i].name + "</p>");
			}
		});
	});
});
