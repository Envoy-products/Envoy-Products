// function that handles modification of an existing product features
const editProductFormHandler = async (e) => {
    e.preventDefault();  // prevents default submit behavior

    try {
        // Obtain inputs from the form
        const name = $("#name").val().trim();
        const description = $("#description").val().trim();
        const website = $("#website").val().trim();
        const product_img = $("#product_img").val().trim();
        const category_id = parseInt($("#category").val());
        const retailers = $("#retailers").val();
        let status = $("#status").val();
        
        const retailerIds = retailers.map(item => parseInt(item)).filter(item => item !== -1);
        const path_segments = window.location.toString().split('/');
        const id = path_segments[path_segments.length - 1];
        
        if (!status) status = "pending"; 

        // input validation
        const errors = validateInput([
            {input_title: 'Name', input_val: name, criteria: ['required']},
            {input_title: 'Description', input_val: description, criteria: ['required']},
            {input_title: 'Product Image', input_val: product_img, criteria: ['required']},
            {input_title: 'Website', input_val: website, criteria: ['required','url']},
            {input_title: 'Product Category', input_val: category_id, criteria: ['positive_num']},
            {input_title: 'Product Retailer', input_val: retailerIds, criteria: ['non_empty_array']},
            {input_title: 'Status', input_val: status, criteria: ['not_null']}
        ]);
        
        if (errors) {
            throw new Error(errors);
        }

        // perform api operation
        const response = await fetch(`/api/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name,
                description,
                website,
                product_img,
                category_id,
                status,
                retailerIds
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            throw new Error(response.statusText);
        }

    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

// function that handles deletion of an existing product
const deleteProducthandler = async function() {
    // Obtain product id from button
    const id = parseInt($(this).attr('data-id'));
    
    if (!id) return;
    
    try {
        // perform 'delete' operation
        const response = await fetch(`/api/products/${id}`, {
            method: 'DELETE'
        });

        // Handle response from 'delete' operation
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};


$("#edit-product-form").submit(editProductFormHandler);
$("button[name=delete]").click(deleteProducthandler);
