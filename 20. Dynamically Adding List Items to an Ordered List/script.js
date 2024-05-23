// Pre-existing array of list items
const learningItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Database Management"
];

// Initialize index to keep track of the next item to add
let currentIndex = 0;

// Function to add a new list item
function addListItem() {
    const learningList = document.getElementById("learningList");
    const messageElement = document.getElementById("message");

    // Check if there are remaining items in the array
    if (currentIndex < learningItems.length) {
        // Create a new list item
        const newItem = document.createElement("li");
        newItem.textContent = learningItems[currentIndex];
        
        // Append the new list item to the learning list
        learningList.appendChild(newItem);

        // Increment the index for the next item
        currentIndex++;
    } else {
        // Display message if all items have been added
        messageElement.textContent = "All items have been added.";
    }
}

// Add event listener to the button
document.getElementById("addItemButton").addEventListener("click", addListItem);
