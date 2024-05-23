function calculateRentalCost(daysRented, carType) {
    // Define the rental cost per day for each type of car
    const rentalRates = {
        'Economy': 4000,
        'Midsize': 10000,
        'Luxury': 20000
    };

    // Get the rental rate based on the car type
    let ratePerDay = rentalRates[carType];

    // If the car type is invalid, return an error message
    if (ratePerDay === undefined) {
        return 'Invalid car type';
    }

    // Calculate the total rental cost
    let totalCost = ratePerDay * daysRented;

    // Return the total rental cost
    return totalCost;
}

// Example usage:
let days = 5;
let carType = 'Luxury';
let rentalCost = calculateRentalCost(days, carType);

// Display the rental cost to the console
console.log(`The total rental cost for ${days} days in a ${carType} car is: Rs. ${rentalCost}/-`);
