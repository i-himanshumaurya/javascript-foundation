function removeDuplicates(cart) {
    // Create a Set to store unique items from the cart
    let uniqueItems = new Set(cart);

    // Convert the Set back to an array
    let uniqueCart = Array.from(uniqueItems);

    // Return the array with unique items
    return uniqueCart;
}

// Example usage:
let shoppingCart = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape'];
let updatedCart = removeDuplicates(shoppingCart);

// Display the updated cart to the console
console.log("Updated cart: " + updatedCart);
