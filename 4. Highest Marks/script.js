function findHighestMarks(marks) {
    // Initialize the highest marks with the first element in the array
    let highestMarks = marks[0];

    // Iterate through the array to find the highest marks using the ternary operator
    for (let i = 1; i < marks.length; i++) {
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    // Display the highest marks to the console
    console.log("The highest marks scored by a student are: " + highestMarks);
}

// Example usage:
let marks = [85, 92, 78, 90, 88];
findHighestMarks(marks);