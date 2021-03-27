// function that handles modification of an existing post
const editArticleFormHandler = async (event) => {
    event.preventDefault(); // prevent default submit behaviour

    try {
        // get form inputs
        const title = $("#title").val().trim();
        const post_content = $("#post-content").val().trim();
        let post_url = $("#post-url").val().trim();
        const path_segments = window.location.toString().split('/');
        const id = path_segments[path_segments.length - 1];
        let post_status = $("#post_status").val();

        if (!post_status) post_status = "pending"; 

        // input validation
        const errors = validateInput([
            {input_title: 'Title', input_val: title, criteria: ['required']},
            {input_title: 'Post content', input_val: post_content, criteria: ['required']},
            {input_title: 'Reading Link', input_val: post_url, criteria: ['url']},
            {input_title: 'Post Status', input_val: post_status, criteria: ['not_null']}
        ]);

        if (errors) {
            throw new Error(errors);
        }

        if (post_url === '') post_url = null; // if there is no link, then set this value to null 

        // perform api operation
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                post_content,
                post_url,
                post_status
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // handle response
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

// function that handles deletion of an existing post
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