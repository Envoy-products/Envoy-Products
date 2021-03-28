// Performs logout
const logoutHandler = async () => {
    try {
        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
            document.location.replace('/');
        } else {
            throw new Error(response.statusText);
        }

    } catch (err) {
        $("#error-msg").text(err);
        $("#errorModal").modal();
    }
}

$("#logout-btn").click(logoutHandler);


// set timer to check idle time and logout if the user is authenticated and idle for a set time
const IDLE_TIME_IN_MINUTES = 10; 
$(document).ready(function () {
    var idleTime = 0;

    // increment the idle time counter every second.
    var idleInterval = setInterval(timerIncrement, 60 * 1000);

    function timerIncrement() {
        idleTime++;
        if (idleTime > IDLE_TIME_IN_MINUTES) {
            logoutHandler();
        }
    }

    // reset idle timer on mouse movement
    $(this).mousemove((e) => {
        idleTime = 0;
    });
})