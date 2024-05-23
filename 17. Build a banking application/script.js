// Function to deposit funds into the account
const deposit = (account, amount) => {
    // Ensure the amount is positive
    if (amount <= 0) {
        console.log("Invalid amount for deposit.");
        return;
    }

    // Update the balance
    account.balance += amount;
    console.log(`Rs. ${amount} deposited successfully.`);
    console.log(`New balance: Rs. ${account.balance}`);
};

// Function to withdraw funds from the account
const withdraw = (account, amount) => {
    // Ensure sufficient balance for withdrawal
    if (amount > account.balance) {
        console.log("Insufficient funds for withdrawal.");
        return;
    }

    // Update the balance
    account.balance -= amount;
    console.log(`Rs. ${amount} withdrawn successfully.`);
    console.log(`New balance: Rs. ${account.balance}`);
};

// Example usage:
let customerAccount = {
    name: "John Doe",
    balance: 5000
};

// Deposit Rs. 2000 into John's account
deposit(customerAccount, 2000);

// Withdraw Rs. 3000 from John's account
withdraw(customerAccount, 3000);
