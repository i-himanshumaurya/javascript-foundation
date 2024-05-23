function printInvertedTriangle(rows) {
    for (let i = rows; i > 0; i--) {
        let stars = '';
        for (let j = 0; j < i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}

// Example usage:
let numberOfRows = 6;
printInvertedTriangle(numberOfRows);
