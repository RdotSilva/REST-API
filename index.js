const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up Express App
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

// Initialize routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
	// console.log(err);
	res.status(422).send({ error: err.message });
});

// Listen for requests
app.listen(process.env.port || 4000, () => {
	console.log('Now listening for requests');
});
