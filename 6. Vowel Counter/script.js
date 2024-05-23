function countVowels(name) {
    // Define a string containing all vowels
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Iterate through each character in the name
    for (let i = 0; i < name.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(name[i])) {
            count++;
        }
    }

    // Return the count of vowels
    return count;
}

// Example usage:
let userName = prompt("Enter your name:");
let numberOfVowels = countVowels(userName);

// Display the number of vowels to the console
console.log("Number of vowels in the name: " + numberOfVowels);
