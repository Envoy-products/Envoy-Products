const changeCategorySelectHandler = async function() {
    try {
        // Obtain inputs from the form
        const category_id = parseInt($(this).val());
        
        // Input validation
        if (category_id < 0) {
            throw new Error("No category was selected!");
        }

        document.location.replace(`/products?category_id=${category_id}`); 

    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

$("#filter-category").change(changeCategorySelectHandler);

// setting up start ratings
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
