// handles edit profile action
const editProfileFormHandler = async (e) => {
    e.preventDefault();  // prevents default submit behavior

    try {
        // Obtain inputs from the form
        const first_name = $("#first-name").val().trim();
        const last_name = $("#last-name").val().trim();
        const email = $("#email").val().trim();
        let avatar = $("#avatar-img").attr("value");
        if(!avatar) {
            avatar = $("#avatar-url").val().trim();
        }
        if(!avatar) {
            avatar = $("#avatar-cur").attr("src");
        }
        const currentPassword = $("#current-password").val().trim();
        const newPassword = $("#password").val().trim();
        const id = parseInt($("#edit-profile-form").attr("data-userId"));
        
        // input validation
        let errors = validateInput([
            { input_title: 'First name', input_val: first_name, criteria: ['required'] },
            { input_title: 'Last name', input_val: last_name, criteria: ['required'] },
            { input_title: 'Email', input_val: email, criteria: ['required', 'email'] }
        ]);

        // if the user intends to change password, then validate password fields
        if (currentPassword) {
            let errorNewPassword = validateInput([
                { input_title: 'New Password', input_val: newPassword, criteria: ['required', 'char_len_8'] }
            ]);
            if (errorNewPassword) {
                if (errors) errors.concat(errorNewPassword);
                else errors = errorNewPassword;
            }
        }

        if (newPassword) {
            let errorCurrentPassword = validateInput([
                { input_title: 'Current Password', input_val: currentPassword, criteria: ['required'] },
                { input_title: 'New Password', input_val: newPassword, criteria: ['required', 'char_len_8'] }
            ]);
            if (errorCurrentPassword) {
                if (errors) errors.concat(errorCurrentPassword);
                else errors = errorCurrentPassword;
            }
        }

        if (errors) throw new Error(errors);
        
        // perform api operation
        const response = await fetch(`/api/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                currentPassword,
                newPassword,
                avatar
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        // handle response
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

// handles delete profile action
const deleteProfileHandler = async function() {
    // Obtain product id from button
    const id = parseInt($(this).attr('data-userId'));
    
    if (!id) return;
    
    try {
        // perform 'delete' operation
        const response = await fetch(`/api/users/${id}`, {
            method: 'DELETE'
        });

        // Handle response from 'delete' operation
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


$("#edit-profile-form").submit(editProfileFormHandler);
$("button[name=delete]").click(deleteProfileHandler);
