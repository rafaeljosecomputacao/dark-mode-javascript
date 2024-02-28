// Get element from DOM
const $changeThemeButton = document.querySelector("#change-theme-button");

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Function to load light or dark mode
function loadTheme() {
  // Get item in local storage
  const darkMode = localStorage.getItem("dark");

  if(darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

// Function to change the theme when changing the checkbox
$changeThemeButton.addEventListener("change", () => {
  toggleDarkMode();

  // Save or remove dark mode from local storage
  localStorage.removeItem("dark");

  if(document.body.classList.contains("dark")) {
    // Set item in local storage
    localStorage.setItem("dark", 1);
  }
});