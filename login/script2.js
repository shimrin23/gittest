document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Sample username and password for demonstration
    const correctUsername = "user";
    const correctPassword = "password123";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate username and password
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the Task Manager page
        window.location.href = "../index.html";  // Adjust the path as needed
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
