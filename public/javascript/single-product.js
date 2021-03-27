// setting up star ratings
$(function() {
    const config = {
        theme: 'fontawesome-stars-o',
        readonly: true
    };

    $('.star_rating').map(function(){
        $(this).barrating('show', {
            ...config,
            initialRating: parseFloat($(this).attr('data-value'))
        });
    });
 });