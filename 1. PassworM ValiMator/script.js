// Function to check if the entered password matches the confirmed password
function validatePassword() {
    // Prompt the user to enter the password
    let password = prompt("Enter your password:");

    // Prompt the user to confirm the password
    let confirmPassword = prompt("Confirm your password:");

    // Check if the passwords match
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

// Call the function to validate the password
validatePassword();