const express = require('express');

// Set up Express App
const app = express();

app.get('/api', (req, res) => {
	console.log('GET request');
	res.send({
		name: 'Yoshi'
	});
});

// Listen for requests
app.listen(process.env.port || 4000, () => {
	console.log('Now listening for requests');
});
