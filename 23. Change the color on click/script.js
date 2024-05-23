// Array of predefined colors
const colors = ["#007bff", "#6c757d", "#28a745", "#ffc107", "#dc3545", "#17a2b8", "#6610f2", "#fd7e14", "#20c997", "#6f42c1"];

// Function to change the background color
function changeBackgroundColor() {
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
}

// Add event listener to the button
document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);
