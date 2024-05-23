const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => {
        return total + (item.unitPrice * item.quantity);
    }, 0);
};

// Example usage:
let customerCart = [
    { unitPrice: 100, quantity: 2 },
    { unitPrice: 200, quantity: 1 },
    { unitPrice: 50, quantity: 4 }
];

let totalCost = calculateTotalCost(customerCart);

// Display the total cost to the console
console.log(`Total Cost: Rs. ${totalCost}/-`);
