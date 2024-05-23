const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the discount amount
    const discountAmount = originalPrice - discountedPrice;

    // Calculate the discount percentage
    const discountPercentage = (discountAmount / originalPrice) * 100;

    // Return the discount percentage rounded to two decimal places
    return discountPercentage.toFixed(2);
};

// Example usage:
let originalPrice = 1000;
let discountedPrice = 800;
let discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

// Display the discount percentage to the console
console.log(`Discount Percentage: ${discountPercentage}%`);
