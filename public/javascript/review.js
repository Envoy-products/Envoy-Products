const reviewFormHandler = async (e) => {
    e.preventDefault();  // prevents default submit behavior
    
    // Obtain inputs from the form
    const content = $("#review-content").val().trim();
    const product_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (!content) return;

    try {
        const response = await fetch('/api/reviews', {
            method: 'post',
            body: JSON.stringify({
                product_id,
                content
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

const removeReviewHandler = async function() {
    // Obtain review id from button
    const id = parseInt($(this).attr('data-id'));
    
    if (!id) return;

    try {
        // perform 'delete' operation
        const response = await fetch(`/api/reviews/${id}`, {
            method: 'DELETE'
        });

        // Handle response from 'delete' operation
        if (response.ok) {
            document.location.reload(); // for a successful response, reload the page to reflect the update
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

$("#review-form").click(reviewFormHandler);
$( ".remove-btn-container button[data-action='remove']" ).on( "click", removeReviewHandler);