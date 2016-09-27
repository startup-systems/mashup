$('#action-button').click(function() {
    $.ajax({
        url: '//dev.markitondemand.com/Api/v2/Lookup',
        data: {
            input: document.getElementById('symbolsearch').value
        },
        error: function() {
            alert('An error has occurred');
        },
        dataType: 'jsonp',
        success: function(data) {
            $.ajax({
                url: '//dev.markitondemand.com/Api/v2/Quote',
                data: {
                    symbol: data[0].Symbol,
                },
                error: function() {
                    alert('An error has occured');
                },
                dataType: 'jsonp',
                success: function(result){
                    $('#quote').html(data[0].Name + "'s Last Price on ("+ data[0].Exchange + "): "+ result.LastPrice);
                },
                type: 'GET'
            });
        },
        type: 'GET'
    });
});
