const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
	title: { type: String, required: true },
	type: { type: String, required: true },
	category: { type: String, required: true },
	mrp: { type: Number, required: true },
	price: { type: Number, required: true },
	weight: { type: Number, required: true },
	material: { type: String, required: true },
	todaysDeals: { type: Boolean, required: true },
	size: [],
	color: [],
	images: [],
});

module.exports = model('Product', ProductSchema);
