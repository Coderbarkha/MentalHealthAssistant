// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Create an object to send in the request body
    const loginData = {
        email: email,
        password: password
    };

    // Fetch API request to send login data to the server
    fetch('https://your-api-url.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to homepage on successful login
            window.location.href = "homepage.html";
        } else {
            alert("Login failed: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
