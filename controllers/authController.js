const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/UserModel');

const generateJwtToken = user => {
	return jwt.sign(
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
};

/* --------------------------------- signup --------------------------------- */

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
		const token = generateJwtToken(user);

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

/* ---------------------------------- login --------------------------------- */

exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				status: 'error',
				message: 'email and password are required',
			});
		}

		// find user
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({
				status: 'error',
				message: 'User not found please signup',
			});
		}

		// check if password is correct
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(401).json({
				status: 'error',
				message: 'Invalid credentials',
			});
		}

		// create token
		const token = generateJwtToken(user);

		// send response
		res.status(200).json({
			status: 'success',
			message: 'User logged in successfully',
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
