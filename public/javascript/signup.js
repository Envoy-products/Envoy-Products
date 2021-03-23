const handleSignup = async (email, password, first_name, last_name, region_id, avatar) => {
    return fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
            email,
            password,
            first_name,
            last_name,
            region_id,
            avatar,
            admin: false
        }),
        headers: { 'Content-Type': 'application/json' }
    });
};

const signupFormSubmitHandler = async (e) => {
    e.preventDefault(); // prevents default submit button behaviour

    // Obtain inputs from the form
    const firstname = $("#firstname-signup").val().trim();
    const lastname = $("#lastname-signup").val().trim();
    const email = $("#email-signup").val().trim();
    const password = $("#password-signup").val().trim();
    let avatar = $("#avatar_url").attr("value");
    if (!avatar){
        avatar = $("#avatar-signup").val().trim();
    } 
    if (!avatar){
         avatar = "/images/user-default.png";
    }
    const region = $("#region-signup").val();

    // Validate inputs and perform Signup
    if (firstname && lastname && email && validator.isEmail(email) && password && (region != -1)) {
        try {
            const response = await handleSignup(email, password, firstname, lastname, region, avatar) ;

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
        $("#signup-error").text("Please use valid input");
        // clear error message after 3s
        setTimeout(() => $("#signup-error").text(""), 2000);
    }
};

$("#signup-form").submit(signupFormSubmitHandler);
