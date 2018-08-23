
$('.submit').on('submit', function (){

    var values = {
        key: $('.input').val()
    }


    $.post('/api', values, function (err, data){
        // console.log('Sent to front-end');
    })

});