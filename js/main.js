///Google Map API:

function initMap(ipLng, ipLat){
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: ipLat, lng: ipLng},
    zoom: 8
  });
  var marker = new google.maps.Marker({
          position: {lat: ipLat, lng: ipLng},
          map: map
        });
}
//WHOIS API:

function main(){
  var ipLng;
  var ipLat;
  $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
      var table_body = "";
      $.each(data, function(k, v) {
         table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
      });
      $("#whois").html(table_body);
      initMap(data.lon, data.lat);
      console.log(data.lon, data.lat);
    });
/*    $.ajax({
      url: "http://ip-api.com/json/?callback=?",
      type: "GET",
      dataType : "json",
    })

  .done(function(data) {
    var table_body = "";
    $.each(data, function(k, v) {
    table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
    });
    $("#whois").html(table_body);
    initMap(data.lon, data.lat);
    console.log(data.lon, data.lat);
  })

  .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })

  .always(function( xhr, status ) {
    alert( "The request is complete!" );
  });
*/
}
