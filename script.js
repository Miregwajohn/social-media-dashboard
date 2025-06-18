// Get the toggle input element
const themeToggle = document.getElementById("theme-toggle");

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
}

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        enableDarkMode();
        themeToggle.checked = true;
    } else {
        disableDarkMode();
        themeToggle.checked = false;
    }
});

// Listen for toggle switch changes
themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});