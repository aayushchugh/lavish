const { Schema, model } = require('mongoose');
const Product = require('./ProductModel');
const Order = require('./OrderModel');

const UserSchema = new Schema({
	fname: { type: String, required: true },
	lname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	offerList: { type: Boolean, required: true, default: false },
	mailChimpId: { type: String, required: true },
	cart: [{ type: Schema.Types.ObjectId, ref: Product }],
	orders: [{ type: Schema.Types.ObjectId, ref: Order }],
});

module.exports = model('User', UserSchema);
