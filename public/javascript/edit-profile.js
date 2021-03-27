const editProfileFormHandler = async (e) => {
    e.preventDefault();  // prevents default submit behavior

    try {
        // Obtain inputs from the form
        const first_name = $("#first-name").val().trim();
        const last_name = $("#last-name").val().trim();
        const email = $("#email").val().trim();
        let avatar = $("#avatar-img").attr("value");
        if(!avatar) {
            avatar = $("#avatar-url").val().trim();
        }
        const oldPassword = $("#old-password").val().trim();
        const password = $("#password").val().trim();
        
        const retailerIds = retailers.map(item => parseInt(item)).filter(item => item !== -1);
        const path_segments = window.location.toString().split('/');
        const id = path_segments[path_segments.length - 1];
        
        if (!status) status = "pending"; 

        // Input validation
        if (!name || !description || !website || !product_img || (category_id < 0) || retailerIds.length == 0 || status=="null") {
            throw new Error("At least one input is invalid!");
        }

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


$("#edit-product-form").submit(editProfileFormHandler);
$("button[name=delete]").click(deleteProducthandler);
