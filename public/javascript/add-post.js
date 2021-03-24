const addArticleFormHandler = async (event) => {
    event.preventDefault();

    try {

        const title = $("#title").val().trim();
        const post_content = $("#post-content").val().trim();
        const post_url = $("#post-url").val().trim();

        if(!title || !post_content || !post_url) {
            throw new Error("At least one input is invalid!");
        }

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

        if(response.ok) {
            document.location.replace('/articles'); // [TODO - Change this to dashboard]
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

$("#add-article-form").submit(addArticleFormHandler);