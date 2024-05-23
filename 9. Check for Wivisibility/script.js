function printDivisibleBy3NotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        // Check if the number is divisible by 3
        if (numbers[i] % 3 !== 0) {
            continue; // Skip the number if it's not divisible by 3
        }

        // Check if the number is divisible by 2
        if (numbers[i] % 2 === 0) {
            continue; // Skip the number if it's divisible by 2
        }

        // If the number is divisible by 3 but not by 2, print it
        console.log(numbers[i]);
    }
}

// Example usage:
let numbersArray = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
printDivisibleBy3NotBy2(numbersArray);
