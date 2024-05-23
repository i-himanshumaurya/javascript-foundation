// Get the moving image element
var movingImage = document.getElementById("movingImage");

// Set initial position variables
var positionX = 0;
var positionY = 0;

// Function to handle keydown events
function handleKeyDown(event) {
    // Get the key code of the pressed arrow key
    var keyCode = event.keyCode;

    // Update position based on arrow key pressed
    switch (keyCode) {
        case 37: // Left arrow key
            positionX -= 10;
            break;
        case 38: // Up arrow key
            positionY -= 10;
            break;
        case 39: // Right arrow key
            positionX += 10;
            break;
        case 40: // Down arrow key
            positionY += 10;
            break;
        default:
            return; // Exit function if key pressed is not an arrow key
    }

    // Update the position of the moving image
    movingImage.style.left = positionX + "px";
    movingImage.style.top = positionY + "px";
}

// Add event listener for keydown events
document.addEventListener("keydown", handleKeyDown);
