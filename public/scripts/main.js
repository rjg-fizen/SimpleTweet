// $(function() { 
    $.ajax({ 
        url: '/tweets',
        method: 'GET',
        success: function(data){ 
            data.map(function(item) {
                $('.main').append(`<div class="tweet">
                                         <h4 class="tweet-author">${item.name}</h4>
                                         <p class="tweet-body">
                                            ${item.description}
                                        </p>
                                    </div>`);
        });
        
    }});
// });