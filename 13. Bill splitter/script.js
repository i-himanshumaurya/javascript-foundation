function calculateBill(dishCosts, numberOfPeople) {
    // Calculate the total bill by summing the cost of each dish
    let totalBill = dishCosts.reduce((sum, cost) => sum + cost, 0);

    // Calculate the amount each person should pay
    let billPerPerson = totalBill / numberOfPeople;

    // Return an object with the total bill and the bill per person
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage:
let dishCosts = [200, 350, 150, 400]; // Costs of each dish
let numberOfPeople = 4; // Number of people sharing the bill
let billDetails = calculateBill(dishCosts, numberOfPeople);

// Display the bill details to the console
console.log(`Total Bill: Rs. ${billDetails.totalBill}/-`);
console.log(`Bill Per Person: Rs. ${billDetails.billPerPerson.toFixed(2)}/-`);
