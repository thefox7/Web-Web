// Sound Effects
const ratingSound = new Audio('rating_sound.mp3'); // Adjust the path if needed

// Pop up window
const popup = document.getElementById('popupForm');
const button = document.getElementById('subscribeButton');
const close = document.getElementById('closePopup');

button.addEventListener('click', () => {
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.opacity = 1; // Fade in effect
    }, 0);
    document.getElementById('popupEmail').focus(); // Focus on email input
});

close.addEventListener('click', () => {
    popup.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        popup.style.display = 'none'; // Hide after fade out
    }, 500); // Match this duration to the CSS transition time
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.opacity = 0; // Fade out effect
        setTimeout(() => {
            popup.style.display = 'none'; // Hide after fade out
        }, 500); // Match this duration to the CSS transition time
    }
});

// Showing Date and time
function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString('ru-RU', { dateStyle: 'long', timeStyle: 'short' });
    document.getElementById('dateTime').innerText = formattedDate;
}

setInterval(updateDateTime, 1000); // Date update

// Star rating system
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        ratingSound.play(); // Play rating sound
        stars.forEach((s, i) => {
            s.style.color = i <= index ? '#FFD700' : 'gray'; // Change color to gold for selected stars
        });
        // Optionally log the rating
        console.log(`Rated: ${index + 1} stars`);
    });
});

// Show current time on button click
const timeButton = document.getElementById('showTime');
timeButton.addEventListener('click', () => {
    const now = new Date();
    alert(`Current time: ${now.toLocaleTimeString()}`);
});

// Call applyCurrentTheme on page load to set the theme based on local storage
document.addEventListener('DOMContentLoaded', () => {
    applyCurrentTheme(); // Apply the current theme based on local storage
    updateLoginStatus(); // Check login status
});

