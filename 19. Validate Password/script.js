document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve email and password input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validate email and password
    var isValid = validate(email, password);

    // Display error or success message
    var errorMessageElement = document.getElementById("errorMessage");
    if (isValid) {
        errorMessageElement.textContent = "Valid email and password!";
        errorMessageElement.classList.remove("error-message");
        errorMessageElement.classList.add("success-message");
    } else {
        errorMessageElement.textContent = "Invalid email or password!";
        errorMessageElement.classList.remove("success-message");
        errorMessageElement.classList.add("error-message");
    }
});

function validate(email, password) {
    // Validate email
    var isValidEmail = email.includes("@");

    // Validate password
    var isValidPassword = password.length >= 8;

    // Return true if both email and password are valid, otherwise false
    return isValidEmail && isValidPassword;
}
