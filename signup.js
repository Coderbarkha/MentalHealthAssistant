

//const express= require('express');

//const router=express.Router();

const User=require('./user');
const router=express.Router();
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    console.log("barkha,barkhathakkar@gmail.com,coding123", { name, email, password });
    alert("Signup successful! Redirecting to homepage...");
    window.location.href = "homepage.html";

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
    fetch('https://myapp-api.com/signup', {
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
            window.location.href = "homepage.html";
        } else {
            alert("Signup failed: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
