const { Schema, model } = require('mongoose');
const Product = require('./ProductModel');

const OrderSchema = new Schema({
	user: { type: Schema.Types.ObjectId },
	price: { type: Number, required: true },
	status: { type: String, required: true, default: 'pending' },
	products: [
		{
			id: { type: Schema.Types.ObjectId, ref: Product },
			quantity: { type: String, required: true, default: 1 },
		},
	],
});

module.exports = model('Order', OrderSchema);
