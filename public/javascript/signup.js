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
    try {

        // Obtain inputs from the form
        const firstname = $("#firstname-signup").val().trim();
        const lastname = $("#lastname-signup").val().trim();
        const email = $("#email-signup").val().trim();
        const password = $("#password-signup").val().trim();
        let avatar = $("#avatar_url").attr("value");
        if (!avatar) {
            avatar = $("#avatar-signup").val().trim();
        }
        if (!avatar) {
            avatar = "/images/user-default.png";
        }
        const region = $("#region-signup").val();

        // input validation
        const errors = validateInput([
            { input_title: 'First name', input_val: firstname, criteria: ['required'] },
            { input_title: 'Last name', input_val: lastname, criteria: ['required'] },
            { input_title: 'Email', input_val: email, criteria: ['required', 'email'] },
            { input_title: 'Password', input_val: password, criteria: ['required', 'char_len_8'] },
            { input_title: 'Region', input_val: region, criteria: ['positive_num'] }
        ]);

        if (errors) {
            throw new Error(errors);
        }

        // perform api operation
        const response = await handleSignup(email, password, firstname, lastname, region, avatar);

        if (response.ok) {
            document.location.replace('/');
        } else {
            throw new Error(response.statusText);
        }
    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
};

$("#signup-form").submit(signupFormSubmitHandler);
