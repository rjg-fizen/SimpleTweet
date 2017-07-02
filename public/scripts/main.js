$(function() { 

    var getTweets = function() {
    $.ajax({ 
        url: '/tweets',
        method: 'GET',
        success: function(data){ 
            $('.tweets').html('');
            data.map(function(item) {
                $('.tweets').append(`<div class="tweet">
                                         <p class="tweet-body">
                                            ${item.description}
                                        </p>
                                    </div>`);
        });
        
    }});
    };

    getTweets();

    $('.button').on('click', function(e){
        $.ajax({
            url: '/tweet',
            method: 'POST',
            data: JSON.stringify({ "name": $('.name').val(), "description": $('.description').val()}),
            contentType: 'application/json'
        }).done(function(){
            getTweets();
        })
    })
});