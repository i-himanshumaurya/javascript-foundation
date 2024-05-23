function mixColors(color1, color2) {
    let result;

    // Normalize the color inputs to lowercase
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    // Use a switch statement to determine the resulting color
    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'orange';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'blue':
            switch (color2) {
                case 'red':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'yellow':
            switch (color2) {
                case 'red':
                    result = 'orange';
                    break;
                case 'blue':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        default:
            result = 'Invalid color combination';
    }

    // Print the result to the console
    console.log(result);
}

// Example usage:
let color1 = prompt("Enter the first color:");
let color2 = prompt("Enter the second color:");

mixColors(color1, color2);