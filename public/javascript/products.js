const changeCategorySelectHandler = async function() {
    try {
        // Obtain inputs from the form
        const category_id = parseInt($(this).val());
        
        // Input validation
        if (category_id < 0) {
            throw new Error("No category was selected!");
        }

        
        document.location.replace(`/products?category_id=${category_id}`); 
        // const response = await fetch('/api/products', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         name,
        //         description,
        //         website,
        //         product_img,
        //         category_id,
        //         retailerIds
        //     }),
        //     headers: { 'Content-Type': 'application/json' }
        // });
    
        // if (response.ok) {
        //     document.location.replace('/products'); // [TODO - Change this to dashboard]
        // } else {
        //     throw new Error(response.statusText);
        // }

    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

$("#filter-category").change(changeCategorySelectHandler);
