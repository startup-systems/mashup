
/**
 * Created by mario on 9/28/16.
 */
var bar = '';

function showProgressCircle(show) {
    if (show){
        $('#progreso').css('visibility', 'visible');
        bar.animate(1.0);
    } else {
        $('#progreso').css('visibility', 'hidden');

    }
}

function stockFound(data) {
    if (data.quotes.hasOwnProperty('unmatched_symbols')){
        return false;
    }
    return true;

}
function getCompanyInfo(companyName) {
    showProgressCircle(true);

    $.ajax({
        dataType: 'json',
        url: 'https://sandbox.tradier.com/v1/markets/quotes?symbols='+companyName,
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer fVEdh0GYIEYgg9S4GEqwEOK65OEi');
        },
        success: function(data) {
            console.log('Success');
            console.log(data);

            if (!stockFound(data)){
                console.log('Error, stock not found!');
                $('#error').css('visibility', 'visible');

                showProgressCircle(false);
                return;
            }
            $('#error').css('visibility', 'hidden');


            $('#symbol').html(data.quotes.quote.symbol);
            $('#description').html(data.quotes.quote.description);
            $('#last').html('$'+data.quotes.quote.last);

            $('#result').css('visibility', 'visible');
            $('#stockdetails').click(function () {
                console.log('Open: '+'http://finance.yahoo.com/quote/'+$('#symbol').html());
                window.open('http://finance.yahoo.com/quote/'+$('#symbol').html(), $('#description').html()+' Information');
            });

            $('#news').click(function () {
                console.log('Open: '+'https://www.google.com/search?tbm=nws&q='+$('#description').html());
                window.open('https://www.google.com/search?tbm=nws&q='+$('#description').html(), $('#description').html()+' Information');
            });

            $('#wikipedia').click(function () {
                console.log('Open: '+'https://en.wikipedia.org/w/index.php?search='+$('#description').html());
                window.open('https://en.wikipedia.org/w/index.php?search='+$('#description').html(), $('#description').html()+' Information');
            });






            showProgressCircle(false);
        },
        error: function() {
            console.log('Error');
            showProgressCircle(false);
        },
    });

}

function main() {
    console.log('DOCUMENT READY');
    bar = new ProgressBar.SemiCircle(progreso, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 500,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    $('#companyinput').keypress(function(e){
        if(e.keyCode==13) {
            var companyname = $('#companyinput').val();
            console.log('company name: '+companyname);
            getCompanyInfo(companyname);
        }
    });
}




$(document).ready(function () {
   main();


      // Number from 0.0 to 1.0
});