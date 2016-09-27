$(document).ready(function() {
 	$("#button").click(function() {
 		var pokedex = $("#pokedex").val();
 		var url = "https://pokeapi.co/api/v2/ability/" + pokedex;
 		$.getJSON(url, function(data) {
      pokemon = data.name;
      generation = data.generation.name;
      effect_entries = data.effect_entries[0].effect;
      $("div.display").append("<p>" + "You got Pokemon Name: " + pokemon + "<p>");
      $("div.display").append("<p>" + "Pokemon Generation: "+ generation + "<p>");
      $("div.display").append("<p>" + "Pokemon Effect Entries are: " + effect_entries + "<p>");
 		});
 	});
 });
