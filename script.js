$(document).ready(function() {
 
    $("button#showJSONBtn").click(function( event ) {
        var div = $("div#JSONContentHolder");
        div.empty(); //To prevent endless appending after several clicks
        var userid = $("input").val();
        $.ajax({
            url: "https://api.github.com/users/" + userid,
            type: "GET",
            dataType: "json",
        })
        .done(function(json){
            console.log(div);
            $( "<p class=\"red\">" ).text("The github username is: " + json.login ).appendTo(div);
            $( "<a>").attr("href", json.url).appendTo(div);
            $("<p class=\"red\">").text('Details').appendTo("a");
        })
        .fail(function( xhr, status, errorThrown ) {
            alert( "Sorry, there was a problem!" );
            console.log( "Error: " + errorThrown );
            console.log( "Status: " + status );
            console.dir( xhr );
        });
        // .always(function( xhr, status ) {
        //     alert( "The request is complete!" );
        // });
    });
 
});
