const express = require('express');
const router = express.Router;

// Get a list of ninjas from the db
router.get('/ninjas', (req, res) => {
	res.send({
		type: 'GET'
	});
});
