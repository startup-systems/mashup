
<!DOCTYPE html>
<html>
  <head>
    <title>Mashup</title>
    <meta charset="utf-8">
    <title> TRY googlemap </title>
    <meta charset="utf-8">
  	<meta name="viewport" content="width=device-width">
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>   
    <script type="text/javascript">  
       function Map(){
         var location = document.getElementById("address").value;     
         $.ajax({
             url: "https://maps.googleapis.com/maps/api/geocode/json?address="+location+"&key=AIzaSyBNNRYFdgYqPMPaWvgFjZD9dAeR06Kii1c",
             success: function (data) {
                 var result = JSON.parse(data);
                 alert(result.results[0].geometry);
             },
             success: function (data) {
               $("#resultarea").text(data);
               var result = JSON.parse(data);
             },
             error: function () {
                 alert("Wrong input!");
             }
         });
       }
     </script>
  </head>
  
  
  <body>
     <form>
       Destiny:<br>
       <input type="text" id="address"><br>
       <input type="button" value="GO" onclick="Map()"/>
     </form>

    <div id="map"></div>
     <script>
       var map;
       function initMap() {
                 
                   canter = {lat: 41, lng: -75};
                   var geocoder = new google.maps.Geocoder();
                   var map = new google.maps.Map(document.getElementById('map'), {
                   zoom: 7,
                   });
       }
     </script>   
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNNRYFdgYqPMPaWvgFjZD9dAeR06Kii1c&callback=initMap">
    </script>
  </body>
</html>
