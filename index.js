const express = require('express');
const routes = require('./routes/api');

// Set up Express App
const app = express();

// Initialize routes
app.use('/api', routes);

// Listen for requests
app.listen(process.env.port || 4000, () => {
	console.log('Now listening for requests');
});
