document.getElementById('mood-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting

    const moodInput = document.getElementById('mood').value;
    
    if (moodInput) {
        // Create a new mood entry with the current date
        const moodEntry = {
            date: new Date().toLocaleDateString(),
            mood: moodInput
        };

        // Get existing mood data from localStorage or initialize as an empty array
        let moodData = JSON.parse(localStorage.getItem('moodData')) || [];

        // Add the new mood entry to the moodData array
        moodData.unshift(moodEntry); // Using unshift to add the new mood at the beginning of the list

        // Save the updated moodData array back to localStorage
        localStorage.setItem('moodData', JSON.stringify(moodData));

        // Clear the input field
        document.getElementById('mood').value = '';

        // Update the displayed mood log
        displayMoodData();
    } else {
        alert('Please enter your mood!');
    }
});

function displayMoodData() {
    // Get mood data from localStorage
    let moodData = JSON.parse(localStorage.getItem('moodData')) || [];

    const moodList = document.getElementById('mood-list');
    moodList.innerHTML = ''; // Clear the existing list

    // Loop through the moodData array and display each entry
    moodData.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.date}: ${entry.mood}`;
        moodList.appendChild(listItem);
    });
}

// Display the existing mood data when the page loads
document.addEventListener('DOMContentLoaded', displayMoodData);
