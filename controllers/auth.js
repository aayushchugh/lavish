const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/UserModel');

exports.signup = async (req, res) => {
	try {
		const { fname, lname, email, password, cpassword } = req.body;

		if (!fname || !lname || !email || !password || !cpassword) {
			return res.status(400).json({
				status: 'error',
				message:
					'fname, lname, email, password, cpassword every field is required',
			});
		}
		// check if user already exists
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(409).json({
				status: 'error',
				message: 'User already exists',
			});
		}

		// check if password and confirm password are the same
		if (password !== cpassword) {
			return res.status(400).json({
				status: 'error',
				message: 'Password and Confirm Password do not match',
			});
		}

		// hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// create user
		const user = await User.create({
			fname,
			lname,
			email,
			password: hashedPassword,
			offerList: false,
			mailChimpId: 'null',
			cart: [],
			orders: [],
		});

		// create token
		const token = await jwt.sign(
			{
				_id: user._id,
				fname: user.fname,
				lname: user.lname,
				email: user.email,
				cart: user.cart,
				order: user.orders,
			},
			process.env.TOKEN_SECRET
		);

		// send response
		res.status(201).json({
			status: 'success',
			message: 'User created successfully',
			data: user,
			token,
		});
	} catch (err) {
		res.status(500).json({
			status: 'error',
			message: 'internal server error',
			error: err,
		});
	}
};
