$(document).ready(function() {
 	$("#button").click(function() {
 		var pokedex = $("#pokedex").val();
 		var url = "https://pokeapi.co/api/v2/pokemon/" + pokedex;
 		$.getJSON(url, function(data) {
      pokemon = data.name;
      weight = data.weight;
      ability = data.abilities[0].ability.name;
      var img = document.createElement("IMG");
      img.src = "https://pokeapi.co/media/img/" + pokedex +".png";
      $("div.display").html("");
      $("div.display").append(img);
      $("div.display").append("<p>" + "You got Pokemon Name: " + pokemon + "<p>");
      $("div.display").append("<p>" + "Weight: " + weight + "<p>");
      $("div.display").append("<p>" + pokemon + " have ability: " + ability + "<p>");
 		});
 	});
 });
