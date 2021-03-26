async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    };
}

const removeCommentHandler = async function() {
    // Obtain review id from button
    const id = parseInt($(this).attr('data-id'));
    
    if (!id) return;

    try {
        // perform 'delete' operation
        const response = await fetch(`/api/comments/${id}`, {
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

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
$( ".remove-button-container button[data-action='remove']" ).on( "click", removeCommentHandler);