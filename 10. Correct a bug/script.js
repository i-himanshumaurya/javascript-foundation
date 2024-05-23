function correctCartQuantities(cart) {
    // Iterate through each item in the cart
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of each item
        cart[i] = cart[i] * 2;
    }
    return cart;
}

// Example usage:
let cartQuantities = [1, 2, 3, 4, 5];
let correctedCart = correctCartQuantities(cartQuantities);

// Display the corrected cart to the console
console.log("Corrected cart quantities: " + correctedCart);
