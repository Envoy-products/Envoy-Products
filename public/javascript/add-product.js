async function newFormHandler(event) {
    event.preventDefault();
  
    const product = document.querySelector('input[name="post-product"]').value;
    const description = document.querySelector('input[name="post-description]').value;
    const website = document.querySelector('input[name="post-website]').value;
    const buy = document.querySelector('input[name="post-buy]').value;
    const image = document.querySelector('input[name="post-image]').value;
    
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        product,
        description,
        website,
        buy,
        image
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);