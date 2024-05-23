function capitalizeFirstLetter(name) {
    // Check if the first letter is lowercase using a ternary operator
    let modifiedName = (name.charAt(0) === name.charAt(0).toLowerCase()) 
        ? name.charAt(0).toUpperCase() + name.slice(1) 
        : name;

    // Return the modified or original name
    return modifiedName;
}

// Example usage:
let userName = prompt("Enter your name:");
let correctedName = capitalizeFirstLetter(userName);

// Display the corrected name to the console
console.log("Corrected Name: " + correctedName);
