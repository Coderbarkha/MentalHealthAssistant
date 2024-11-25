document.getElementById('moodForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const mood = document.getElementById('moodSelect').value;
  const token = 'user_token'; // Replace with actual token from login
  
  const res = await fetch('http://localhost:5000/addMood', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, mood })
  });
  
  const data = await res.json();
  console.log(data);
});

async function getMoods() {
  const token = 'user_token'; // Replace with actual token from login
  
  const res = await fetch(`http://localhost:5000/getMoods?token=${token}`);
  const moods = await res.json();
  
  const moodHistoryDiv = document.getElementById('moodHistory');
  moodHistoryDiv.innerHTML = '';
  
  moods.forEach(mood => {
    const div = document.createElement('div');
    div.textContent = `${mood.mood} - ${new Date(mood.date).toLocaleDateString()}`;
    moodHistoryDiv.appendChild(div);
  });
}

getMoods();
// moodtracker.js
document.getElementById('moodForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  const mood = document.getElementById('moodSelect').value;

  // Create an object to send in the request body
  const moodData = {
      mood: mood
  };

  // Fetch API request to send mood data to the server
  fetch('https://your-api-url.com/mood', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(moodData),
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          // Display mood history or success message
          document.getElementById('moodHistory').innerHTML = `Mood tracked: ${mood}`;
      } else {
          alert("Failed to track mood: " + data.message);
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
  });
});
