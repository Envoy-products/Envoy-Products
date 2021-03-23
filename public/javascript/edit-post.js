const editArticleFormHandler = async (event) => {
    event.preventDefault();

    try {

        const title = $("#title").val().trim();
        const post_content = $("#post-content").val().trim();
        const post_url = $("#post-url").val().trim();
        const path_segments = window.location.toString().split('/');
        const id = path_segments[path_segments.length - 1];

        if(!title || !post_content || !post_url) {
            throw new Error("At least one input is invalid!");
        }

        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                post_content,
                post_url
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

const deleteArticlehandler = async function() {
    // Obtain post id from button
    const id = parseInt($(this).attr('data-id'));
    
    if (!id) return;
    
    try {
        // perform 'delete' operation
        const response = await fetch(`/api/posts/${id}`, {
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


$("#edit-article-form").submit(editArticleFormHandler);
$("button[name=delete]").click(deleteArticlehandler);