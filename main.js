$(function() {
  $('#submit').click(function() {
    var zip = $('#zip').val();
    var xmlRequest = $.ajax({
      method: "POST",
      url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&APPID=511eec5990e0d54943a94313496315c3",
    });
    xmlRequest.done(function(msg) {
      console.log(msg.weather[0].description);
      var diff = msg.main.temp_max - msg.main.temp_min;
      console.log(diff);
      $('h1').text(diff + " degrees Kelvin");

      diff = parseInt(diff);
      if (diff >= 6) {
        $('body').css("background-color", 'red');
      } else if (diff >= 3) {
        $('body').css("background-color", 'orange');
      } else {
        $('body').css("background-color", 'yellow');
      }
    });
  });
});
