const express = require('express');
const routes = require('./routes/api');
const bodyParse = require('body-parser');

// Set up Express App
const app = express();

app.use(bodyParser.json());

// Initialize routes
app.use('/api', routes);

// Listen for requests
app.listen(process.env.port || 4000, () => {
	console.log('Now listening for requests');
});
