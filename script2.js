document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Checking for hardcoded username and password
    if (username === "user" && password === "pass") {
        window.location.href = "./gittest/index.html"; // Redirect to Task Manager page
    } else {
        alert("Invalid credentials! Please try again.");
    }
});
