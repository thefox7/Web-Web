// User Authentication functions
function login(username) {
    localStorage.setItem('username', username);
    // Store the current theme index when the user logs in
    localStorage.setItem('themeIndex', currentIndex);
    updateLoginStatus();
}

function logout() {
    localStorage.removeItem('username');
    // Optionally remove theme index when logging out
    localStorage.removeItem('themeIndex');
    updateLoginStatus();
}

function updateLoginStatus() {
    const username = localStorage.getItem('username');
    const loginStatusElement = document.getElementById('loginStatus');
    const logoutButton = document.getElementById('logoutButton');
    const loginLink = document.getElementById('openLoginModal'); // Get the login link

    if (username) {
        loginStatusElement.textContent = `Logged in as: ${username}`;
        logoutButton.style.display = 'block'; // Show logout button
        loginLink.textContent = username; // Change the login link text to the username
        loginLink.href = '#'; // Keep the link functional
    } else {
        loginStatusElement.textContent = 'Logged out';
        logoutButton.style.display = 'none'; // Hide logout button
        loginLink.textContent = 'Login'; // Reset link text to "Login"
        loginLink.href = '#'; // Keep the link functional
    }
}

// Modal functions
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Event Listeners
document.getElementById('openLoginModal').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    openModal();
});
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    login(username);
    closeModal(); // Close modal after login
});
document.getElementById('logoutButton').addEventListener('click', () => {
    logout();
    closeModal(); // Close modal after logout
});

// Close modal if user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Call this function on page load to check login status
document.addEventListener('DOMContentLoaded', updateLoginStatus);
