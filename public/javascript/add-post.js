async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;
    const post_url = document.querySelector('textarea[name="post-url"]').value;

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
        document.location.replace('/a');
    } else {
        alert(response.statusText);
    }

}

document.querySelector('.btn').addEventListener('click', newFormHandler);