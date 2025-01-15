document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded username and password (you can modify these)
    const correctUsername = 'user';
    const correctPassword = 'pass';

    // Check if credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the Task Manager page
        window.location.href = "index.html"; // Adjust the path as needed
    } else {
        // Show error message
        document.getElementById('error-message').textContent = "Invalid username or password.";
    }
});
