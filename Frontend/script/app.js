const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');
const app = express();
const PORT = 3000;

// Load the service account key
const projectId = 'mentalhealthassistant-uhab'; // Replace with your Dialogflow project ID
const sessionClient = new dialogflow.SessionsClient({
    keyFilename: 'service-account.json', // Path to your JSON key file
});

app.use(bodyParser.json());

// Route to handle chatbot requests
app.post('/chat', async (req, res) => {
    const sessionId = 'unique-session-id'; // Use a unique session ID
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: req.body.query, // User's message
                languageCode: 'en',  // Language code
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        res.json({
            response: result.fulfillmentText, // Bot's reply
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error connecting to Dialogflow');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
