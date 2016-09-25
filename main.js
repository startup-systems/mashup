$(document).ready(function() {
  $('#submit_city').click(function() {
    var city = $('#city').val();
    // Using the core $.ajax() method
    $.ajax({
 
    // The URL for the request
    url: "https://query.yahooapis.com/v1/public/yql",
 
    // The data to send (will be converted to a query string)
    data: {
        q:"select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "')",
        format:"json",
    },
 
    // Whether this is a POST or GET request
    type: "GET",
 
    // The type of data we expect back
    dataType : "json",
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function( json ) {
    var temp = json.query.results.channel.item.condition.temp;
    document.getElementById("weather").innerHTML = "The current temprature in " + city + " is " + temp + "°F";
    console.log(temp);
  })
  // Code to run if the request fails; the raw request and
  // status codes are passed to the function
  .fail(function( xhr, status, errorThrown ) {
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
  })
  // Code to run regardless of success or failure;
  .always(function( xhr, status ) {
    console.log("The request is complete!");
  });
  });
});