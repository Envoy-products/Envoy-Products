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

// $(function() {
//     $('.star_rating').barrating('show', {
//       theme: 'fontawesome-stars-o',
//       initialRating: 2.5, 
//       readonly: true
//     });
//  });
