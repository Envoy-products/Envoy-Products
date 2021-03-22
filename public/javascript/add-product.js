const addProductFormHandler = async (e) => {
    e.preventDefault();  // prevents default submit behavior

    try {
        // Obtain inputs from the form
        const name = $("#name").val().trim();
        const description = $("#description").val().trim();
        const website = $("#website").val().trim();
        const product_img = $("#product_img").val().trim();
        const category_id = parseInt($("#category").val());
        const retailers = $("#retailers").val();

        const retailerIds = retailers.map(item => parseInt(item)).filter(item => item !== -1);

        // Input validation
        if (!name || !description || !website || !product_img || (category_id < 0) || retailerIds.length == 0) {
            throw new Error("At least one input is invalid!");
        }

        const response = await fetch('/api/products', {
            method: 'post',
            body: JSON.stringify({
                name,
                description,
                website,
                product_img,
                category_id,
                retailerIds
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
            document.location.replace('/products'); // [TODO - Change this to dashboard]
        } else {
            throw new Error(response.statusText);
        }

    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

$("#add-product-form").submit(addProductFormHandler);
