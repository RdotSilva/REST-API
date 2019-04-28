const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create ninja Schema and model
const NinjaSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	rank: {
		type: String
	}
});
