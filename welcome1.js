document.addEventListener("DOMContentLoaded", function () {
    // Get the buttons and links
    const getStartedButton = document.querySelector(".get-started");
    const signInLink = document.querySelector(".signin-link");

    // Redirect when clicking "Get Started"
    getStartedButton.addEventListener("click", function () {
        window.location.href = "signup.html"; // Change this to the actual signup page
    });

    // Redirect when clicking "Sign in"
    signInLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default behavior
        window.location.href = "login.html"; // Change this to the actual login page
    });
});
