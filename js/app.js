$.ajax('https://www.reddit.com/r/funny/new/.json', {
    success: function(data) {
      console.log('Got:', data);
      $(data.data.children).each(function(idx, val){
        //val.title
        //val.url
        //'//reddit.com' + val.permalink
        elm = "<div class='col-lg-3 col-md-4 col-xs-6 thumb'>" +
               "<a class='thumbnail' href='" + val.data.url + "'>" +
                    "<img class='img-responsive' src='" + val.data.thumbnail + "' alt='No Image'>" +
                "</a>" +
              "<p>" + val.data.title + "</p>" +
            "</div>";
        $("#list").append(elm);
      });
    },
    error: function(err) {
      console.log('Got:', err);
    }
});