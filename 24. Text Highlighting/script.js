document.addEventListener("DOMContentLoaded", function() {
    // Get the paragraph element
    var paragraph = document.getElementById("paragraph");
    
    // Split the paragraph text into words
    var words = paragraph.textContent.split(" ");

    // Iterate through each word
    words.forEach(function(word) {
        // Check if the word has more than 8 characters
        if (word.length > 8) {
            // Create a span element to wrap the word
            var span = document.createElement("span");
            span.textContent = word;
            span.classList.add("highlighted");

            // Replace the word in the paragraph with the span element
            paragraph.innerHTML = paragraph.innerHTML.replace(word, span.outerHTML);
        }
    });
});
