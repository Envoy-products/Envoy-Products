const handleLogin = async (email, password) => {
    return fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
    });
};

const loginFormSubmitHandler = async (e) => {
    e.preventDefault(); // prevents default submit button behaviour

    // Obtain inputs from the form
    const email = $("#email-login").val().trim();
    const password = $("#password-login").val().trim();

    // Validate inputs and perform Login
    if (email && validator.isEmail(email) && password) {
        try {
            const response = await handleLogin(email, password);

            if (response.ok) {
                document.location.replace('/');
            } else {
                throw new Error(response.statusText);
            }
        } catch (err) {
            $("#error-msg").text(err);
            $("#errorModal").modal();
        }

    } else {
        $("#login-error").text("Please use valid input");
        // clear error message after 3s
        setTimeout(() => $("#login-error").text(""), 2000);
    }
};

$("#login-form").submit(loginFormSubmitHandler);
