// Color Change
const bodyColors = ['#1A1A1A', '#FFFFFF']; // Background colors for body
const cardColors = ['#424242', '#FFFFFF']; // Card background colors
let currentIndex = localStorage.getItem('themeIndex') ? parseInt(localStorage.getItem('themeIndex')) : 1; // Load from local storage or default to 0
let nightTextColor = '#FFFFFF'; // Text color for night theme
let dayTextColor = '#000000'; // Text color for day theme

// Function to update the pop-up styles based on the theme
function updatePopupStyles() {
    const popupForm = document.getElementById('popupForm');
    if (currentIndex === 0) {
        popupForm.style.backgroundColor = '#424242'; // Dark background for night theme
        popupForm.style.color = nightTextColor; // White text for night theme
    } else {
        popupForm.style.backgroundColor = 'white'; // Light background for day theme
        popupForm.style.color = dayTextColor; // Black text for day theme
    }
}

// Function to apply the current theme
function applyTheme() {
    const cards = document.querySelectorAll('.card');

    // Apply body color
    document.body.style.backgroundColor = bodyColors[currentIndex];
    document.body.style.color = currentIndex === 0 ? nightTextColor : dayTextColor;

    // Apply card colors
    cards.forEach(card => {
        card.style.backgroundColor = cardColors[currentIndex];
        card.style.color = currentIndex === 0 ? nightTextColor : dayTextColor;
    });

    // Update popup styles
    updatePopupStyles();
}

// Event Listener for the theme change button
document.getElementById('changeColorButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % 2; // Toggle index between 0 and 1
    localStorage.setItem('themeIndex', currentIndex); // Save the current theme index to local storage
    applyTheme(); // Apply the new theme
});

// Call applyTheme on page load to set the theme based on local storage
document.addEventListener('DOMContentLoaded', applyTheme);
