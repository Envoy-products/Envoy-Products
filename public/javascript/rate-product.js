const handleBtnAddRateProd = () => {
    $('#star_rating_form')
        .removeClass('disp-none disp-block')
        .addClass('disp-block');
};

const handleBtnUpdateRateProd = () => {
    $('#star_rating_update_form')
        .removeClass('disp-none disp-block')
        .addClass('disp-block');
};

const ratingAddFormSubmitHandler = async (e) => {
    e.preventDefault();  // prevents default submit behavior

    try {
        // Obtain inputs from the form
        const rating_val = $("#star_rating_form_select").val();
        const path_segments = window.location.toString().split('/');
        const product_id = path_segments[path_segments.length - 1];

        // Input validation
        if (!rating_val || !product_id) {
            throw new Error("At least one input is invalid!");
        }

        const response = await fetch(`/api/ratings`, {
            method: 'POST',
            body: JSON.stringify({
                rating_val,
                product_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            throw new Error(response.statusText);
        }

    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

const ratingUpdateFormSubmitHandler = async (e) => {
    e.preventDefault();  // prevents default submit behavior

    try {
        // Obtain inputs from the form
        const rating_val = $("#star_rating_update_form_select").val();
        const id = $("#star_rating_update_form_select").attr('data-id');
        const path_segments = window.location.toString().split('/');
        const product_id = path_segments[path_segments.length - 1];

        // Input validation
        if (!id || !rating_val || !product_id) {
            throw new Error("At least one input is invalid!");
        }

        const response = await fetch(`/api/ratings/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                rating_val,
                product_id
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            throw new Error(response.statusText);
        }

    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

const deleteRatinghandler = async function () {
    // Obtain product id from button
    const id = parseInt($(this).attr('data-id'));

    if (!id) return;

    try {
        // perform 'delete' operation
        const response = await fetch(`/api/ratings/${id}`, {
            method: 'DELETE'
        });

        // Handle response from 'delete' operation
        if (response.ok) {
            document.location.reload();
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

$("#star_rating_form").submit(ratingAddFormSubmitHandler);
$("#star_rating_update_form").submit(ratingUpdateFormSubmitHandler);
$('#remove-rating-btn').click(deleteRatinghandler);

$('#btn-rate-prod').click(handleBtnAddRateProd);
$('#btn-update-rate-prod').click(handleBtnUpdateRateProd);

// setting up start ratings
$(function () {
    const config = {
        theme: 'fontawesome-stars-o',
        readonly: false
    };

    $('#star_rating_form_select').barrating('show', {
        ...config,
        initialRating: 1
    });

    const current_rating_val = parseInt($('#star_rating_update_form_select').attr('data-val'));
    
    $('#star_rating_update_form_select').barrating('show', {
        ...config,
        initialRating: current_rating_val
    });

});