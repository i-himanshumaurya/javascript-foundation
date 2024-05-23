document.getElementById("addTodoButton").addEventListener("click", function() {
    // Get the input value
    var todoInput = document.getElementById("todoInput");
    var todoText = todoInput.value.trim();

    // If input is not empty, add a new todo item
    if (todoText !== "") {
        addTodoItem(todoText);
        todoInput.value = ""; // Clear the input field
        todoInput.focus(); // Focus back on the input field
    } else {
        alert("Please enter a todo item.");
    }
});

function addTodoItem(todoText) {
    // Create a new list item
    var li = document.createElement("li");
    li.textContent = todoText;

    // Add the list item to the todo list
    document.getElementById("todoList").appendChild(li);
}
