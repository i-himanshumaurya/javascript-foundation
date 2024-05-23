window.addEventListener("scroll", function() {
    // Calculate the scroll progress as a percentage
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollableHeight) * 100;

    // Update the width of the progress bar
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = progress + "%";
});
