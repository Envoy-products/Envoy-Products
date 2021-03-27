// function that handles creation of a new product
const addProductFormHandler = async (e) => {
    e.preventDefault();  // prevents default submit behavior

    try {
        // Obtain inputs from the form
        const name = $("#name").val().trim();
        const description = $("#description").val().trim();
        const website = $("#website").val().trim();
        let product_img = $("#prod_img").attr("value");
        if (!product_img) {
            product_img = $("#product_img").val().trim();
        }
        if (!product_img) {
            product_img = "/images/product-default.png";
        }
       
        const category_id = parseInt($("#category").val());
        const retailers = $("#retailers").val();

        const retailerIds = retailers.map(item => parseInt(item)).filter(item => item !== -1);

        // input validation
        const errors = validateInput([
            {input_title: 'Name', input_val: name, criteria: ['required']},
            {input_title: 'Description', input_val: description, criteria: ['required']},
            {input_title: 'Product Image', input_val: product_img, criteria: ['required']},
            {input_title: 'Website', input_val: website, criteria: ['required','url']},
            {input_title: 'Product Category', input_val: category_id, criteria: ['positive_num']},
            {input_title: 'Product Retailer', input_val: retailerIds, criteria: ['non_empty_array']}
        ]);
        
        if (errors) {
            throw new Error(errors);
        }

        // perform api operation
        const response = await fetch('/api/products', {
            method: 'POST',
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
        
        // handle response
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
