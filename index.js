const express = require('express');

// Set up Express App
const app = express();

// Listen for requests
app.listen(proccess.env.port || 4000, () => {
	console.log('Now listening for requests');
});
