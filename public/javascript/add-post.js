// function that handles creation of a new post
const addArticleFormHandler = async (event) => {
    event.preventDefault(); // prevent default submit behaviour

    try {
        // get form inputs
        const title = $("#title").val().trim();
        const post_content = $("#post-content").val().trim();
        let post_url = $("#post-url").val().trim();

        // input validation
        const errors = validateInput([
            {input_title: 'Title', input_val: title, criteria: ['required']},
            {input_title: 'Post content', input_val: post_content, criteria: ['required']},
            {input_title: 'Reading Link', input_val: post_url, criteria: ['url']}
        ]);

        if (errors) {
            throw new Error(errors);
        }
        
        if (post_url === '') post_url = null; // if there is no link, then set this value to null 

        // perform api operation
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_content,
                post_url
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // handle response
        if(response.ok) {
            document.location.replace('/articles');
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

$("#add-article-form").submit(addArticleFormHandler);