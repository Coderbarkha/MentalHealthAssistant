// signup.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Create an object to send in the request body
    const signupData = {
        name: name,
        email: email,
        password: password
    };

    // Fetch API request to send signup data to the server
    fetch('https://your-api-url.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to login page or home page after successful signup
            window.location.href = "loginform.html";
        } else {
            alert("Signup failed: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
